import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import * as cheerio from "cheerio";

export function extractContent(html: string): string {

  const $ = cheerio.load(html);

  $(
    "script, style, noscript, svg, iframe, header, footer, nav, aside, form"
  ).remove();

  const cleanedHtml = $.html();

  const dom = new JSDOM(cleanedHtml);

  const reader = new Readability(dom.window.document);

  const article = reader.parse();

  if (!article) {
    return "";
  }

  return article.textContent?.trim() ?? "";
}