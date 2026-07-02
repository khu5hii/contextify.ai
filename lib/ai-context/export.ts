function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();

  a.remove();
  URL.revokeObjectURL(url);
}

export function exportTxt(filename: string, text: string) {
  download(`${filename}.txt`, text, "text/plain");
}

export function exportMarkdown(filename: string, markdown: string) {
  download(`${filename}.md`, markdown, "text/markdown");
}

export function exportJson(filename: string, json: string) {
  download(`${filename}.json`, json, "application/json");
}

export function printPdf() {
  window.print();
}