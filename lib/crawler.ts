import axios from "axios";
import * as cheerio from "cheerio";
import { extractContent } from "./extractor";

const MAX_PAGES = 10;

const IMPORTANT_PAGES = [
  "",
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

      // Skip locale prefixes (/in, /au, etc.)
      let first = segments[0];

      if (COUNTRY_CODES.includes(first) && segments.length > 1) {
        first = segments[1];
      }

      // Ignore nested pages like /connect/pricing
      if (
        segments.length > 2 ||
        (COUNTRY_CODES.includes(segments[0]) && segments.length > 3)
      ) {
        continue;
      }

      if (IMPORTANT_PAGES.includes(first)) {
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

  // Crawl homepage first
  console.log(`Crawling: ${startUrl}`);

  const home = await downloadPage(startUrl);

  pages.push({
    url: home.url,
    text: extractContent(home.html),
  });

  // Only crawl important pages from homepage
  for (const link of home.links.slice(0, MAX_PAGES - 1)) {
    try {
      console.log(`Crawling: ${link}`);

      const page = await downloadPage(link);

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