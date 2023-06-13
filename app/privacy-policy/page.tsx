import path from "path";
import { promises as fs } from "fs";
import { marked } from "marked";
import Link from "next/link";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Privacy policy | DenoLyrics",
  description: "The fastest web app for speech recognition, auto language detection and more. Plans starting at $0/month.",
  keywords: "DenoLyrics, el salvador, Privacy policy",
  openGraph: {
    type: "website",
    url: "https://denolyrics.com/",
    title: "What’s New | DenoLyrics",
    description: "DenoLyrics is a web application built with an AI model that supports 143 languages, no matter if the audio speed is fast or slow.",
    siteName: "DenoLyrics",
    images: [
      {
        url: "https://denolyrics.com/preview.png",
      },
    ],
  },
  category: "website",
  themeColor: "#180821",
};

async function getData() {
  const policyDir = path.join(process.cwd(), "legaldocs");

  const data = await fs.readFile(`${policyDir}/data-privacy.md`, "utf8");

  const markdownContent = marked.parse(data, {
    mangle: false,
    headerIds: false,
  });

  return markdownContent;
}
export function parseHTML(htmlString: string) {
  // Running on the server-side
  const { JSDOM } = require("jsdom");
  const dom = new JSDOM(htmlString);
  const { document } = dom.window;
  const h1Elements = document.querySelectorAll("h1");

  const h1EelementsResult: Array<{
    id: string;
    value: string;
  }> = [];

  for (const h1Element of h1Elements) {
    h1EelementsResult.push({
      id: h1Element.querySelector("a").getAttribute("href"),
      value: h1Element.textContent,
    });
  }
  return h1EelementsResult;
}

async function PrivacyPolicy() {
  const content = await getData();

  const data: Array<{
    id: string;
    value: string;
  }> = parseHTML(content);

  return (
    <div className="max-w-screen-xl m-auto">
      <div className="p-3 md:mt-40 scroll-smooth">
        <div className="grid grid-cols-1 grid-content-privacy gap-5">
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
            className="[&>p]:text-lg [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:py-3 [&>p]:py-3 [&>ul>li]:py-3 [&>ul]:list-disc [&>ul]:ml-5"
          />

          <div className="px-3 border border-r-transparent border-y-transparent border-gray-400">
            <h1 className="text-2xl font-bold">Contents</h1>
            <br />
            <ul className="list-none">
              {data.map((h1Value) => {
                return (
                  <li
                    key={h1Value.id}
                    className="py-2 hover:text-indigo-400 hover:underline cursor-pointer text-lg"
                  >
                    <Link href={`/privacy-policy${h1Value.id}`}>
                      {h1Value.value}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
