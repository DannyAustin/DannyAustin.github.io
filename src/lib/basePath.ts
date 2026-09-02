// Prefix a /public asset path with the deployment base path.
// Next.js does not apply basePath to public asset URLs automatically, so any
// image src pointing at /public must go through this helper to work on
// GitHub Pages project sites (served from /<repo>/).
export const withBasePath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
