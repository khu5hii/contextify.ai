export function normalizeUrl(input: string) {
  const url = new URL(input);

  return url.hostname
    .toLowerCase()
    .replace(/^www\./, "");
}