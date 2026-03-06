export function clampPage(page: number, maxPages: number): number {
  return Math.max(1, Math.min(page, maxPages));
}

export function getPageFromQuery(
  query: string | string[] | null | undefined,
  maxPages: number
): number {
  const value = Array.isArray(query) ? query[0] : query;
  const page = value ? Number.parseInt(value, 10) : 1;
  return clampPage(Number.isNaN(page) ? 1 : page, maxPages);
}

export function formatPageRange(current: number, total: number): string {
  return `${current} / ${total}`;
}
