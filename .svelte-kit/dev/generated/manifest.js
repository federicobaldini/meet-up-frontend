const c = [
	() => import("../components/layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/+layout.svelte"),
	() => import("../../../src/routes/+error.svelte"),
	() => import("../../../src/routes/+page.svelte"),
	() => import("../../../src/routes/[meetup].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/+layout.svelte
	[/^\/\+layout\/?$/, [c[0], c[2]], [c[1]]],

	// src/routes/+error.svelte
	[/^\/\+error\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/+page.svelte
	[/^\/\+page\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/[meetup].svelte
	[/^\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ meetup: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];