<a name="10.2.0"></a>
# 10.2.0 (2023-05-04)
[Full Changelog](https://github.com/GoogleChrome/lighthouse/compare/v10.1.1...v10.2.0)

We expect this release to ship in the DevTools of [Chrome 115](https://chromiumdash.appspot.com/schedule), and to PageSpeed Insights within 2 weeks.

## New Contributors

Thanks to our new contributors 👽🐷🐰🐯🐻!

- Eric K @doteric

## Notable Changes

* largest-contentful-paint-element: add phases table ([#14891](https://github.com/GoogleChrome/lighthouse/pull/14891))

## Core

* add flow methods to cjs entry ([#15045](https://github.com/GoogleChrome/lighthouse/pull/15045))
* use target type instead of session for oopif ([#15006](https://github.com/GoogleChrome/lighthouse/pull/15006))
* create timing entries for `getArtifact` ([#15024](https://github.com/GoogleChrome/lighthouse/pull/15024))
* classify extension urls as non-network ([#15022](https://github.com/GoogleChrome/lighthouse/pull/15022))
* add time-to-first-byte and lcp-breakdown ([#14941](https://github.com/GoogleChrome/lighthouse/pull/14941))
* fix viewport when running over adb ([#14937](https://github.com/GoogleChrome/lighthouse/pull/14937))
* driver: warn about remaining inflight requests urls ([#14963](https://github.com/GoogleChrome/lighthouse/pull/14963))
* entity-classification: classify unknown urls as "unattributable" ([#15009](https://github.com/GoogleChrome/lighthouse/pull/15009))
* predictive-perf: add URL as requiredArtifact ([#15028](https://github.com/GoogleChrome/lighthouse/pull/15028))
* runner: handle erroneous screenshot ([#14981](https://github.com/GoogleChrome/lighthouse/pull/14981))
* stack-packs: sort packs in order we defined them ([#15039](https://github.com/GoogleChrome/lighthouse/pull/15039))

## Report

* avoid really slow regexes for long urls ([#14745](https://github.com/GoogleChrome/lighthouse/pull/14745))
* remove content-visibility from lh-category ([#14994](https://github.com/GoogleChrome/lighthouse/pull/14994))

## Deps

* update to typescript 5.0.4 ([#15023](https://github.com/GoogleChrome/lighthouse/pull/15023))
* upgrade puppeteer and puppeteer-core ([#15000](https://github.com/GoogleChrome/lighthouse/pull/15000))
* axe-core: upgrade to 4.7.0 ([#15033](https://github.com/GoogleChrome/lighthouse/pull/15033))
* chrome-launcher: update to 0.15.2 ([#14983](https://github.com/GoogleChrome/lighthouse/pull/14983))
* lighthouse-stack-packs: upgrade to 1.10.0 ([#15038](https://github.com/GoogleChrome/lighthouse/pull/15038))
* puppeteer: upgrade to 20.1.0 ([#15037](https://github.com/GoogleChrome/lighthouse/pull/15037))

## I18n

* import ([#15041](https://github.com/GoogleChrome/lighthouse/pull/15041))

## Docs

* update throttling methods ([#14993](https://github.com/GoogleChrome/lighthouse/pull/14993))
* update pptr options example ([#14978](https://github.com/GoogleChrome/lighthouse/pull/14978))

## Tests

* devtools: sync e2e ([#14995](https://github.com/GoogleChrome/lighthouse/pull/14995))
* move regenerated fixtures to new folders ([#15031](https://github.com/GoogleChrome/lighthouse/pull/15031))
* add user flows to generate some fixtures ([#15005](https://github.com/GoogleChrome/lighthouse/pull/15005))

## Misc

* logger: add warn level ([#14964](https://github.com/GoogleChrome/lighthouse/pull/14964))

<a name="10.1.1"></a>
# 10.1.1 (2023-04-14)
[Full Changelog](https://github.com/GoogleChrome/lighthouse/compare/v10.1.0...v10.1.1)

We expect this release to ship in the DevTools of [Chrome 114](https://chromiumdash.appspot.com/schedule), and to PageSpeed Insights within 2 weeks.

## Core

* collect fetchpriority for images and rel=preload links ([#14925](https://github.com/GoogleChrome/lighthouse/pull/14925))
* installability: deprecate scheme support warning ([#14960](https://github.com/GoogleChrome/lighthouse/pull/14960))
* link-elements: gracefully handle header parser error ([#14936](https://github.com/GoogleChrome/lighthouse/pull/14936))

## Deps

* upgrade `http-link-header` ([#14973](https://github.com/GoogleChrome/lighthouse/pull/14973))
* upgrade `devtools-protocol` & deprecate SW install error ([#14974](https://github.com/GoogleChrome/lighthouse/pull/14974))

## Tests

* remove cross origin timespan test ([#14932](https://github.com/GoogleChrome/lighthouse/pull/14932))
* devtools: fix config for testing ([#14962](https://github.com/GoogleChrome/lighthouse/pull/14962))
* devtools: sync e2e ([#14931](https://github.com/GoogleChrome/lighthouse/pull/14931))

## Misc

* proto: fix case in entities fields ([#14959](https://github.com/GoogleChrome/lighthouse/pull/14959))

<a name="10.1.0"></a>
# 10.1.0 (2023-03-23)
[Full Changelog](https://github.com/GoogleChrome/lighthouse/compare/v10.0.2...v10.1.0)

We expect this release to ship in the DevTools of [Chrome 114](https://chromiumdash.appspot.com/schedule), and to PageSpeed Insights within 2 weeks.

## New Contributors

Thanks to our new contributors 👽🐷🐰🐯🐻!

- Do Thanh Hai @dothanhhai
- Jongwoo Han @jongwooo
- Henry Lim @limhenry
- Sepehr Safari @sepehr-safari

## Notable Changes

* report: group third-party entities ([#14655](https://github.com/GoogleChrome/lighthouse/pull/14655))

## Core

* cap byte-efficiency-audit scores to a max of 1 ([#14921](https://github.com/GoogleChrome/lighthouse/pull/14921))
* correctly truncate unicode strings ([#14911](https://github.com/GoogleChrome/lighthouse/pull/14911))
* allow any audit details type to be used in an opportunity ([#14903](https://github.com/GoogleChrome/lighthouse/pull/14903))
* audit: update link for source maps to chrome developer docs ([#14855](https://github.com/GoogleChrome/lighthouse/pull/14855))
* cls: ignore `had_recent_input` by timing window ([#14402](https://github.com/GoogleChrome/lighthouse/pull/14402))
* doctype: handle optional trace correctly ([#14918](https://github.com/GoogleChrome/lighthouse/pull/14918))
* legacy-javascript: add focus-visible polyfill ([#14827](https://github.com/GoogleChrome/lighthouse/pull/14827))
* tap-targets: update audit description ([#14869](https://github.com/GoogleChrome/lighthouse/pull/14869))
* trace-processor: support single process trace ([#14901](https://github.com/GoogleChrome/lighthouse/pull/14901))
* uses-responsive-images-snapshot: ignore CSS images ([#14890](https://github.com/GoogleChrome/lighthouse/pull/14890))

## CLI

* fix `--channel` flag ([#14924](https://github.com/GoogleChrome/lighthouse/pull/14924))

## Report

* update table hover shades ([#14873](https://github.com/GoogleChrome/lighthouse/pull/14873))
* consistently use our monospace font stack ([#14842](https://github.com/GoogleChrome/lighthouse/pull/14842))

## Deps

* upgrade `http-link-header` and node polyfills ([#14889](https://github.com/GoogleChrome/lighthouse/pull/14889))
* upgrade soft navigation plugin ([#14883](https://github.com/GoogleChrome/lighthouse/pull/14883))
* testdouble: update, move off forked quibble ([#14863](https://github.com/GoogleChrome/lighthouse/pull/14863))

## Clients

* bundled: include soft navigation plugin ([#14874](https://github.com/GoogleChrome/lighthouse/pull/14874))
* lr: remove FCP 3G from config ([#14910](https://github.com/GoogleChrome/lighthouse/pull/14910))
* viewer: link to diff tool's new URL ([#14865](https://github.com/GoogleChrome/lighthouse/pull/14865))
* viewer: rework landing with link to lhci diff tool ([#14851](https://github.com/GoogleChrome/lighthouse/pull/14851))

## Docs

* fix various typos ([#14209](https://github.com/GoogleChrome/lighthouse/pull/14209))

## Tests

* fix seo-tap-targets in high DPI ([#14866](https://github.com/GoogleChrome/lighthouse/pull/14866))
* devtools: reenable `issues-mixed-content` ([#14862](https://github.com/GoogleChrome/lighthouse/pull/14862))

## Misc

* replace deprecated command with environment file ([#14751](https://github.com/GoogleChrome/lighthouse/pull/14751))
* fix typos of overridden ([#14877](https://github.com/GoogleChrome/lighthouse/pull/14877))

<a name="10.0.2"></a>
# 10.0.2 (2023-02-28)
[Full Changelog](https://github.com/GoogleChrome/lighthouse/compare/v10.0.1...v10.0.2)

We expect this release to ship in the DevTools of [Chrome 113](https://chromiumdash.appspot.com/schedule).

## Core

* tracing: handle `FrameCommittedInBrowser` with `processPseudoId` ([#14800](https://github.com/GoogleChrome/lighthouse/pull/14800))
* `redirects`: use `requestId` instead of URL to find requests ([#14838](https://github.com/GoogleChrome/lighthouse/pull/14838))
* don't use failed network requests as potential initiators ([#14819](https://github.com/GoogleChrome/lighthouse/pull/14819))
* config: change error message if no `artifacts` are defined ([#14818](https://github.com/GoogleChrome/lighthouse/pull/14818))
* `bf-cache`: count failures based on affected frames ([#14823](https://github.com/GoogleChrome/lighthouse/pull/14823))
* `legacy-javascript`: update polyfill size graph ([#14828](https://github.com/GoogleChrome/lighthouse/pull/14828))
* `prioritize-lcp-image`: use request initiators for load path ([#14807](https://github.com/GoogleChrome/lighthouse/pull/14807))
* `prioritize-lcp-image`: better identify lcp request ([#14804](https://github.com/GoogleChrome/lighthouse/pull/14804))
* types: fix error when using `moduleResolution: "node"` ([#14815](https://github.com/GoogleChrome/lighthouse/pull/14815))

## Clients

* lr: accept multiple `channel` naming conventions ([#14799](https://github.com/GoogleChrome/lighthouse/pull/14799))

## Docs

* user-flows: add desktop config examples ([#14806](https://github.com/GoogleChrome/lighthouse/pull/14806))

## Tests

* reenable `metrics-tricky-tti` on ToT ([#14790](https://github.com/GoogleChrome/lighthouse/pull/14790))
* devtools: use new `primaryPageTarget` function ([#14839](https://github.com/GoogleChrome/lighthouse/pull/14839))
* add roundtrip-proto lhr render test, check for `undefined` ([#14817](https://github.com/GoogleChrome/lighthouse/pull/14817))
* devtools: sync e2e tests ([#14801](https://github.com/GoogleChrome/lighthouse/pull/14801))

## Misc

* proto: add `screenEmulation` to `configSettings` ([#14809](https://github.com/GoogleChrome/lighthouse/pull/14809), [#14826](https://github.com/GoogleChrome/lighthouse/pull/14826))

<a name="10.0.1"></a>
# 10.0.1 (2023-02-14)
[Full Changelog](https://github.com/GoogleChrome/lighthouse/compare/v10.0.0...v10.0.1)

We expect this release to ship in the DevTools of [Chrome 112](https://chromiumdash.appspot.com/schedule), and to PageSpeed Insights within 2 weeks.

## Core

* reduce DevTools flakiness ([#14782](https://github.com/GoogleChrome/lighthouse/pull/14782))
* doctype: only consider main frame ([#14795](https://github.com/GoogleChrome/lighthouse/pull/14795))
* paste-preventing-inputs: rephrase description ([#14794](https://github.com/GoogleChrome/lighthouse/pull/14794))

## Deps

* move quibble to dev deps ([#14780](https://github.com/GoogleChrome/lighthouse/pull/14780))

## Docs

* split changelog at 10.0 ([#14778](https://github.com/GoogleChrome/lighthouse/pull/14778))
* changelog: minor v10 edits ([#14777](https://github.com/GoogleChrome/lighthouse/pull/14777))

## Misc

* update .npmignore ([#14779](https://github.com/GoogleChrome/lighthouse/pull/14779))

<a name="10.0.0"></a>
# 10.0.0 (2023-02-09)
[Full Changelog](https://github.com/GoogleChrome/lighthouse/compare/v9.6.8...v10.0.0)

We expect this release to ship in the DevTools of [Chrome 112](https://chromiumdash.appspot.com/schedule), and to PageSpeed Insights within 2 weeks.

## New Contributors

Thanks to our new contributors 👽🐷🐰🐯🐻!

- Alex N. Jose @alexnj
- Alexandra White @heyawhite
- Amanda @apettenati
- Andrew Gutekanst @Andoryuuta
- Christopher Holder @ChristopherPHolder
- Dongkyun Yu (Steve) @hackurity01
- Floris @FMJansen
- Gabe @MrBrain295
- ghost_32 @k99sharma
- Littleton Riggins @TripleEquals
- lowkeyAngry @lowkeyAngry
- Michael McMahon @TechnologyClassroom
- Shogo Hida @shogohida
- Stoyan @stoyan
- Yang Guo @hashseed

## Notable Changes

### Performance Score Changes

In the 8.0 release, we [described TTI's waning role](https://github.com/GoogleChrome/lighthouse/blob/main/docs/v8-perf-faq.md#whats-the-story-with-tti), and today we have the followup. Time to Interactive (TTI) no longer contributes to the performance score and is not displayed in the report. However, it is still accessible in the Lighthouse result JSON.

Without TTI, the weighting of Cumulative Layout Shift (CLS) has increased from 15% to 25%. See the docs for a complete breakdown of [how the Performance score is calculated in 10.0](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/#lighthouse-10), or [play with the scoring calculator](https://googlechrome.github.io/lighthouse/scorecalc/#FCP=3000&SI=5800&FMP=4000&TTI=7300&FCI=6500&LCP=4000&TBT=600&CLS=0.25&device=mobile&version=10&version=8).

### Types for the Node package

Lighthouse now includes type declarations! Our [example TypeScript recipe](https://github.com/GoogleChrome/lighthouse/tree/main/docs/recipes/type-checking) demonstrates how to achieve proper type safety with Lighthouse.

### Third-party Entity classification

Since Lighthouse 5.3, the community-driven [`third-party-web`](https://github.com/patrickhulce/third-party-web) dataset has been used to summarize how every third-party found on a page contributes to the total JavaScript blocking time, via the `third-party-summary` audit. With Lighthouse 10.0, we are adding a new property to the JSON result (`entities`) to make further use of this dataset. Every origin encountered on a page is now classified as first-party or third-party within `entities`. In 10.0, this classification is used to power the existing third-party filter checkbox.

In a future version of Lighthouse, this will be used to group the table items of every audit based on the entity it originated from, and aggregate the impact of items from that specific entity.

## 🆕 New Audits

### Back/forward cache

The Back/forward cache (bfcache for short) is a browser optimization that serves pages from fully serialized snapshots when navigating back or forwards in session history. There are over 100 different reasons why a page may not be eligible for this optimization, so to assist developers Lighthouse now attempts to trigger a bfcache response and will list anything that prevented the browser from using the bfcache. [#14465](https://github.com/GoogleChrome/lighthouse/pull/14465)

For more on bfcache, see [the web.dev article](https://web.dev/bfcache/).

Note: This audit initially will not be available for PageSpeed Insights.

### Preventing pasting to inputs

The audit `password-inputs-can-be-pasted-into` is now `paste-preventing-inputs`. This audit's logic works just as before, but rather than just considering `[type=password]` inputs, it now fails if _any_ non-readonly input element prevents the user from pasting. [#14313](https://github.com/GoogleChrome/lighthouse/pull/14313)

## Lighthouse documentation is now on developer.chrome.com

Our documentation is no longer hosted on web.dev. For the most up to date audit docs, please go to [developer.chrome.com/docs/lighthouse/](https://developer.chrome.com/docs/lighthouse/)

## 💥 Breaking changes

Under the hood, Lighthouse now uses the new user-flow supporting infrastructure by default, even for traditional navigation runs. You can opt out of this by: in the CLI, use `--legacy-navigation`; in DevTools: check “Legacy Navigation” in the settings menu. If you have a use case that necessitates this escape hatch, please file an issue. We plan to remove this legacy path in 11.0.

### For Lighthouse result JSON (LHR) users

#### Page URLs on the Lighthouse Result

Until now, there were two URL fields to describe a Lighthouse run:

- `requestedUrl`: the url given by the users, which Lighthouse instructs Chrome to navigate to
- `finalUrl`: the url after any server-initiated HTTP and JS-initiated redirects

This taxonomy cannot account for more complex scenarios, such as JS-initiated redirects, usage of the History API or soft-navigations. They were also ill-defined for timespan and snapshot modes. To account for that, Lighthouse 10.0 now has these URL fields:

- (changed) `requestedUrl`: The URL that Lighthouse initially navigated to before redirects. This is the same as it was before for navigation mode, but now it will be `undefined` in timespan/snapshot.
- (new) `mainDocumentUrl`: The URL of the last document requested during a navigation. It does not account for soft navigations or history API events made after the page loads. It is only available in navigation mode, and will be undefined in timespan and snapshot modes.
- (new) `finalDisplayedUrl`: The URL displayed in the browser combobox at the end of a Lighthouse run. It accounts for soft navigations and history API events. Available in navigation, timespan, and snapshot modes.
- (deprecated) `finalUrl`: Same value as `mainDocumentUrl`.

#### Audit changes

- `password-inputs-can-be-pasted-into` -> `paste-preventing-inputs`
- `preload-lcp-image` -> `prioritize-lcp-image`
- `third-party-summary` no longer uses a `link` value for `item.entity`, instead uses a raw `text` value
- `full-page-screenshot` is no longer an audit, instead it is stored at `lhr.fullPageScreenshot`. To suppress collection of the full-page screenshot in the CLI, you must migrate from `--skip-audits full-page-screenshot` to `--disable-full-page-screenshot`.

### For Node users

- Node 14 is no longer supported, the minimum is now Node 16
- In case you import paths within the lighthouse node package: `lighthouse-core/` and `lighthouse-cli/` folders are now simply `core/` and `cli/`
- Converted from CommonJS to ES modules. You can still use lighthouse in CommonJS by using an dynamic import: `await import('lighthouse')`. For access to just the `lighthouse` function in CommonJS, you can also use `require('lighthouse/core/index.cjs')`
- The CSV output for Lighthouse is much more useful now. Consult the PR for [an example of the new format](https://github.com/GoogleChrome/lighthouse/pull/13558)
- `LHError` is now `LighthouseError`. If you are attempting to catch an error thrown by Lighthouse, be sure to account for this!

#### Node API changes

The `lighthouse` function now has [better integration with Puppeteer](https://github.com/GoogleChrome/lighthouse/blob/main/docs/puppeteer.md). Use `lighthouse(url, flags, config, page)` to run Lighthouse, passing an existing `Puppeteer.Page` handle as `page`.

The user flow api has moved to the top level node entrypoint and can be imported with `import {startFlow} from 'lighthouse'`.

New `flow.startNavigation()` and `flow.endNavigation()` functions let you define a user triggered navigation without any callback function. See the user flow docs for [an example](https://github.com/GoogleChrome/lighthouse/blob/main/docs/user-flows.md#triggering-a-navigation-via-user-interactions).

To change settings for a single user flow step, define the settings overrides on the toplevel flags options `flow.snapshot({skipAduits: ['uses-http2']})` instead of on the `settingsOverride` property.

To give a flow step a custom name, use `flow.snapshot({name: 'Custom name'})`. Previously this was done via `stepName`.

### For Lighthouse customization (custom config, gatherers, audits)

- To work in Lighthouse 10.0, custom gatherers will need to implement the new Gatherer interface ([an example](https://github.com/GoogleChrome/lighthouse/blob/main/docs/recipes/custom-audit/memory-gatherer.js)). Otherwise, they will only work in [legacy navigation mode](https://github.com/GoogleChrome/lighthouse/blob/main/docs/configuration.md#using-legacy-configs-in-100) and older versions of Lighthouse
- Lighthouse cannot use `passes` to load the page multiple times in navigation mode anymore. If you need to load the page multiple times, we recommend using a user flow. See our config docs for instructions on [how to convert to the new config format](https://github.com/GoogleChrome/lighthouse/blob/main/docs/configuration.md#legacy-configs)
- The `ScriptElements` artifact is now `Scripts`, with a [slightly different shape](https://github.com/GoogleChrome/lighthouse/blob/955586c4e05d501d69a79d4ef0297991b6805690/types/artifacts.d.ts#L317)
- `Audit.makeOpportunityDetails` and `Audit.makeTableDetails` now accept an options object as the third parameter. This ends up being a breaking change for just `Audit.makeOpportunityDetails`.


# Detailed changelog

## Removed Audits

* [BREAKING] apple-touch-icon: remove audit ([#14243](https://github.com/GoogleChrome/lighthouse/pull/14243))
* [BREAKING] vulnerable-libraries: remove audit ([#14194](https://github.com/GoogleChrome/lighthouse/pull/14194))
* [BREAKING] full-page-screenshot: remove audit, move to top-level ([#14657](https://github.com/GoogleChrome/lighthouse/pull/14657))

## Core

* [BREAKING] scoring: rebalance perf metric weightings for v10 ([#14667](https://github.com/GoogleChrome/lighthouse/pull/14667))
* [BREAKING] third-party-summary: change item.entity from link to text ([#14749](https://github.com/GoogleChrome/lighthouse/pull/14749))
* [BREAKING] refactor csv output ([#13558](https://github.com/GoogleChrome/lighthouse/pull/13558))
* [BREAKING] emulation: retire moto g4, use moto g power ([#14674](https://github.com/GoogleChrome/lighthouse/pull/14674))
* [BREAKING] emulation: bump chrome UA to m109 and drop LH identifier ([#14384](https://github.com/GoogleChrome/lighthouse/pull/14384))
* [BREAKING] rename preload-lcp-image to prioritize-lcp-image ([#14761](https://github.com/GoogleChrome/lighthouse/pull/14761))
* [BREAKING] audit: add options param to make{Table,Opportunity}Details ([#14753](https://github.com/GoogleChrome/lighthouse/pull/14753))
* restructure types for direct import and publishing ([#14441](https://github.com/GoogleChrome/lighthouse/pull/14441))
* add entity classification of origins to the LHR ([#14622](https://github.com/GoogleChrome/lighthouse/pull/14622), [#14744](https://github.com/GoogleChrome/lighthouse/pull/14744))
* no-unload-listeners: move to best practices ([#14668](https://github.com/GoogleChrome/lighthouse/pull/14668))
* viewport: support interactive-widget ([#14664](https://github.com/GoogleChrome/lighthouse/pull/14664))
* preload-lcp-image: get LCP image url from trace ([#14695](https://github.com/GoogleChrome/lighthouse/pull/14695))
* use `performance.now` in isolation ([#14685](https://github.com/GoogleChrome/lighthouse/pull/14685))
* add initiatorRequest from async stacks and preloads ([#14741](https://github.com/GoogleChrome/lighthouse/pull/14741))
* processed-navigation: computed directly from trace ([#14693](https://github.com/GoogleChrome/lighthouse/pull/14693))
* add `usePassiveGathering` flag ([#14610](https://github.com/GoogleChrome/lighthouse/pull/14610))
* finalize master => main branch rename ([#14409](https://github.com/GoogleChrome/lighthouse/pull/14409))
* is-crawlable: only warn if some bots are blocked ([#14550](https://github.com/GoogleChrome/lighthouse/pull/14550))
* doctype: check for limited quirks mode ([#14576](https://github.com/GoogleChrome/lighthouse/pull/14576))
* add `BFCacheFailures` artifact ([#14485](https://github.com/GoogleChrome/lighthouse/pull/14485))
* use LCP specific message for NO_LCP ([#14556](https://github.com/GoogleChrome/lighthouse/pull/14556))
* i18n: fix path bug resulting in invalid i18n id via npx ([#14314](https://github.com/GoogleChrome/lighthouse/pull/14314))
* warn when clear storage times out ([#14476](https://github.com/GoogleChrome/lighthouse/pull/14476))
* expose default and desktop configs on `index.js` ([#14543](https://github.com/GoogleChrome/lighthouse/pull/14543))
* remove globals from `externs.d.ts` ([#14537](https://github.com/GoogleChrome/lighthouse/pull/14537))
* merge `api.js` into `index.js`, new report generator api ([#14531](https://github.com/GoogleChrome/lighthouse/pull/14531))
* remove deprecated flags check ([#14454](https://github.com/GoogleChrome/lighthouse/pull/14454))
* make `bypass`, `th-has-data-cells`, and `video-caption` informative ([#14453](https://github.com/GoogleChrome/lighthouse/pull/14453))
* save lhr to latest-run/ for -A, not just -GA ([#14414](https://github.com/GoogleChrome/lighthouse/pull/14414))
* remove `fraggle-rock` directory ([#14377](https://github.com/GoogleChrome/lighthouse/pull/14377))
* use-landmarks: fix missing markdown in description ([#14608](https://github.com/GoogleChrome/lighthouse/pull/14608))
* remove sd-validation audit files ([#14391](https://github.com/GoogleChrome/lighthouse/pull/14391))
* remove replay stringify extension ([#14330](https://github.com/GoogleChrome/lighthouse/pull/14330))
* rename url-shim to url-utils, stop extending global URL ([#14360](https://github.com/GoogleChrome/lighthouse/pull/14360))
* deprecate passes, remove config navigations from FR ([#13881](https://github.com/GoogleChrome/lighthouse/pull/13881))
* rename pwmetrics-events to metric-trace-events ([14258](https://github.com/GoogleChrome/lighthouse/pull/14258))
* remove trace-of-tab ([#14237](https://github.com/GoogleChrome/lighthouse/pull/14237))
* return result for xhtml, but with warning ([#12351](https://github.com/GoogleChrome/lighthouse/pull/12351))
* move network recorder and monitor to EventEmitter ([#14152](https://github.com/GoogleChrome/lighthouse/pull/14152))
* make session an event emitter ([#14147](https://github.com/GoogleChrome/lighthouse/pull/14147))
* update SourceMap build to use newest frontend and ParsedURL ([#14108](https://github.com/GoogleChrome/lighthouse/pull/14108))
* move target manager a driver component ([#14122](https://github.com/GoogleChrome/lighthouse/pull/14122))
* handle sessions inside target-manager ([#14106](https://github.com/GoogleChrome/lighthouse/pull/14106))
* save native getBoundingClientRect to avoid overrides ([#14002](https://github.com/GoogleChrome/lighthouse/pull/14002))
* log `requestedUrl` with unexpected value ([#14010](https://github.com/GoogleChrome/lighthouse/pull/14010))
* make `requestedUrl` optional ([#13816](https://github.com/GoogleChrome/lighthouse/pull/13816))
* fix build-sample-reports ([#13865](https://github.com/GoogleChrome/lighthouse/pull/13865))
* use `mainDocumentUrl` instead of `finalUrl` ([#13793](https://github.com/GoogleChrome/lighthouse/pull/13793))
* remove `context.url` ([#13806](https://github.com/GoogleChrome/lighthouse/pull/13806))
* append sourceURL comment to eval code ([#13754](https://github.com/GoogleChrome/lighthouse/pull/13754))
* expand URL artifact ([#13776](https://github.com/GoogleChrome/lighthouse/pull/13776))
* always use `MainResource` for main document ([#13756](https://github.com/GoogleChrome/lighthouse/pull/13756))
* accessibility: link audits directly to axe docs ([#13876](https://github.com/GoogleChrome/lighthouse/pull/13876))
* build: inline-fs error if file missing, ignorePaths ([#14436](https://github.com/GoogleChrome/lighthouse/pull/14436))
* cdp: update HTTP method for /json/new call ([#14063](https://github.com/GoogleChrome/lighthouse/pull/14063))
* computed-artifacts: convert to named exports ([#14352](https://github.com/GoogleChrome/lighthouse/pull/14352))
* config: use fr config to construct the legacy config ([#13965](https://github.com/GoogleChrome/lighthouse/pull/13965))
* config: make module resolution async ([#13974](https://github.com/GoogleChrome/lighthouse/pull/13974))
* connection: drop /new tab creation fallback ([#14012](https://github.com/GoogleChrome/lighthouse/pull/14012))
* crc: exclude non network nodes from being a leaf ([#9801](https://github.com/GoogleChrome/lighthouse/pull/9801))
* csp-xss: prevent meta warning if header CSPs are secure ([#14490](https://github.com/GoogleChrome/lighthouse/pull/14490))
* refactor audits to use async syntax ([#14542](https://github.com/GoogleChrome/lighthouse/pull/14542))
* cumulative-layout-shift: deprecate m89 check ([#14085](https://github.com/GoogleChrome/lighthouse/pull/14085))
* devtools-log: consolidate implementation into gatherer ([#14080](https://github.com/GoogleChrome/lighthouse/pull/14080))
* devtoolslog: include Target and Runtime domains ([#14101](https://github.com/GoogleChrome/lighthouse/pull/14101))
* doctype: check document.compatMode for quirks mode ([#12978](https://github.com/GoogleChrome/lighthouse/pull/12978))
* doctype: fix mistaken text saying name must be lowercase ([#13888](https://github.com/GoogleChrome/lighthouse/pull/13888))
* dom-size: display metric values as integers ([#14479](https://github.com/GoogleChrome/lighthouse/pull/14479))
* driver: guard verbose logic behind log.isVerbose check ([#14086](https://github.com/GoogleChrome/lighthouse/pull/14086))
* driver: do not use target manager in legacy mode ([#14079](https://github.com/GoogleChrome/lighthouse/pull/14079))
* fetcher: remove iframe fetcher ([#13923](https://github.com/GoogleChrome/lighthouse/pull/13923))
* font-size: use order from protocol as implicit specificity ([#13501](https://github.com/GoogleChrome/lighthouse/pull/13501))
* fps: limit height at max webp size ([#14499](https://github.com/GoogleChrome/lighthouse/pull/14499))
* fps: use observed metrics for screenshot dimensions ([#14418](https://github.com/GoogleChrome/lighthouse/pull/14418))
* fps: make lhId less dependent on chrome internals ([#14272](https://github.com/GoogleChrome/lighthouse/pull/14272))
* full-page-screenshot: use webp instead of jpeg ([#13828](https://github.com/GoogleChrome/lighthouse/pull/13828))
* i18n: delete `i18n.createMessageInstanceIdFn` ([#14251](https://github.com/GoogleChrome/lighthouse/pull/14251))
* image-elements: use execution context isolation ([#14005](https://github.com/GoogleChrome/lighthouse/pull/14005))
* index: update api helpers to use FR ([#14011](https://github.com/GoogleChrome/lighthouse/pull/14011))
* js-usage: remove debugger domain ([#13753](https://github.com/GoogleChrome/lighthouse/pull/13753))
* lantern: add network timings to debug traces ([#14571](https://github.com/GoogleChrome/lighthouse/pull/14571))
* lantern: add comment to about node times being in microseconds ([#14568](https://github.com/GoogleChrome/lighthouse/pull/14568))
* lantern: divide throughput only on network node count ([#14564](https://github.com/GoogleChrome/lighthouse/pull/14564))
* largest-contentful-paint: remove m79 check ([#14082](https://github.com/GoogleChrome/lighthouse/pull/14082))
* layout-shift-elements: add link to documentation ([#14466](https://github.com/GoogleChrome/lighthouse/pull/14466))
* legacy: create legacy directory under core ([#14341](https://github.com/GoogleChrome/lighthouse/pull/14341))
* legacy-javascript: key on script id, not url ([#13746](https://github.com/GoogleChrome/lighthouse/pull/13746))
* listitem: mention li can be contained by a menu ([#13927](https://github.com/GoogleChrome/lighthouse/pull/13927))
* manifest: remove css color verification ([#14447](https://github.com/GoogleChrome/lighthouse/pull/14447))
* network-monitor: resolve server redirects ([#13790](https://github.com/GoogleChrome/lighthouse/pull/13790))
* network-request: use ms instead of seconds ([#14567](https://github.com/GoogleChrome/lighthouse/pull/14567))
* page-dependency-graph: compute using URL artifact ([#13772](https://github.com/GoogleChrome/lighthouse/pull/13772))
* plugins: allow `supportedModes` in category ([#13921](https://github.com/GoogleChrome/lighthouse/pull/13921))
* preload-lcp-image: be specific about when to do this ([#13771](https://github.com/GoogleChrome/lighthouse/pull/13771))
* replay: fix stringify extension ([#14297](https://github.com/GoogleChrome/lighthouse/pull/14297))
* replay: @puppeteer/replay stringify extension ([#14146](https://github.com/GoogleChrome/lighthouse/pull/14146))
* user-flow: passively collect full-page screenshot ([#14656](https://github.com/GoogleChrome/lighthouse/pull/14656))
* network-request: switch to improved timing names ([#14721](https://github.com/GoogleChrome/lighthouse/pull/14721))
* network-request: add rendererStartTime ([#14711](https://github.com/GoogleChrome/lighthouse/pull/14711))
* legacy-javascript: upgrade babel and core-js ([#14712](https://github.com/GoogleChrome/lighthouse/pull/14712))
* fr: preserve scroll position in gatherers ([#14660](https://github.com/GoogleChrome/lighthouse/pull/14660))
* bf-cache: link to chrome developer docs ([#14699](https://github.com/GoogleChrome/lighthouse/pull/14699))
* bf-cache-failures: pause on the temporary page ([#14694](https://github.com/GoogleChrome/lighthouse/pull/14694))
* fix protocol errors from late frame navigation ([#14716](https://github.com/GoogleChrome/lighthouse/pull/14716))
* remove util.cjs ([#14703](https://github.com/GoogleChrome/lighthouse/pull/14703), [#14709](https://github.com/GoogleChrome/lighthouse/pull/14709))
* rename `Config.Json` to `Config` ([#14673](https://github.com/GoogleChrome/lighthouse/pull/14673))
* use `config` to name every config json ([#14649](https://github.com/GoogleChrome/lighthouse/pull/14649))
* legacy: convert some base artifacts to regular gatherers ([#14680](https://github.com/GoogleChrome/lighthouse/pull/14680))
* scoring: update expected perf score for flow fixtures ([#14692](https://github.com/GoogleChrome/lighthouse/pull/14692))
* trace-processing: add backport for pubads ([#14700](https://github.com/GoogleChrome/lighthouse/pull/14700))
* trace-processor: refactor processEvents and frameEvents ([#14287](https://github.com/GoogleChrome/lighthouse/pull/14287))
* script-treemap-data: create node for each inline script ([#13802](https://github.com/GoogleChrome/lighthouse/pull/13802))
* scripts: narrow to only listen to parsed events ([#14120](https://github.com/GoogleChrome/lighthouse/pull/14120))
* scripts: use scriptId as identifier for scripts ([#13704](https://github.com/GoogleChrome/lighthouse/pull/13704))
* smoke: replace --invert-match cli option with --ignore-exclusions ([#14332](https://github.com/GoogleChrome/lighthouse/pull/14332))
* smoke: support a per-runner test exclusion list ([#14316](https://github.com/GoogleChrome/lighthouse/pull/14316))
* source-maps: throw explicit error when map is missing required fields ([#14060](https://github.com/GoogleChrome/lighthouse/pull/14060))
* target-manager: only listen to LH sessions ([#14385](https://github.com/GoogleChrome/lighthouse/pull/14385))
* types: use union of `puppeteer` and `puppeteer-core` ([#14435](https://github.com/GoogleChrome/lighthouse/pull/14435))
* user-flow: update UIString comments ([#14458](https://github.com/GoogleChrome/lighthouse/pull/14458))
* user-flow: add base flags option ([#14459](https://github.com/GoogleChrome/lighthouse/pull/14459))
* user-flow: cleanup types ([#14442](https://github.com/GoogleChrome/lighthouse/pull/14442))
* user-flow: i18n default names ([#14455](https://github.com/GoogleChrome/lighthouse/pull/14455))
* user-flow: start/end navigation functions ([#13966](https://github.com/GoogleChrome/lighthouse/pull/13966))
* uses-responsive-images: higher threshold with breakpoints ([#13853](https://github.com/GoogleChrome/lighthouse/pull/13853))
* viewport: fix tap delay link ([#14460](https://github.com/GoogleChrome/lighthouse/pull/14460))
* page-functions: remove all `*String` exports ([#14374](https://github.com/GoogleChrome/lighthouse/pull/14374))
* internalize resolved configs ([#14589](https://github.com/GoogleChrome/lighthouse/pull/14589))
* asset-saver: save flow artifacts in separate files ([#14599](https://github.com/GoogleChrome/lighthouse/pull/14599))
* replace `Page.getResourceTree` with `Page.getFrameTree` ([#14663](https://github.com/GoogleChrome/lighthouse/pull/14663))
* js-usage: ignore __puppeteer_evaluation_script__ ([#13952](https://github.com/GoogleChrome/lighthouse/pull/13952))
* use main-frame LCP trace element ([#14760](https://github.com/GoogleChrome/lighthouse/pull/14760))
* full-page-screenshot: get screenshot, nodes concurrently ([#14763](https://github.com/GoogleChrome/lighthouse/pull/14763))
* config: prevent custom gatherer interference ([#14756](https://github.com/GoogleChrome/lighthouse/pull/14756))
* valid-source-maps: validate url in first-party check ([#14758](https://github.com/GoogleChrome/lighthouse/pull/14758))
* disconnect Puppeteer when started by Lighthouse ([#14770](https://github.com/GoogleChrome/lighthouse/pull/14770))
* use `resolvedConfig` to name every resolved config ([#14600](https://github.com/GoogleChrome/lighthouse/pull/14600))
* rename resolved config types ([#14647](https://github.com/GoogleChrome/lighthouse/pull/14647))
* remove trace-of-tab references ([#14590](https://github.com/GoogleChrome/lighthouse/pull/14590))
* disable bf-cache in lr/psi ([#14774](https://github.com/GoogleChrome/lighthouse/pull/14774))

## User Flows

* [BREAKING] update flow API for 10.0 ([#14388](https://github.com/GoogleChrome/lighthouse/pull/14388))
* [BREAKING] replace `configContext` with `flags` ([#14050](https://github.com/GoogleChrome/lighthouse/pull/14050))
* add page to context ([#14359](https://github.com/GoogleChrome/lighthouse/pull/14359))
* always run NetworkUserAgent gatherer ([#14392](https://github.com/GoogleChrome/lighthouse/pull/14392))
* index test parity ([#13867](https://github.com/GoogleChrome/lighthouse/pull/13867))
* do not monkey patch puppeteer session.emit ([#14087](https://github.com/GoogleChrome/lighthouse/pull/14087))
* minor renames: cdpSession, defaultSession, requestfinished ([#14097](https://github.com/GoogleChrome/lighthouse/pull/14097))

## CLI

* [BREAKING] use fraggle rock (user flow) runner by default, deprecate legacy navigation runner ([#13860](https://github.com/GoogleChrome/lighthouse/pull/13860))
* [BREAKING] remove --print-config ([#14585](https://github.com/GoogleChrome/lighthouse/pull/14585))
* error early if --output-path is invalid ([#14367](https://github.com/GoogleChrome/lighthouse/pull/14367))
* throw error if running x64 node on mac arm64 ([#14288](https://github.com/GoogleChrome/lighthouse/pull/14288))

## Report

* thumbnails: increase res and display, reduce number ([#14679](https://github.com/GoogleChrome/lighthouse/pull/14679))
* use entity classification to filter third-parties ([#14697](https://github.com/GoogleChrome/lighthouse/pull/14697))
* fix compat for older lighthouse reports ([#14617](https://github.com/GoogleChrome/lighthouse/pull/14617))
* sticky table headers ([#14508](https://github.com/GoogleChrome/lighthouse/pull/14508), [#14748](https://github.com/GoogleChrome/lighthouse/pull/14748), [#14766](https://github.com/GoogleChrome/lighthouse/pull/14766))
* reuse numberFormatters for ~50% performance gains ([#14493](https://github.com/GoogleChrome/lighthouse/pull/14493))
* expand on "learn more" links ([#14091](https://github.com/GoogleChrome/lighthouse/pull/14091))
* prevent opportunity savings from wrapping ([#14619](https://github.com/GoogleChrome/lighthouse/pull/14619))
* screen emulation and dpr in meta tooltip ([#14515](https://github.com/GoogleChrome/lighthouse/pull/14515))
* use narrow formatting for opportunity units ([#14723](https://github.com/GoogleChrome/lighthouse/pull/14723))
* filter `lcp-lazy-loaded` with LCP audits ([#14724](https://github.com/GoogleChrome/lighthouse/pull/14724))
* reduce stuttery feel of gauge animation ([#14513](https://github.com/GoogleChrome/lighthouse/pull/14513))
* limit screenshot thumbnail height ([#14511](https://github.com/GoogleChrome/lighthouse/pull/14511))
* use `focus-visible` for the three-dot menu ([#14497](https://github.com/GoogleChrome/lighthouse/pull/14497))
* link accessibility audits to new docs ([#14400](https://github.com/GoogleChrome/lighthouse/pull/14400))
* remove extra space from screenshot preview ([#14424](https://github.com/GoogleChrome/lighthouse/pull/14424))
* set minimum width of element screenshot preview ([#13856](https://github.com/GoogleChrome/lighthouse/pull/13856))
* prevent breaking words in opportunity text ([#14329](https://github.com/GoogleChrome/lighthouse/pull/14329))
* handle non-numeric numericValues in calc link ([#10880](https://github.com/GoogleChrome/lighthouse/pull/10880))
* avoid css issue with border when hoisting meta block ([#13877](https://github.com/GoogleChrome/lighthouse/pull/13877))
* dom: support code snippets within markdown links ([#14121](https://github.com/GoogleChrome/lighthouse/pull/14121))
* flow: fix ui strings not being bundled ([#14427](https://github.com/GoogleChrome/lighthouse/pull/14427))
* fix wording when screenEmulation disabled ([#14587](https://github.com/GoogleChrome/lighthouse/pull/14587))
* specify in tooltip that cpu/memory power is unthrottled ([#14704](https://github.com/GoogleChrome/lighthouse/pull/14704))
* devtools: fix wrong emulation string in meta block ([#14672](https://github.com/GoogleChrome/lighthouse/pull/14672))
* rename i18n to i18n-formatter, move strings to Util ([#13933](https://github.com/GoogleChrome/lighthouse/pull/13933))
* remove eslint --fix step in report generation ([#13864](https://github.com/GoogleChrome/lighthouse/pull/13864))
* consolidate table headers ([#14315](https://github.com/GoogleChrome/lighthouse/pull/14315))

## Deps

* puppeteer@19.6.0 ([#14244](https://github.com/GoogleChrome/lighthouse/pull/14244), [#14706](https://github.com/GoogleChrome/lighthouse/pull/14706))
* lighthouse-stack-packs@1.9.0 ([#14713](https://github.com/GoogleChrome/lighthouse/pull/14713))
* chrome-launcher@0.15.1 ([#14070](https://github.com/GoogleChrome/lighthouse/pull/14070))
* axe-core@4.6.3 ([#14690](https://github.com/GoogleChrome/lighthouse/pull/14690))
* third-party-web@0.20.2 ([#14546](https://github.com/GoogleChrome/lighthouse/pull/14546))
* latest chrome-devtools-frontend ([#14606](https://github.com/GoogleChrome/lighthouse/pull/14606))
* switch third-party-web dataset to entities-nostats subset ([#14548](https://github.com/GoogleChrome/lighthouse/pull/14548))
* typescript@4.9.4 ([#14646](https://github.com/GoogleChrome/lighthouse/pull/14646), [#14058](https://github.com/GoogleChrome/lighthouse/pull/14058))
* update typescript-eslint for tsc 4.7 ([#14111](https://github.com/GoogleChrome/lighthouse/pull/14111))
* jpeg-js@0.4.4 ([#14221](https://github.com/GoogleChrome/lighthouse/pull/14221))
* latest CDT packages ([#14293](https://github.com/GoogleChrome/lighthouse/pull/14293))
* bump node-fetch from 2.6.1 to 2.6.7 ([#13759](https://github.com/GoogleChrome/lighthouse/pull/13759))
* devtools-protocol@0.0.995287 ([#13902](https://github.com/GoogleChrome/lighthouse/pull/13902))
* update quibble fork to work with new loader api ([#14366](https://github.com/GoogleChrome/lighthouse/pull/14366))
* re-sync yarn.lock file ([#14403](https://github.com/GoogleChrome/lighthouse/pull/14403))

## Clients

* viewer: ga event for flow-report ([#13932](https://github.com/GoogleChrome/lighthouse/pull/13932))
* lr: expose computeBenchmarkIndex ([#14582](https://github.com/GoogleChrome/lighthouse/pull/14582))
* lr: export primary api, presets from lr bundle ([#14425](https://github.com/GoogleChrome/lighthouse/pull/14425))
* lr: add FR navigation support ([#13901](https://github.com/GoogleChrome/lighthouse/pull/13901))
* lr: run benchmark repeatedly given special query parameter ([#14075](https://github.com/GoogleChrome/lighthouse/pull/14075))
* psi: expose hasLocale in bundle types ([#14325](https://github.com/GoogleChrome/lighthouse/pull/14325))

## I18n

* localize units in report formatter ([#13830](https://github.com/GoogleChrome/lighthouse/pull/13830))
* fix broken description in installable-manifest audit ([#14444](https://github.com/GoogleChrome/lighthouse/pull/14444))
* update comments to match expanded "learn more" links ([#14446](https://github.com/GoogleChrome/lighthouse/pull/14446))
* remove default granularity values from formatter ([#13839](https://github.com/GoogleChrome/lighthouse/pull/13839))
* replace placeholder using replacer callback ([#14109](https://github.com/GoogleChrome/lighthouse/pull/14109))
* fix i18n filename path on windows ([#14220](https://github.com/GoogleChrome/lighthouse/pull/14220))
* fix collect-strings on windows with pathToFileURL ([#14201](https://github.com/GoogleChrome/lighthouse/pull/14201))
* handle string placeholder collisions ([#14432](https://github.com/GoogleChrome/lighthouse/pull/14432))
* reduce unnecessary message formats ([#14030](https://github.com/GoogleChrome/lighthouse/pull/14030))
* import strings ([#14768](https://github.com/GoogleChrome/lighthouse/pull/14768))

## Docs

* update web.dev links to new developer.chrome.com home ([#14581](https://github.com/GoogleChrome/lighthouse/pull/14581))
* fix multiline xvfb-run command ([#14471](https://github.com/GoogleChrome/lighthouse/pull/14471))
* remove gulp recipe ([#14183](https://github.com/GoogleChrome/lighthouse/pull/14183))
* remove git.io shortlinks ([#13911](https://github.com/GoogleChrome/lighthouse/pull/13911))
* fix some broken links ([#13872](https://github.com/GoogleChrome/lighthouse/pull/13872))
* architecture: update to reflect FR changes ([#14017](https://github.com/GoogleChrome/lighthouse/pull/14017))
* budgets: add example using config ([#14278](https://github.com/GoogleChrome/lighthouse/pull/14278))
* config: revert #14321 ([#14323](https://github.com/GoogleChrome/lighthouse/pull/14323))
* config: update to reflect changes in FR ([#14321](https://github.com/GoogleChrome/lighthouse/pull/14321))
* proto: update protobuf installation guidance ([#14558](https://github.com/GoogleChrome/lighthouse/pull/14558))
* readme: drop dead and unmaintained services/projects ([#14338](https://github.com/GoogleChrome/lighthouse/pull/14338))
* readme: update devtools screenshot, better alt ([#14563](https://github.com/GoogleChrome/lighthouse/pull/14563))
* readme: add Auditzy and Lighthouse Metrics to services list ([#13976](https://github.com/GoogleChrome/lighthouse/pull/13976))
* releasing: dependencies that should always be up to date ([#14156](https://github.com/GoogleChrome/lighthouse/pull/14156))
* user-flows: fix the order of the mode thumbnail images ([#14219](https://github.com/GoogleChrome/lighthouse/pull/14219))
* user-flows: refactor document ([#14021](https://github.com/GoogleChrome/lighthouse/pull/14021))
* user-flows: add instructions for DevTools ([#14009](https://github.com/GoogleChrome/lighthouse/pull/14009))
* user-flows: update api usage ([#13826](https://github.com/GoogleChrome/lighthouse/pull/13826))
* update user-flow.md to reflect current release ([#14604](https://github.com/GoogleChrome/lighthouse/pull/14604))
* config: add plugins property ([#14645](https://github.com/GoogleChrome/lighthouse/pull/14645))
* fix outdated code and command line in hacking tips ([#14720](https://github.com/GoogleChrome/lighthouse/pull/14720))
* changelog: add 9.6.x release notes ([f03850a](https://github.com/GoogleChrome/lighthouse/commit/f03850a))
* update custom gatherer recipe for 10.0 ([#14765](https://github.com/GoogleChrome/lighthouse/pull/14765))
* reintroduce changes to flows for 10.0 ([#14710](https://github.com/GoogleChrome/lighthouse/pull/14710))
* update docs/readme.md for 10.0 ([#14457](https://github.com/GoogleChrome/lighthouse/pull/14457))
* update puppeteer auth example for 10.0 ([#14195](https://github.com/GoogleChrome/lighthouse/pull/14195))
* config: update to reflect changes in FR ([#14324](https://github.com/GoogleChrome/lighthouse/pull/14324))
* plugins: update to reflect changes in 10.0 ([#14322](https://github.com/GoogleChrome/lighthouse/pull/14322))
* puppeteer: update to reflect FR changes ([#14319](https://github.com/GoogleChrome/lighthouse/pull/14319))
* recipes: update custom-gatherer-puppeteer to use FR ([#13940](https://github.com/GoogleChrome/lighthouse/pull/13940))
* user-flows: use new api location ([#14533](https://github.com/GoogleChrome/lighthouse/pull/14533))

## Tests

* fix timings in update-flow-fixtures.js ([#14591](https://github.com/GoogleChrome/lighthouse/pull/14591))
* fix mocha test runner and mocks on windows ([#14202](https://github.com/GoogleChrome/lighthouse/pull/14202))
* upgrade protobuf test to use python 3 ([#14557](https://github.com/GoogleChrome/lighthouse/pull/14557))
* dynamically import all modules when using mocks ([#14468](https://github.com/GoogleChrome/lighthouse/pull/14468))
* fix node version in weekly cron ([#14534](https://github.com/GoogleChrome/lighthouse/pull/14534))
* fix mocha test paths for windows ([#14464](https://github.com/GoogleChrome/lighthouse/pull/14464))
* assert to assert/strict ([#14412](https://github.com/GoogleChrome/lighthouse/pull/14412))
* add missing await on promise assertions ([#14437](https://github.com/GoogleChrome/lighthouse/pull/14437))
* static-server can continue if already running ([#14307](https://github.com/GoogleChrome/lighthouse/pull/14307))
* reformat trace fixtures ([#14279](https://github.com/GoogleChrome/lighthouse/pull/14279))
* use workers, Mocha node api instead of calling the CLI ([#14215](https://github.com/GoogleChrome/lighthouse/pull/14215))
* sync BUILD.gn files for devtools e2e tests ([#14184](https://github.com/GoogleChrome/lighthouse/pull/14184))
* move readJson from root.js to test-utils.js ([#14175](https://github.com/GoogleChrome/lighthouse/pull/14175))
* replace jest with mocha ([#14054](https://github.com/GoogleChrome/lighthouse/pull/14054))
* add devtools e2e test runner ([#14110](https://github.com/GoogleChrome/lighthouse/pull/14110))
* disable `perf-diagnostics-third-party` for FR ([#14092](https://github.com/GoogleChrome/lighthouse/pull/14092))
* use readJson instead of imports for json ([#14020](https://github.com/GoogleChrome/lighthouse/pull/14020))
* move webtest expectations to platform/generic ([#13997](https://github.com/GoogleChrome/lighthouse/pull/13997))
* add eslintrc jest env and remove all the env comments ([#13954](https://github.com/GoogleChrome/lighthouse/pull/13954))
* fix unconverted test ([#13959](https://github.com/GoogleChrome/lighthouse/pull/13959))
* replace $0 in cli-flag snapshots ([#13922](https://github.com/GoogleChrome/lighthouse/pull/13922))
* add temp fix for failing deprecations smoke test ([#13930](https://github.com/GoogleChrome/lighthouse/pull/13930))
* default to chrome-launcher path ([#13912](https://github.com/GoogleChrome/lighthouse/pull/13912))
* assert what axe checks matches our a11y audits ([#12699](https://github.com/GoogleChrome/lighthouse/pull/12699))
* use cache instead of artifacts for devtools build ([#13840](https://github.com/GoogleChrome/lighthouse/pull/13840))
* fix flaky isPositionFixed check in oopif-scripts ([#13855](https://github.com/GoogleChrome/lighthouse/pull/13855))
* temporarily disable oopif-scripts smoke for devtools ([#13859](https://github.com/GoogleChrome/lighthouse/pull/13859))
* fix invalid artifact name for devtools smoke failures ([#13841](https://github.com/GoogleChrome/lighthouse/pull/13841))
* fix smoke shard total in CI ([#13844](https://github.com/GoogleChrome/lighthouse/pull/13844))
* upload smoke failures for devtools ([#13794](https://github.com/GoogleChrome/lighthouse/pull/13794))
* improve logging for devtools smoke runner ([#13781](https://github.com/GoogleChrome/lighthouse/pull/13781))
* increase smoke shards from 2 to 3 ([#13792](https://github.com/GoogleChrome/lighthouse/pull/13792))
* clean devtools repo in CI ([#13758](https://github.com/GoogleChrome/lighthouse/pull/13758))
* asset-saver: use .tmp instead of pwd for temp file ([#14140](https://github.com/GoogleChrome/lighthouse/pull/14140))
* ci: force color output in CI ([#14580](https://github.com/GoogleChrome/lighthouse/pull/14580))
* ci: add node 18 to test matrix ([#13874](https://github.com/GoogleChrome/lighthouse/pull/13874))
* ci: shard all smoke tests ([#13968](https://github.com/GoogleChrome/lighthouse/pull/13968))
* ci: sample flow result check ([#13728](https://github.com/GoogleChrome/lighthouse/pull/13728))
* config-helpers: restore process.cwd after mocking ([#14036](https://github.com/GoogleChrome/lighthouse/pull/14036))
* crq: call setExtrasFn before using the urls ([#13910](https://github.com/GoogleChrome/lighthouse/pull/13910))
* dbw: ignore `webkitStorageInfo` deprecation in m110 ([#14541](https://github.com/GoogleChrome/lighthouse/pull/14541))
* devtools: sync e2e ([#14577](https://github.com/GoogleChrome/lighthouse/pull/14577))
* devtools: sync e2e ([#14544](https://github.com/GoogleChrome/lighthouse/pull/14544))
* devtools: sync e2e tests ([#14451](https://github.com/GoogleChrome/lighthouse/pull/14451))
* devtools: ensure device emulation is ready ([#14431](https://github.com/GoogleChrome/lighthouse/pull/14431))
* devtools: sync e2e tests ([#14426](https://github.com/GoogleChrome/lighthouse/pull/14426))
* devtools: sync e2e ([#14389](https://github.com/GoogleChrome/lighthouse/pull/14389))
* devtools: sync e2e tests ([#14373](https://github.com/GoogleChrome/lighthouse/pull/14373))
* devtools: sync e2e tests ([#14365](https://github.com/GoogleChrome/lighthouse/pull/14365))
* devtools: add i18n to e2e navigation test ([#14294](https://github.com/GoogleChrome/lighthouse/pull/14294))
* devtools: inject custom config directly ([#14285](https://github.com/GoogleChrome/lighthouse/pull/14285))
* devtools: sync e2e tests ([#14236](https://github.com/GoogleChrome/lighthouse/pull/14236))
* devtools: use linux for CI ([#14199](https://github.com/GoogleChrome/lighthouse/pull/14199))
* devtools: remove webtests, sync e2e tests, use release mode ([#14163](https://github.com/GoogleChrome/lighthouse/pull/14163))
* devtools: extend yarn timeout ([#13878](https://github.com/GoogleChrome/lighthouse/pull/13878))
* devtools: reduce concurrent job number ([#13797](https://github.com/GoogleChrome/lighthouse/pull/13797))
* devtools: bump cache ([#13755](https://github.com/GoogleChrome/lighthouse/pull/13755))
* devtools: support dbw smoke ([#14616](https://github.com/GoogleChrome/lighthouse/pull/14616))
* devtools: use correct build folder for e2e tests ([#14613](https://github.com/GoogleChrome/lighthouse/pull/14613))
* docs: clear problematic cache ([#13941](https://github.com/GoogleChrome/lighthouse/pull/13941))
* eslint: add import/order rule for core tests ([#13955](https://github.com/GoogleChrome/lighthouse/pull/13955))
* fr: snapshot audit id lists in api test ([#13994](https://github.com/GoogleChrome/lighthouse/pull/13994))
* lantern: correctly clear old trace data ([#13809](https://github.com/GoogleChrome/lighthouse/pull/13809))
* smoke: check runner result is sensible before using ([#14343](https://github.com/GoogleChrome/lighthouse/pull/14343))
* smoke: check lhr.environment exists in version check ([#14320](https://github.com/GoogleChrome/lighthouse/pull/14320))
* smoke: remove external domains from perf-preload ([#14289](https://github.com/GoogleChrome/lighthouse/pull/14289))
* smoke: check objects against a subset of keys ([#14270](https://github.com/GoogleChrome/lighthouse/pull/14270))
* smoke: enable more DevTools tests ([#14224](https://github.com/GoogleChrome/lighthouse/pull/14224))
* smoke: test fr navigations in devtools ([#14217](https://github.com/GoogleChrome/lighthouse/pull/14217))
* smoke: use DevTools runner through node directly ([#14205](https://github.com/GoogleChrome/lighthouse/pull/14205))
* smoke: use fraggle rock as the default ([#13951](https://github.com/GoogleChrome/lighthouse/pull/13951))
* smoke: reenable oopif smokes with ToT ([#14153](https://github.com/GoogleChrome/lighthouse/pull/14153))
* smoke: disable `oopif-scripts` in FR ([#14150](https://github.com/GoogleChrome/lighthouse/pull/14150))
* smoke: disable `oopif-requests` ([#14148](https://github.com/GoogleChrome/lighthouse/pull/14148))
* smoke: make oopif-requests assertions more specific ([#14100](https://github.com/GoogleChrome/lighthouse/pull/14100))
* smoke: print multiple differences ([#14141](https://github.com/GoogleChrome/lighthouse/pull/14141))
* smoke: add tests for report-assert.js ([#14138](https://github.com/GoogleChrome/lighthouse/pull/14138))
* smoke: use major milestone ([#14104](https://github.com/GoogleChrome/lighthouse/pull/14104))
* smoke: increase windows retries ([#14022](https://github.com/GoogleChrome/lighthouse/pull/14022))
* smoke: run bundle smokes in a worker ([#13947](https://github.com/GoogleChrome/lighthouse/pull/13947))
* smoke: realign byte ranges ([#13920](https://github.com/GoogleChrome/lighthouse/pull/13920))
* smoke: disable `lantern-idle-callback-short` ([#14670](https://github.com/GoogleChrome/lighthouse/pull/14670))
* smoke: disable metrics-tricky-tti for M112 ([#14762](https://github.com/GoogleChrome/lighthouse/pull/14762))
* topbar: replace module mock with dependency injection ([#14057](https://github.com/GoogleChrome/lighthouse/pull/14057))
* unit: fix node to 16.16 ([#14333](https://github.com/GoogleChrome/lighthouse/pull/14333))
* rewrite fake timer usage to reduce isolation ([#14595](https://github.com/GoogleChrome/lighthouse/pull/14595))
* add computed/metrics/interactive-test.js to tsconfig ([#13071](https://github.com/GoogleChrome/lighthouse/pull/13071))
* better times for generated network requests ([#14714](https://github.com/GoogleChrome/lighthouse/pull/14714))

## Misc

* [BREAKING] rename LHError to LighthouseError ([#14173](https://github.com/GoogleChrome/lighthouse/pull/14173))
* inp: switch proccessing "delay" to "time" ([#13999](https://github.com/GoogleChrome/lighthouse/pull/13999))
* document where network timings come from ([#14227](https://github.com/GoogleChrome/lighthouse/pull/14227))
* split lhr compat code to lib/lighthouse-compatibility.js ([#14701](https://github.com/GoogleChrome/lighthouse/pull/14701))
* update tsconfig.json ([e2f7e75](https://github.com/GoogleChrome/lighthouse/commit/e2f7e75))
* fix broken link for PWA checklist ([#14240](https://github.com/GoogleChrome/lighthouse/pull/14240))
* include used files in flow-report tsconfig ([#14174](https://github.com/GoogleChrome/lighthouse/pull/14174))
* only run scheduled publish job if there are new commits ([#14145](https://github.com/GoogleChrome/lighthouse/pull/14145))
* prevent forks from running cron job ([#13973](https://github.com/GoogleChrome/lighthouse/pull/13973))
* use top-level await ([#13975](https://github.com/GoogleChrome/lighthouse/pull/13975))
* remove `createCommonjsRefs` ([#14004](https://github.com/GoogleChrome/lighthouse/pull/14004))
* shim fs out of lightrider report generator bundle ([#14098](https://github.com/GoogleChrome/lighthouse/pull/14098))
* replace appendChild with append ([#13995](https://github.com/GoogleChrome/lighthouse/pull/13995))
* also update flow json in update:sample-json script ([#13936](https://github.com/GoogleChrome/lighthouse/pull/13936))
* generate snapshot/timespan reports from sample flow result ([#13937](https://github.com/GoogleChrome/lighthouse/pull/13937))
* use a unique local port for the treemap ([#14308](https://github.com/GoogleChrome/lighthouse/pull/14308))
* set encoding on streams for unicode correctness ([#13780](https://github.com/GoogleChrome/lighthouse/pull/13780))
* lantern-trace-saver: fix request finishTime ([#14198](https://github.com/GoogleChrome/lighthouse/pull/14198))
* build: remove lighthouse shim no longer necessary for plugins ([#14538](https://github.com/GoogleChrome/lighthouse/pull/14538))
* build: remove non-functional package.json shim ([#14536](https://github.com/GoogleChrome/lighthouse/pull/14536))
* build: extract bfcache strings from devtools ([#14452](https://github.com/GoogleChrome/lighthouse/pull/14452))
* build: use git-describe for build bundle version header ([#14347](https://github.com/GoogleChrome/lighthouse/pull/14347))
* build: fix smokerider bundles ([#14267](https://github.com/GoogleChrome/lighthouse/pull/14267))
* build: shim unneeded deps in lr report generator ([#14773](https://github.com/GoogleChrome/lighthouse/pull/14773))
* change default build folder for devtools gn ([#14492](https://github.com/GoogleChrome/lighthouse/pull/14492))
* fix broken links in changelog ([#14130](https://github.com/GoogleChrome/lighthouse/pull/14130))
* mark build folder as not generated for GitHub UI ([#14192](https://github.com/GoogleChrome/lighthouse/pull/14192))
* rename eslint config files to .cjs ([#14172](https://github.com/GoogleChrome/lighthouse/pull/14172))
* restore expected newline padding around imports ([#13998](https://github.com/GoogleChrome/lighthouse/pull/13998))
* fix gcp-collection scripts ([#14625](https://github.com/GoogleChrome/lighthouse/pull/14625))
* update vercel deployment config ([#14588](https://github.com/GoogleChrome/lighthouse/pull/14588))
* assets: update logo ([#13919](https://github.com/GoogleChrome/lighthouse/pull/13919))
* mark dependencies of entity classification computed artifact ([#14732](https://github.com/GoogleChrome/lighthouse/pull/14732))
* fix issues found in some strings from localizers ([#14740](https://github.com/GoogleChrome/lighthouse/pull/14740))
* exclude core/util.cjs from code coverage ([#14688](https://github.com/GoogleChrome/lighthouse/pull/14688))
* github: mark styles.css as not generated ([#14754](https://github.com/GoogleChrome/lighthouse/pull/14754))
* allow multiple nightlies to be published in a day ([#14767](https://github.com/GoogleChrome/lighthouse/pull/14767))
* lint: enable no-conditional-assignment rule ([#14757](https://github.com/GoogleChrome/lighthouse/pull/14757))
* add brendan back to triage rotation ([#13838](https://github.com/GoogleChrome/lighthouse/pull/13838))


# Older Changelog

See the [older changelog](changelog-pre10.md) for pre-10.0 revisions.
