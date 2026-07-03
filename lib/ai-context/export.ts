import jsPDF from "jspdf";

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

export function exportPdf(filename: string, content: string) {
  const doc = new jsPDF();

  const margin = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const usableWidth = pageWidth - margin * 2;

  doc.setFont("courier", "normal"); // nice for AI context
  doc.setFontSize(10); // much smaller

  const lines = doc.splitTextToSize(content, usableWidth);

  let y = margin;

  lines.forEach((line: string) => {
    if (y > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }

    doc.text(line, margin, y);
    y += 5; // line height
  });

  doc.save(`${filename}.pdf`);
}