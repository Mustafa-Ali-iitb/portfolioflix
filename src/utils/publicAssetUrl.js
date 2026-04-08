/**
 * Resolves paths to files in /public for GitHub Pages (Vite base path).
 * Absolute http(s) URLs are returned unchanged.
 */
export function publicAssetUrl(path) {
  if (!path) return path
  if (/^https?:\/\//i.test(path)) return path
  const base = import.meta.env.BASE_URL
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}
