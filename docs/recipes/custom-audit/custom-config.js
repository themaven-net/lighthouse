/**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

export default {
  // 1. Run your custom tests along with all the default Lighthouse tests.
  extends: 'lighthouse:default',

  // 2. Register new artifact with custom gatherer.
  artifacts: [
    {id: 'MemoryProfile', gatherer: 'memory-gatherer'},
  ],

  // 3. Add custom audit to the list of audits 'lighthouse:default' will run.
  audits: [
    'memory-audit',
  ],

  // 4. Create a new 'My site audits' section in the default report for our results.
  categories: {
    mysite: {
      title: 'My site audits',
      description: 'Audits for our super awesome site',
      auditRefs: [
        // When we add more custom audits, `weight` controls how they're averaged together.
        {id: 'memory-audit', weight: 1},
      ],
    },
  },
};
