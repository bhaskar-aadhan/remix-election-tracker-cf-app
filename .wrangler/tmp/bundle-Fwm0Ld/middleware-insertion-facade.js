				import worker, * as OTHER_EXPORTS from "/Users/bhaskar/Documents/Aadhan/Other-Projects/remix-election-tracker-cf-app/.wrangler/tmp/pages-W6O1k1/hpaij9s6c6f.js";
				import * as __MIDDLEWARE_0__ from "/Users/bhaskar/Documents/Aadhan/Other-Projects/remix-election-tracker-cf-app/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/Users/bhaskar/Documents/Aadhan/Other-Projects/remix-election-tracker-cf-app/.wrangler/tmp/pages-W6O1k1/hpaij9s6c6f.js";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;