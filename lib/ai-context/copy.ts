type Versions = {
  chatgpt: string;
  claude: string;
  gemini: string;
  markdown: string;
  json: string;
};

export async function copyContext(
  selectedFormat: keyof Versions,
  versions: Versions
) {
  await navigator.clipboard.writeText(versions[selectedFormat]);
}