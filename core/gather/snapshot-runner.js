/**
 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import log from 'lighthouse-logger';

import {Driver} from './driver.js';
import {Runner} from '../runner.js';
import {getEmptyArtifactState, collectPhaseArtifacts, awaitArtifacts} from './runner-helpers.js';
import {initializeConfig} from '../config/config.js';
import {getBaseArtifacts, finalizeArtifacts} from './base-artifacts.js';

/**
 * @param {{page: LH.Puppeteer.Page, config?: LH.Config.Json, flags?: LH.Flags}} options
 * @return {Promise<LH.Gatherer.FRGatherResult>}
 */
async function snapshotGather(options) {
  const {page, flags = {}} = options;
  log.setLevel(flags.logLevel || 'error');

  const {config} = await initializeConfig('snapshot', options.config, flags);
  const driver = new Driver(page);
  await driver.connect();

  /** @type {Map<string, LH.ArbitraryEqualityMap>} */
  const computedCache = new Map();
  const url = await driver.url();

  const runnerOptions = {config, computedCache};
  const artifacts = await Runner.gather(
    async () => {
      const baseArtifacts = await getBaseArtifacts(config, driver, {gatherMode: 'snapshot'});
      baseArtifacts.URL = {
        initialUrl: url,
        finalUrl: url,
      };

      const artifactDefinitions = config.artifacts || [];
      const artifactState = getEmptyArtifactState();
      await collectPhaseArtifacts({
        phase: 'getArtifact',
        gatherMode: 'snapshot',
        driver,
        page,
        baseArtifacts,
        artifactDefinitions,
        artifactState,
        computedCache,
        settings: config.settings,
      });

      await driver.disconnect();

      const artifacts = await awaitArtifacts(artifactState);
      return finalizeArtifacts(baseArtifacts, artifacts);
    },
    runnerOptions
  );
  return {artifacts, runnerOptions};
}

export {
  snapshotGather,
};
