/**
 * @license Copyright 2016 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import assert from 'assert/strict';

import RedirectsAudit from '../../audits/redirects.js';
import {networkRecordsToDevtoolsLog} from '../network-records-to-devtools-log.js';
import {createTestTrace} from '../create-test-trace.js';

const FAILING_THREE_REDIRECTS = [{
  requestId: '1',
  networkRequestTime: 0,
  priority: 'VeryHigh',
  url: 'http://example.com/',
  timing: {receiveHeadersEnd: 11},
}, {
  requestId: '1:redirect',
  networkRequestTime: 1000,
  priority: 'VeryHigh',
  url: 'https://example.com/',
  timing: {receiveHeadersEnd: 12},
}, {
  requestId: '1:redirect:redirect',
  networkRequestTime: 2000,
  priority: 'VeryHigh',
  url: 'https://m.example.com/',
  timing: {receiveHeadersEnd: 17},
}, {
  requestId: '1:redirect:redirect:redirect',
  networkRequestTime: 3000,
  priority: 'VeryHigh',
  url: 'https://m.example.com/final',
  timing: {receiveHeadersEnd: 19},
}];

const FAILING_TWO_REDIRECTS = [{
  requestId: '1',
  networkRequestTime: 445_000,
  priority: 'VeryHigh',
  url: 'http://lisairish.com/',
  timing: {receiveHeadersEnd: 446},
}, {
  requestId: '1:redirect',
  networkRequestTime: 446_000,
  priority: 'VeryHigh',
  url: 'https://lisairish.com/',
  timing: {receiveHeadersEnd: 447},
}, {
  requestId: '1:redirect:redirect',
  networkRequestTime: 447_000,
  priority: 'VeryHigh',
  url: 'https://www.lisairish.com/',
  timing: {receiveHeadersEnd: 448},
}];

const SUCCESS_ONE_REDIRECT = [{
  requestId: '1',
  networkRequestTime: 135_000,
  priority: 'VeryHigh',
  url: 'https://lisairish.com/',
  timing: {receiveHeadersEnd: 136},
}, {
  requestId: '1:redirect',
  networkRequestTime: 136_000,
  priority: 'VeryHigh',
  url: 'https://www.lisairish.com/',
  timing: {receiveHeadersEnd: 139},
}];

const SUCCESS_NOREDIRECT = [{
  requestId: '1',
  networkRequestTime: 135_873,
  priority: 'VeryHigh',
  url: 'https://www.google.com/',
  timing: {receiveHeadersEnd: 140},
}];

const FAILING_CLIENTSIDE = [
  {
    requestId: '1',
    networkRequestTime: 445_000,
    priority: 'VeryHigh',
    url: 'http://lisairish.com/',
    timing: {receiveHeadersEnd: 446},
  },
  {
    requestId: '1:redirect',
    networkRequestTime: 446_000,
    priority: 'VeryHigh',
    url: 'https://lisairish.com/',
    timing: {receiveHeadersEnd: 447},
  },
  {
    requestId: '2',
    networkRequestTime: 447_000,
    priority: 'VeryHigh',
    url: 'https://www.lisairish.com/',
    timing: {receiveHeadersEnd: 448},
  },
];

const FAILING_SELF_REDIRECT = [{
  requestId: '1',
  url: 'https://redirect.test/',
  priority: 'VeryHigh',
  networkRequestTime: 0,
  responseHeadersEndTime: 500,
},
{
  requestId: '2',
  url: 'https://redirect.test/',
  priority: 'VeryHigh',
  networkRequestTime: 1000,
  responseHeadersEndTime: 1500,
},
{
  requestId: '3',
  url: 'https://redirect.test/',
  priority: 'VeryHigh',
  networkRequestTime: 3000,
  responseHeadersEndTime: 3500,
}];

describe('Performance: Redirects audit', () => {
  const mockArtifacts = (networkRecords, finalDisplayedUrl) => {
    const devtoolsLog = networkRecordsToDevtoolsLog(networkRecords);
    const frameUrl = networkRecords[0].url;

    const trace = createTestTrace({frameUrl, traceEnd: 5000});
    const navStart = trace.traceEvents.find(e => e.name === 'navigationStart');
    navStart.args.data.navigationId = '1';

    return {
      GatherContext: {gatherMode: 'navigation'},
      traces: {defaultPass: trace},
      devtoolsLogs: {defaultPass: devtoolsLog},
      URL: {
        requestedUrl: networkRecords[0].url,
        mainDocumentUrl: finalDisplayedUrl,
        finalDisplayedUrl,
      },
    };
  };

  it('fails when client-side redirects detected', async () => {
    const context = {settings: {}, computedCache: new Map()};
    const artifacts = mockArtifacts(FAILING_CLIENTSIDE, 'https://www.lisairish.com/');

    const traceEvents = artifacts.traces.defaultPass.traceEvents;
    const navStart = traceEvents.find(e => e.name === 'navigationStart');
    const secondNavStart = JSON.parse(JSON.stringify(navStart));
    traceEvents.push(secondNavStart);
    navStart.args.data.isLoadingMainFrame = true;
    navStart.args.data.documentLoaderURL = 'http://lisairish.com/';
    secondNavStart.ts++;
    secondNavStart.args.data.isLoadingMainFrame = true;
    secondNavStart.args.data.documentLoaderURL = 'https://www.lisairish.com/';
    secondNavStart.args.data.navigationId = '2';

    const output = await RedirectsAudit.audit(artifacts, context);
    expect(output.details.items).toHaveLength(3);
    expect(Math.round(output.score * 100) / 100).toMatchInlineSnapshot(`0.35`);
    expect(output.numericValue).toMatchInlineSnapshot(`2000`);
  });

  it('uses lantern timings when throttlingMethod is simulate', async () => {
    const artifacts = mockArtifacts(FAILING_THREE_REDIRECTS, 'https://m.example.com/final');
    const context = {settings: {throttlingMethod: 'simulate'}, computedCache: new Map()};
    const output = await RedirectsAudit.audit(artifacts, context);
    expect(output.details.items).toHaveLength(4);
    expect(output.details.items.map(item => [item.url, item.wastedMs])).toMatchInlineSnapshot(`
      Array [
        Array [
          "http://example.com/",
          630,
        ],
        Array [
          "https://example.com/",
          480,
        ],
        Array [
          "https://m.example.com/",
          780,
        ],
        Array [
          "https://m.example.com/final",
          0,
        ],
      ]
    `);
    expect(output.numericValue).toMatchInlineSnapshot(`1890`);
  });

  it('fails when 3 redirects detected', () => {
    const artifacts = mockArtifacts(FAILING_THREE_REDIRECTS, 'https://m.example.com/final');
    const context = {settings: {}, computedCache: new Map()};
    return RedirectsAudit.audit(artifacts, context).then(output => {
      expect(output.details.items).toHaveLength(4);
      expect(Math.round(output.score * 100) / 100).toMatchInlineSnapshot(`0.24`);
      expect(output.numericValue).toMatchInlineSnapshot(`3000`);
    });
  });

  it('fails when 2 redirects detected', () => {
    const artifacts = mockArtifacts(FAILING_TWO_REDIRECTS, 'https://www.lisairish.com/');
    const context = {settings: {}, computedCache: new Map()};
    return RedirectsAudit.audit(artifacts, context).then(output => {
      expect(output.details.items).toHaveLength(3);
      expect(Math.round(output.score * 100) / 100).toMatchInlineSnapshot(`0.35`);
      expect(output.numericValue).toMatchInlineSnapshot(`2000`);
    });
  });

  it('passes when one redirect detected', () => {
    const artifacts = mockArtifacts(SUCCESS_ONE_REDIRECT, 'https://www.lisairish.com/');
    const context = {settings: {}, computedCache: new Map()};
    return RedirectsAudit.audit(artifacts, context).then(output => {
      // If === 1 redirect, perfect score is expected, regardless of latency
      // We will still generate a table and show wasted time
      expect(output.details.items).toHaveLength(2);
      expect(output.score).toEqual(1);
      expect(output.numericValue).toMatchInlineSnapshot(`1000`);
    });
  });

  it('passes when no redirect detected', () => {
    const artifacts = mockArtifacts(SUCCESS_NOREDIRECT, 'https://www.google.com/');
    const context = {settings: {}, computedCache: new Map()};
    return RedirectsAudit.audit(artifacts, context).then(output => {
      assert.equal(output.score, 1);
      assert.equal(output.details.items.length, 0);
      assert.equal(output.numericValue, 0);
    });
  });

  it('fails when client-side redirects page to itself', async () => {
    const context = {settings: {}, computedCache: new Map()};
    const artifacts = mockArtifacts(FAILING_SELF_REDIRECT, 'https://redirect.test/');

    const traceEvents = artifacts.traces.defaultPass.traceEvents;
    const navStart = traceEvents.find(e => e.name === 'navigationStart');

    const secondNavStart = JSON.parse(JSON.stringify(navStart));
    traceEvents.push(secondNavStart);
    secondNavStart.args.data.navigationId = '2';

    const thirdNavStart = JSON.parse(JSON.stringify(navStart));
    traceEvents.push(thirdNavStart);
    thirdNavStart.args.data.navigationId = '3';

    const output = await RedirectsAudit.audit(artifacts, context);
    expect(output).toMatchObject({
      score: expect.toBeApproximately(0.24),
      numericValue: 3000,
      details: {
        items: [
          {url: 'https://redirect.test/', wastedMs: 1000},
          {url: 'https://redirect.test/', wastedMs: 2000},
          {url: 'https://redirect.test/', wastedMs: 0},
        ],
      },
    });
  });

  it('throws when no navigation requests are found', async () => {
    const artifacts = mockArtifacts(SUCCESS_NOREDIRECT, 'https://www.google.com/');
    const context = {settings: {}, computedCache: new Map()};
    const traceEvents = artifacts.traces.defaultPass.traceEvents;
    const navStart = traceEvents.find(e => e.name === 'navigationStart');
    navStart.args.data.navigationId = 'NO_MATCHY';

    await expect(RedirectsAudit.audit(artifacts, context)).rejects
        .toThrow('No navigation requests found');
  });
});
