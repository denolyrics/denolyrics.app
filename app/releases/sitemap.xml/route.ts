import { markdownHeadtoJson } from "@/functions/markdownHeadtoJson";
import path from "path";
import { promises as fs } from "fs";
import { convertDateToHyphen } from "@/functions/convertDateToHyphen";

async function getData() {
  const results: Array<{ url: string; date: string }> = [];
  const releasesDir = path.join(process.cwd(), "releases");

  const files = await fs.readdir(releasesDir);

  for (const file of files) {
    const data = await fs.readFile(`${releasesDir}/${file}`, "utf8");

    const { date } = markdownHeadtoJson(data);

    results.push({
      url: `https://www.denolyrics.com/releases/${convertDateToHyphen(date)}`,
      date: new Date(date).toISOString(),
    });
  }
  return { results };
}

export async function GET() {
  const data = await getData();

  const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${data.results
      .map((result) => {
        return `
          <url>
              <loc>${result.url}</loc>
              <lastmod>${result.date}</lastmod>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  return new Response(xmlData, {
    status: 200,
    headers: {
      "content-type": "application/xml",
    },
  });
}
