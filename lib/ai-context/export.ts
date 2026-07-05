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

export function exportTxt(filename: string, aiContextPackage: string) {
  download(`${filename}.txt`, aiContextPackage, "text/plain");
}

export function exportMarkdown(filename: string, aiContextPackage: string) {
  download(`${filename}.md`, aiContextPackage, "text/markdown");
}

export function exportJson(filename: string, data: any) {
  const { aiContextPackage, ...jsonData } = data;

  download(
    `${filename}.json`,
    JSON.stringify(jsonData, null, 2),
    "application/json"
  );
}

export function exportPdf(filename: string, aiContextPackage: string) {
  const doc = new jsPDF();

  const margin = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const usableWidth = pageWidth - margin * 2;

  doc.setFont("courier", "normal");
  doc.setFontSize(10);

  const lines = doc.splitTextToSize(aiContextPackage, usableWidth);

  let y = margin;

  lines.forEach((line: string) => {
    if (y > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }

    doc.text(line, margin, y);
    y += 5;
  });

  doc.save(`${filename}.pdf`);
}