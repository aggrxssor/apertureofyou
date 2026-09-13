export async function onRequest(context) {
    const url = new URL(context.request.url);
    const path = url.pathname;

    // Only handle Angular application routes.
    // Static files are passed through normally.
    const isStaticFile = path.includes(".");

    if (isStaticFile) {
        return context.next();
    }

    // English Angular routes
    if (path.startsWith("/en/") && path !== "/en/") {
        const assetUrl = new URL(url);
        assetUrl.pathname = "/en/";

        return context.env.ASSETS.fetch(assetUrl);
    }

    // hungarian Angular routes
    if (path.startsWith("/hu/") && path !== "/hu/") {
        const assetUrl = new URL(url);
        assetUrl.pathname = "/hu/";

        return context.env.ASSETS.fetch(assetUrl);
    }

    return context.next();
}