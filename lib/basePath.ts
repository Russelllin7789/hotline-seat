export const basePath =
  process.env.NODE_ENV === "production" ? "/hotline-seat" : "";

export function withBasePath(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
