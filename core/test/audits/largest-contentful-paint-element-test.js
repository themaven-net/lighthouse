/**
 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import LargestContentfulPaintElementAudit from '../../audits/largest-contentful-paint-element.js';
import {defaultSettings} from '../../config/constants.js';
import {createTestTrace} from '../create-test-trace.js';
import {networkRecordsToDevtoolsLog} from '../network-records-to-devtools-log.js';

const requestedUrl = 'http://example.com:3000';
const mainDocumentUrl = 'http://www.example.com:3000';

const scriptUrl = 'http://www.example.com/script.js';
const imageUrl = 'http://www.example.com/image.png';

function mockNetworkRecords() {
  return [{
    requestId: '2',
    priority: 'High',
    isLinkPreload: false,
    networkRequestTime: 0,
    networkEndTime: 500,
    timing: {sendEnd: 0, receiveHeadersEnd: 500},
    transferSize: 400,
    url: requestedUrl,
    frameId: 'ROOT_FRAME',
  },
  {
    requestId: '2:redirect',
    resourceType: 'Document',
    priority: 'High',
    isLinkPreload: false,
    networkRequestTime: 500,
    responseHeadersEndTime: 800,
    networkEndTime: 1000,
    timing: {sendEnd: 0, receiveHeadersEnd: 300},
    transferSize: 16_000,
    url: mainDocumentUrl,
    frameId: 'ROOT_FRAME',
  },
  {
    requestId: '3',
    resourceType: 'Script',
    priority: 'High',
    isLinkPreload: false,
    networkRequestTime: 1000,
    networkEndTime: 2000,
    transferSize: 32_000,
    url: scriptUrl,
    initiator: {type: 'parser', url: mainDocumentUrl},
    frameId: 'ROOT_FRAME',
  },
  {
    requestId: '4',
    resourceType: 'Image',
    priority: 'High',
    isLinkPreload: false,
    networkRequestTime: 2000,
    networkEndTime: 4500,
    transferSize: 640_000,
    url: imageUrl,
    initiator: {type: 'script', url: scriptUrl},
    frameId: 'ROOT_FRAME',
  }];
}

describe('Performance: largest-contentful-paint-element audit', () => {
  it('correctly surfaces the LCP element', async () => {
    const artifacts = {
      TraceElements: [{
        traceEventType: 'largest-contentful-paint',
        node: {
          devtoolsNodePath: '1,HTML,3,BODY,5,DIV,0,HEADER',
          selector: 'div.l-header > div.chorus-emc__content',
          nodeLabel: 'My Test Label',
          snippet: '<h1 class="test-class">',
        },
        type: 'text',
      }],
      settings: JSON.parse(JSON.stringify(defaultSettings)),
      traces: {
        defaultPass: createTestTrace({
          traceEnd: 6000,
          largestContentfulPaint: 8000,
        }),
      },
      devtoolsLogs: {
        defaultPass: networkRecordsToDevtoolsLog(mockNetworkRecords()),
      },
      URL: {
        requestedUrl,
        mainDocumentUrl,
        finalDisplayedUrl: mainDocumentUrl,
      },
      GatherContext: {gatherMode: 'navigation'},
    };

    const context = {settings: artifacts.settings, computedCache: new Map()};
    const auditResult = await LargestContentfulPaintElementAudit.audit(artifacts, context);

    expect(auditResult.score).toEqual(1);
    expect(auditResult.notApplicable).toEqual(false);
    expect(auditResult.displayValue).toBeDisplayString('1 element found');
    expect(auditResult.details.items).toHaveLength(2);
    expect(auditResult.details.items[0].items).toHaveLength(1);
    expect(auditResult.details.items[0].items[0].node.path).toEqual('1,HTML,3,BODY,5,DIV,0,HEADER');
    expect(auditResult.details.items[0].items[0].node.nodeLabel).toEqual('My Test Label');
    expect(auditResult.details.items[0].items[0].node.snippet).toEqual('<h1 class="test-class">');

    // LCP phases
    expect(auditResult.details.items[1].items).toHaveLength(4);
    expect(auditResult.details.items[1].items[0].phase).toBeDisplayString('TTFB');
    expect(auditResult.details.items[1].items[0].timing).toBeCloseTo(800, 0.1);
    expect(auditResult.details.items[1].items[1].phase).toBeDisplayString('Load Delay');
    expect(auditResult.details.items[1].items[1].timing).toBeCloseTo(651, 0.1);
    expect(auditResult.details.items[1].items[2].phase).toBeDisplayString('Load Time');
    expect(auditResult.details.items[1].items[2].timing).toBeCloseTo(1813.7, 0.1);
    expect(auditResult.details.items[1].items[3].phase).toBeDisplayString('Render Delay');
    expect(auditResult.details.items[1].items[3].timing).toBeCloseTo(2539.2, 0.1);
  });

  it('doesn\'t throw an error when there is nothing to show', async () => {
    const artifacts = {
      TraceElements: [],
      settings: JSON.parse(JSON.stringify(defaultSettings)),
      traces: {
        defaultPass: createTestTrace({
          traceEnd: 6000,
          largestContentfulPaint: 4500,
        }),
      },
      devtoolsLogs: {
        defaultPass: networkRecordsToDevtoolsLog(mockNetworkRecords()),
      },
      URL: {
        requestedUrl,
        mainDocumentUrl,
        finalDisplayedUrl: mainDocumentUrl,
      },
      GatherContext: {gatherMode: 'navigation'},
    };

    const context = {settings: artifacts.settings, computedCache: new Map()};
    const auditResult = await LargestContentfulPaintElementAudit.audit(artifacts, context);

    expect(auditResult.score).toEqual(1);
    expect(auditResult.notApplicable).toEqual(true);
    expect(auditResult.displayValue).toBeDisplayString('0 elements found');
    expect(auditResult.details.items).toHaveLength(1);
    expect(auditResult.details.items[0].items).toHaveLength(0);
  });
});
