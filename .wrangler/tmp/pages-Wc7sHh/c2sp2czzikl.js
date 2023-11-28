// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: ["/*"],
  exclude: ["/favicon.ico", "/build/*"]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/bhaskar/Documents/Aadhan/Other-Projects/remix-election-tracker-cf-app/.wrangler/tmp/pages-Wc7sHh/functionsWorker-0.5191059260430546.mjs";
export * from "/Users/bhaskar/Documents/Aadhan/Other-Projects/remix-election-tracker-cf-app/.wrangler/tmp/pages-Wc7sHh/functionsWorker-0.5191059260430546.mjs";
import { isRoutingRuleMatch } from "/Users/bhaskar/Documents/Aadhan/Other-Projects/remix-election-tracker-cf-app/node_modules/wrangler/templates/pages-dev-util.ts";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=c2sp2czzikl.js.map
