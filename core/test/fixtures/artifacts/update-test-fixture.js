/**
 * @license Copyright 2023 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

// https://docs.google.com/spreadsheets/d/1AaYzpzWnpXQ4JB5IZzOkTO9Zf5Sm0I8dsp7MhBgthMg/edit?usp=sharing

import * as puppeteer from 'puppeteer';

import {LH_ROOT} from '../../../../root.js';
import {Server} from '../../../../cli/test/fixtures/static-server.js';
import {saveTrace, saveDevtoolsLog} from '../../../lib/asset-saver.js';

/**
 * @typedef CollectMeta
 * @property {string} name
 * @property {string} about
 * @property {(page: puppeteer.Page, port: number) => Promise<LH.UserFlow>} runUserFlow
 * @property {(artifacts: LH.Artifacts) => void} verify
 * @property {boolean} saveTrace
 * @property {boolean} saveDevtoolsLog
 */

/**
 * @param {CollectMeta} collectMeta
*/
export async function updateTestFixture(collectMeta) {
  const browser = await puppeteer.launch();
  const server = new Server(0);
  const dir = `${LH_ROOT}/core/test/fixtures/artifacts/${collectMeta.name}`;
  server.baseDir = `${dir}/page`;
  await server.listen(0, 'localhost');
  const port = server.getPort();

  try {
    const page = await browser.newPage();
    const flow = await collectMeta.runUserFlow(page, port);
    const {artifacts} = flow.createArtifactsJson().gatherSteps[0];
    collectMeta.verify(artifacts);
    if (collectMeta.saveTrace) {
      await saveTrace(artifacts.Trace, `${dir}/trace.json`);
    }
    if (collectMeta.saveDevtoolsLog) {
      await saveDevtoolsLog(artifacts.DevtoolsLog, `${dir}/devtoolslog.json`);
    }
  } finally {
    await server.close();
    await browser.close();
  }
}
