import axios from "axios";
import * as cheerio from "cheerio";
import { extractContent } from "./extractor";

const MAX_PAGES = 15;

const IMPORTANT_KEYWORDS = [
  "about",
  "company",
  "products",
  "product",
  "pricing",
  "enterprise",
  "services",
  "service",
  "solutions",
  "solution",
  "features",
  "jobs",
  "careers",
  "culture",
  "values",
  "mission",
  "vision",
  "team",
  "teams",
  "compatibility",
  "contact",
];

const COUNTRY_CODES = [
  "in",
  "us",
  "uk",
  "au",
  "ca",
  "de",
  "fr",
  "jp",
  "sg",
  "it",
  "es",
  "nl",
  "be",
];

export async function downloadPage(url: string) {
  const response = await axios.get(url);

  const html = response.data;

  const $ = cheerio.load(html);

  const links: string[] = [];

  $("a").each((_, element) => {
    const href = $(element).attr("href");

    if (href) {
      links.push(href);
    }
  });

  return {
    url,
    html,
    links: filterLinks(url, links),
  };
}

function filterLinks(baseUrl: string, links: string[]) {
  const filtered = new Set<string>();

  const hostname = new URL(baseUrl).hostname;

  for (const link of links) {
    try {
      const absolute = new URL(link, baseUrl);

      if (absolute.hostname !== hostname) continue;

      if (
        absolute.protocol !== "http:" &&
        absolute.protocol !== "https:"
      ) {
        continue;
      }

      absolute.hash = "";
      absolute.search = "";

      const segments = absolute.pathname
        .toLowerCase()
        .split("/")
        .filter(Boolean);

      // Homepage
      if (segments.length === 0) {
        filtered.add(absolute.href);
        continue;
      }

      // Remove locale prefixes like /in/about
      const cleanSegments = [...segments];

      if (COUNTRY_CODES.includes(cleanSegments[0])) {
        cleanSegments.shift();
      }

      // Prevent crawling extremely deep URLs
      if (cleanSegments.length > 4) continue;

      // Keep pages if ANY segment is important
      const isImportant = cleanSegments.some((segment) =>
        IMPORTANT_KEYWORDS.includes(segment)
      );

      if (isImportant) {
        filtered.add(absolute.href);
      }
    } catch {
      // Ignore invalid URLs
    }
  }

  return [...filtered];
}

export async function crawlWebsite(startUrl: string) {
  const pages: {
    url: string;
    text: string;
  }[] = [];

  const visited = new Set<string>();

  console.log(`Crawling: ${startUrl}`);

  const home = await downloadPage(startUrl);

  visited.add(home.url);

  pages.push({
    url: home.url,
    text: extractContent(home.html),
  });

  for (const link of home.links) {
    if (visited.has(link)) continue;

    if (pages.length >= MAX_PAGES) break;

    try {
      console.log(`Crawling: ${link}`);

      const page = await downloadPage(link);

      visited.add(page.url);

      pages.push({
        url: page.url,
        text: extractContent(page.html),
      });
    } catch {
      console.log(`Failed to crawl ${link}`);
    }
  }

  return pages;
}