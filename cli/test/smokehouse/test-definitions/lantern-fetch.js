/**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/** @type {LH.Config} */
const config = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance'],
    precomputedLanternData: {
      additionalRttByOrigin: {
        'http://localhost:10200': 500,
      },
      serverResponseTimeByOrigin: {
        'http://localhost:10200': 1000,
      },
    },
  },
};

/**
 * @type {Smokehouse.ExpectedRunnerResult}
 */
const expectations = {
  lhr: {
    requestedUrl: 'http://localhost:10200/tricky-main-thread.html?fetch',
    finalDisplayedUrl: 'http://localhost:10200/tricky-main-thread.html?fetch',
    audits: {
      'interactive': {
        // Make sure all of the CPU time is reflected in the perf metrics as well.
        // The scripts stalls for 3 seconds and lantern has a 4x multiplier so 12s minimum.
        numericValue: '>12000',
      },
      'bootup-time': {
        details: {
          items: {
            0: {
            // TODO: requires sampling profiler and async stacks, see https://github.com/GoogleChrome/lighthouse/issues/8526
            // url: /main-thread-consumer/,
              scripting: '>1000',
            },
          },
        },
      },
    },
  },
};

export default {
  id: 'lantern-fetch',
  expectations,
  config,
};
