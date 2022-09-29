/**
 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import {rollup} from 'rollup';

import * as rollupPlugins from './rollup-plugins.js';
import {LH_ROOT} from '../root.js';

const distDir = `${LH_ROOT}/dist`;
const bundleOutFile = `${distDir}/smokehouse-bundle.js`;
const smokehouseLibFilename = './cli/test/smokehouse/frontends/lib.js';
const smokehouseCliFilename = `${LH_ROOT}/cli/test/smokehouse/lighthouse-runners/cli.js`;

async function main() {
  const bundle = await rollup({
    input: smokehouseLibFilename,
    context: 'globalThis',
    plugins: [
      rollupPlugins.shim({
        [smokehouseCliFilename]:
          'export function runLighthouse() { throw new Error("not supported"); }',
        'module': `
          export const createRequire = () => {
            return {
              resolve() {
                throw new Error('createRequire.resolve is not supported in bundled Lighthouse');
              },
            };
          };
        `,
      }),
      rollupPlugins.removeModuleDirCalls(),
      rollupPlugins.inlineFs({verbose: Boolean(process.env.DEBUG)}),
      rollupPlugins.commonjs(),
      rollupPlugins.nodePolyfills(),
      rollupPlugins.nodeResolve(),
    ],
  });

  await bundle.write({
    file: bundleOutFile,
    format: 'commonjs',
  });
  await bundle.close();
}

await main();
