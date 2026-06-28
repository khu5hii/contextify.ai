export function mergeCompanyContent(
  pages: {
    url: string;
    text: string;
  }[]
) {
  return pages
    .map(
      (page) => `
URL: ${page.url}

${page.text}
`
    )
    .join("\n\n--------------------------\n\n");
}