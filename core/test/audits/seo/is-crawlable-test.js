/**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import {strict as assert} from 'assert';

import IsCrawlableAudit from '../../../audits/seo/is-crawlable.js';
import {networkRecordsToDevtoolsLog} from '../../network-records-to-devtools-log.js';

describe('SEO: Is page crawlable audit', () => {
  const makeMetaElements = content => [{name: 'robots', content, node: {}}];

  it('fails when page is blocked from indexing with a robots metatag', () => {
    const robotsValues = [
      'noindex',
      'none',
      'foo, noindex, bar',
      'all, none, all',
      '     noindex      ',
      'unavailable_after: 25 Jun 2010 15:00:00 PST',
      ' Unavailable_after: 25-Aug-2007 15:00:00 EST',
    ];

    const allRuns = robotsValues.map(robotsValue => {
      const mainDocumentUrl = 'https://example.com/';
      const mainResource = {
        url: mainDocumentUrl,
        responseHeaders: [],
      };
      const devtoolsLog = networkRecordsToDevtoolsLog([mainResource]);
      const artifacts = {
        devtoolsLogs: {[IsCrawlableAudit.DEFAULT_PASS]: devtoolsLog},
        URL: {mainDocumentUrl},
        MetaElements: makeMetaElements(robotsValue),
        RobotsTxt: {},
      };

      const context = {computedCache: new Map()};
      return IsCrawlableAudit.audit(artifacts, context).then(auditResult => {
        assert.equal(auditResult.score, 0);
        assert.equal(auditResult.details.items.length, 1);
      });
    });

    return Promise.all(allRuns);
  });

  it('succeeds when there are no blocking directives in the metatag', () => {
    const mainDocumentUrl = 'https://example.com/';
    const mainResource = {
      url: mainDocumentUrl,
      responseHeaders: [],
    };
    const devtoolsLog = networkRecordsToDevtoolsLog([mainResource]);
    const artifacts = {
      devtoolsLogs: {[IsCrawlableAudit.DEFAULT_PASS]: devtoolsLog},
      URL: {mainDocumentUrl},
      requestMainResource: () => Promise.resolve(mainResource),
      MetaElements: makeMetaElements('all, noarchive'),
      RobotsTxt: {},
    };

    const context = {computedCache: new Map()};
    return IsCrawlableAudit.audit(artifacts, context).then(auditResult => {
      assert.equal(auditResult.score, 1);
    });
  });

  it('succeeds when there is no robots metatag', () => {
    const mainDocumentUrl = 'https://example.com/';
    const mainResource = {
      url: mainDocumentUrl,
      responseHeaders: [],
    };
    const devtoolsLog = networkRecordsToDevtoolsLog([mainResource]);
    const artifacts = {
      devtoolsLogs: {[IsCrawlableAudit.DEFAULT_PASS]: devtoolsLog},
      URL: {mainDocumentUrl},
      MetaElements: [],
      RobotsTxt: {},
    };

    const context = {computedCache: new Map()};
    return IsCrawlableAudit.audit(artifacts, context).then(auditResult => {
      assert.equal(auditResult.score, 1);
    });
  });

  it('fails when page is blocked from indexing with a header', () => {
    const robotsHeaders = [
      [
        {name: 'x-robots-tag', value: 'noindex'},
      ],
      [
        {name: 'X-Robots-Tag', value: 'all'},
        {name: 'x-robots-tag', value: 'none'},
      ],
      [
        {name: 'X-ROBOTS-TAG', value: 'all, none'},
      ],
      [
        {name: 'x-robots-tag', value: '    noindex    '},
      ],
      [
        {name: 'x-robots-tag', value: 'unavailable_after: 25 Jun 2010 15:00:00 PST'},
      ],
      [
        {name: 'x-robots-tag', value: 'all, unavailable_after: 25-Jun-2010 15:00:00 PST'},
      ],
    ];

    const allRuns = robotsHeaders.map(headers => {
      const mainDocumentUrl = 'https://example.com/';
      const mainResource = {
        url: mainDocumentUrl,
        responseHeaders: headers,
      };
      const devtoolsLog = networkRecordsToDevtoolsLog([mainResource]);
      const artifacts = {
        devtoolsLogs: {[IsCrawlableAudit.DEFAULT_PASS]: devtoolsLog},
        URL: {mainDocumentUrl},
        MetaElements: [],
        RobotsTxt: {},
      };

      const context = {computedCache: new Map()};
      return IsCrawlableAudit.audit(artifacts, context).then(auditResult => {
        assert.equal(auditResult.score, 0);
        assert.equal(auditResult.details.items.length, 1);
      });
    });

    return Promise.all(allRuns);
  });

  it('succeeds when there are no blocking directives in the robots header', () => {
    const mainDocumentUrl = 'https://example.com/';
    const mainResource = {
      url: mainDocumentUrl,
      responseHeaders: [
        {name: 'X-Robots-Tag', value: 'all, nofollow'},
        {name: 'X-Robots-Tag', value: 'unavailable_after: 25 Jun 2045 15:00:00 PST'},
      ],
    };
    const devtoolsLog = networkRecordsToDevtoolsLog([mainResource]);
    const artifacts = {
      devtoolsLogs: {[IsCrawlableAudit.DEFAULT_PASS]: devtoolsLog},
      URL: {mainDocumentUrl},
      MetaElements: [],
      RobotsTxt: {},
    };

    const context = {computedCache: new Map()};
    return IsCrawlableAudit.audit(artifacts, context).then(auditResult => {
      assert.equal(auditResult.score, 1);
    });
  });

  it('succeeds when there is no robots header and robots.txt is unavailable', () => {
    const mainDocumentUrl = 'https://example.com/';
    const mainResource = {
      url: mainDocumentUrl,
      responseHeaders: [],
    };
    const devtoolsLog = networkRecordsToDevtoolsLog([mainResource]);
    const artifacts = {
      devtoolsLogs: {[IsCrawlableAudit.DEFAULT_PASS]: devtoolsLog},
      URL: {mainDocumentUrl},
      MetaElements: [],
      RobotsTxt: {},
    };

    const context = {computedCache: new Map()};
    return IsCrawlableAudit.audit(artifacts, context).then(auditResult => {
      assert.equal(auditResult.score, 1);
    });
  });

  it('ignores UA specific directives', () => {
    const mainDocumentUrl = 'https://example.com/';
    const mainResource = {
      url: mainDocumentUrl,
      responseHeaders: [
        {name: 'x-robots-tag', value: 'googlebot: unavailable_after: 25 Jun 2007 15:00:00 PST'},
        {name: 'x-robots-tag', value: 'unavailable_after: 25 Jun 2045 15:00:00 PST'},
      ],
    };
    const devtoolsLog = networkRecordsToDevtoolsLog([mainResource]);
    const artifacts = {
      devtoolsLogs: {[IsCrawlableAudit.DEFAULT_PASS]: devtoolsLog},
      URL: {mainDocumentUrl},
      MetaElements: [],
      RobotsTxt: {},
    };

    const context = {computedCache: new Map()};
    return IsCrawlableAudit.audit(artifacts, context).then(auditResult => {
      assert.equal(auditResult.score, 1);
    });
  });

  it('fails when page is blocked from indexing by robots.txt', () => {
    const robotsTxts = [
      {
        content: `User-agent: *
        Disallow: /`,
      },
      {
        content: `User-agent: *
        Disallow: /test/page.html`,
      },
      {
        content: `User-agent: *
        Disallow:

        User-agent: *
        Disallow: /`,
      },
      {
        content: `User-agent: *
        Disallow: /one/
        Disallow: /two/
        Disallow: /test/
        Allow: page.html
        # Allow: /test/page.html
        Allow: /test/page.html /someother/url.html`,
      },
    ];

    const allRuns = robotsTxts.map(robotsTxt => {
      const mainDocumentUrl = 'http://example.com/test/page.html';
      const mainResource = {
        url: mainDocumentUrl,
        responseHeaders: [],
      };
      const devtoolsLog = networkRecordsToDevtoolsLog([mainResource]);
      const artifacts = {
        devtoolsLogs: {[IsCrawlableAudit.DEFAULT_PASS]: devtoolsLog},
        URL: {mainDocumentUrl},
        MetaElements: [],
        RobotsTxt: robotsTxt,
      };

      const context = {computedCache: new Map()};
      return IsCrawlableAudit.audit(artifacts, context).then(auditResult => {
        assert.equal(auditResult.score, 0);
        assert.equal(auditResult.details.items.length, 1);
      });
    });

    return Promise.all(allRuns);
  });

  it('succeeds when page is allowed by robots.txt', () => {
    const robotsTxts = [
      {
        content: `User-agent: SomeBot
        Disallow: /`,
      },
      {
        content: `User-agent: *
        Disallow: /_/
        Disallow: /search?q=*
        Disallow: /test/
        Allow: /test/page.html`,
      },
    ];

    const allRuns = robotsTxts.map(robotsTxt => {
      const mainDocumentUrl = 'http://example.com/test/page.html';
      const mainResource = {
        url: mainDocumentUrl,
        responseHeaders: [],
      };
      const devtoolsLog = networkRecordsToDevtoolsLog([mainResource]);
      const artifacts = {
        devtoolsLogs: {[IsCrawlableAudit.DEFAULT_PASS]: devtoolsLog},
        URL: {mainDocumentUrl},
        MetaElements: [],
        RobotsTxt: robotsTxt,
      };

      const context = {computedCache: new Map()};
      return IsCrawlableAudit.audit(artifacts, context).then(auditResult => {
        assert.equal(auditResult.score, 1);
      });
    });

    return Promise.all(allRuns);
  });

  it('returns all failing items', () => {
    const mainDocumentUrl = 'http://example.com/test/page.html';
    const mainResource = {
      url: mainDocumentUrl,
      responseHeaders: [
        {name: 'x-robots-tag', value: 'none'},
        {name: 'x-robots-tag', value: 'noindex'},
      ],
    };
    const robotsTxt = {
      content: `User-agent: *
      Disallow: /`,
    };
    const devtoolsLog = networkRecordsToDevtoolsLog([mainResource]);
    const artifacts = {
      devtoolsLogs: {[IsCrawlableAudit.DEFAULT_PASS]: devtoolsLog},
      URL: {mainDocumentUrl},
      MetaElements: makeMetaElements('noindex'),
      RobotsTxt: robotsTxt,
    };

    const context = {computedCache: new Map()};
    return IsCrawlableAudit.audit(artifacts, context).then(auditResult => {
      assert.equal(auditResult.score, 0);
      assert.equal(auditResult.details.items.length, 4);

      expect(auditResult.details.items).toMatchInlineSnapshot(`
        Array [
          Object {
            "source": Object {
              "boundingRect": undefined,
              "lhId": undefined,
              "nodeLabel": undefined,
              "path": undefined,
              "selector": undefined,
              "snippet": "<meta name=\\"robots\\" content=\\"noindex\\" />",
              "type": "node",
            },
          },
          Object {
            "source": "x-robots-tag: none",
          },
          Object {
            "source": "x-robots-tag: noindex",
          },
          Object {
            "source": Object {
              "column": 0,
              "line": 1,
              "type": "source-location",
              "url": "http://example.com/robots.txt",
              "urlProvider": "network",
            },
          },
        ]
      `);
    });
  });
});
