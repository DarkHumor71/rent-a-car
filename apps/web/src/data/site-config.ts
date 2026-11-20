export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function publicAssetPath(path: `/${string}`): string {
  return `${siteBasePath}${path}`;
}
