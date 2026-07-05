

export function getAIContext(data: any) {
  return data.aiContextPackage;
}

export function getMarkdownContext(data: any) {
  return `
# ${data.companyName}

## Company Profile

**Industry:** ${data.overview.industry}

**Website:** ${data.website}

## Executive Summary

${data.overview.executiveSummary}

## Mission

> ${data.overview.mission}

## Vision

> ${data.overview.vision}

## Products

${data.products.products.map((p: string) => `- ${p}`).join("\n")}

## Services

${data.products.services.map((s: string) => `- ${s}`).join("\n")}

## Features

${data.products.features.map((f: string) => `- ${f}`).join("\n")}

## Target Audience

${data.audience.summary}

## Buyer Personas

${data.audience.personas
  .map(
    (p: any) => `
### ${p.title}

${p.description}
`
  )
  .join("\n")}

## Pain Points

${data.audience.painPoints.map((p: string) => `- ${p}`).join("\n")}

## Unique Selling Propositions

${data.overview.usp.map((u: string) => `- ${u}`).join("\n")}
`;
}

export function getJsonContext(data: any) {
  return JSON.stringify(data, null, 2);
}