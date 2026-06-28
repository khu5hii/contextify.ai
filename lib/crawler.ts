import axios from "axios";
import * as cheerio from "cheerio";

const MAX_PAGES = 20;

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

  const filteredLinks = filterLinks(url, links);

  return {
    url,
    html,
    links: filteredLinks,
  };
}

function filterLinks(baseUrl: string, links: string[]) {
  const filtered: string[] = [];

  for (const link of links) {
    try {
      const absoluteUrl = new URL(link, baseUrl);

      // Ignore external domains
      if (absoluteUrl.hostname !== new URL(baseUrl).hostname) {
        continue;
      }

      // Ignore fragments
      if (absoluteUrl.hash) {
        continue;
      }

      // Ignore mailto:, tel:, javascript:
      if (
        absoluteUrl.protocol !== "http:" &&
        absoluteUrl.protocol !== "https:"
      ) {
        continue;
      }

      filtered.push(absoluteUrl.href);
    } catch {
      // Ignore invalid URLs
    }
  }

  return [...new Set(filtered)];
}

export async function crawlWebsite(startUrl: string) {
  const queue: string[] = [startUrl];
  const visited = new Set<string>();

  const pages: {
    url: string;
    html: string;
  }[] = [];

  while (queue.length > 0 && visited.size < MAX_PAGES) {
    const currentUrl = queue.shift();

    if (!currentUrl) continue;

    if (visited.has(currentUrl)) continue;

    console.log(`Crawling: ${currentUrl}`);

    visited.add(currentUrl);

    try {
      const page = await downloadPage(currentUrl);

      pages.push({
        url: currentUrl,
        html: page.html,
      });

      for (const link of page.links) {
        if (!visited.has(link)) {
          queue.push(link);
        }
      }
    } catch (error) {
      console.log(`Failed to crawl ${currentUrl}`);
    }
  }

  return pages;
}