/** Central site configuration — the values the landing design parameterizes. */
export const site = {
  githubUrl: "https://github.com/cityjson/city3d-stac-registry",
  paperUrl: "https://3d.bk.tudelft.nl/publications/",
  /** Set to "" to render the placeholder map instead of an embedded iframe. */
  mapEmbedUrl: "https://cityjson.github.io/city3d-stac-map",
} as const;

/** GitHub URL without a trailing slash, for building `/issues`, `/pulls`, etc. */
export const ghUrl = site.githubUrl.replace(/\/+$/, "");
export const paperUrl = site.paperUrl;

/**
 * Resolve a path in `public/` against Astro's configured `base` so links work
 * both at the site root and under a GitHub Pages subpath (e.g. /open3d-catalog/).
 * Normalizes slashes since `import.meta.env.BASE_URL` may or may not end in one.
 */
export const asset = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return `${base}/${path.replace(/^\/+/, "")}`;
};
export const hasMap = site.mapEmbedUrl.trim().length > 0;
export const mapHref = hasMap ? site.mapEmbedUrl.trim() : ghUrl;
