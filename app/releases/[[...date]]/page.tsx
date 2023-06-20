import NavbarGetStarted from "@/components/NavbarGetStarted";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import path from "path";
import { promises as fs } from "fs";
import { marked } from "marked";
import { stripHtml } from "string-strip-html";

// FUNCTIONS
import { markdownHeadtoJson } from "@/functions/markdownHeadtoJson";
import { convertDateToHyphen } from "@/functions/convertDateToHyphen";

type Release = {
  title: string;
  date: string;
  image: string;
  content: string;
  author: string;
};
async function getData(dateSelected: string) {
  const results: Array<Release> = [];
  const releasesDir = path.join(process.cwd(), "releases");

  const files = await fs.readdir(releasesDir);

  if (dateSelected !== "") {
    for (const file of files.filter(
      (file) => file.split(".")[0] === dateSelected
    )) {
      const data = await fs.readFile(`${releasesDir}/${file}`, "utf8");

      const markdownContent = data.split("---")[2];

      const { date, image, title, author } = markdownHeadtoJson(data);

      results.push({
        title,
        date,
        image,
        author,
        content: marked.parse(markdownContent, {
          mangle: false,
          headerIds: false,
        }),
      });
    }
  } else {
    for (const file of files) {
      const data = await fs.readFile(`${releasesDir}/${file}`, "utf8");

      const markdownContent = data.split("---")[2];

      const { date, image, title, author } = markdownHeadtoJson(data);

      results.push({
        title,
        date,
        image,
        author,
        content: marked.parse(markdownContent, {
          mangle: false,
          headerIds: false,
        }),
      });
    }
  }

  return { results };
}

type Props = {
  params: { date: string };
};

let MetadataRelease = {
  title: "What’s New | DenoLyrics",
  description: "Follow us like @DenoLyrics to be pending new updates.",
  keywords: "DenoLyrics, el salvador",
  openGraph: {
    type: "website",
    url: "https://denolyrics.com/releases",
    title: "What’s New | DenoLyrics",
    description: "Follow us like @DenoLyrics to be pending new updates",
    siteName: "DenoLyrics",
    images: [
      {
        url: "https://denolyrics.com/preview.png",
      },
    ],
    publishedTime: "",
    authors: [""],
  },
  twitter: {
    card: "summary_large_image",
    title: "What’s New | DenoLyrics",
    description: "Follow us like @DenoLyrics to be pending new updates",
    creator: "@denolyrics",
    images: [
      {
        url: "https://denolyrics.com/preview.png",
      },
    ],
  },
  category: "website",
  themeColor: "#180821",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dateParam = Array.isArray(params.date) ? params.date[0] : "";
  const data = await getData(dateParam);

  if (dateParam !== "" && data.results.length > 0) {
    const content = data.results[0].content;
    const firstLineBreak = content.indexOf("\n");

    MetadataRelease.title = `${data.results[0].title} | DenoLyrics`;
    MetadataRelease.openGraph.title = `${data.results[0].title} | DenoLyrics`;
    MetadataRelease.twitter.title = `${data.results[0].title} | DenoLyrics`;
    MetadataRelease.description = stripHtml(content).result.substring(
      0,
      firstLineBreak - 1
    );
    MetadataRelease.openGraph.description = stripHtml(content).result.substring(
      0,
      firstLineBreak - 1
    );
    MetadataRelease.twitter.description = stripHtml(content).result.substring(
      0,
      firstLineBreak - 1
    );
    MetadataRelease.openGraph.url = `/releases/${convertDateToHyphen(
      data.results[0].date
    )}`;
    MetadataRelease.openGraph.images = [
      {
        url: `https://www.denolyrics.com/releases/${data.results[0].image}}`,
      },
    ];
    MetadataRelease.twitter.images = [
      {
        url: `https://www.denolyrics.com/releases/${data.results[0].image}}`,
      },
    ];
    MetadataRelease.openGraph.type = "article";

    MetadataRelease.openGraph.publishedTime = new Date(
      data.results[0].date
    ).toISOString();
    MetadataRelease.openGraph.authors = [data.results[0].author];

    return MetadataRelease;
  }
  return MetadataRelease;
}
async function Releases({ params }: Props) {
  const dateParam = Array.isArray(params.date) ? params.date[0] : "";

  const data = await getData(dateParam);

  const dataSorted = data.results.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <NavbarGetStarted />
      <div className="max-w-screen-lg m-auto mt-20 md:mt-20 p-3">
        <div className="text-3xl md:text-4xl font-extrabold mb-5 mt-5 text-[#C9D1D9]">
          <h1>What’s New</h1>
        </div>
        <a
          className="flex gap-2 hover:text-indigo-400 hover:underline cursor-pointer text-xl"
          href="https://twitter.com/denolyrics"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 256 209"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <title>Twitter</title>
            <g>
              <path
                d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259"
                fill="currentColor"
              />
            </g>
          </svg>
          Follow us like @DenoLyrics to be pending new updates
        </a>

        {dataSorted.map(({ content, date, image, title }) => {
          return (
            <div
              key={title}
              className="grid mt-20 grid-release gap-6 md:gap-0 p-3"
            >
              <div>
                <Link
                  href={`/releases/${convertDateToHyphen(date)}`}
                  className="rounded-lg border w-fit p-2 border-indigo-400 text-indigo-400"
                >
                  {date}
                </Link>
                {dateParam !== "" && (
                  <>
                    <br />
                    <br />
                    <Link href="/releases" className="hover:underline">
                      <span className="text-4xl">←</span> Back to all updates
                    </Link>
                  </>
                )}
              </div>
              <div className="[&>h2]:text-[#C9D1D9] [&>h2]:text-3xl [&>h2]:font-bold">
                <Link href={`/releases/${convertDateToHyphen(date)}`}>
                  <picture>
                    <Image
                      src={`/releases/${image}`}
                      alt={title}
                      width={808}
                      height={420}
                      className="h-[200px] w-full md:w-[808px] md:h-[320px] lg:h-[420px] rounded-lg mb-10"
                    />
                  </picture>
                </Link>
                <h2>
                  <Link href={`/releases/${convertDateToHyphen(date)}`}>
                    {title}
                  </Link>
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                  className="[&>p]:my-2 text-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Releases;
