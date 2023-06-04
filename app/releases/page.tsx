import NavbarGetStarted from "@/components/NavbarGetStarted";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { promises as fs } from "fs";
import { marked } from "marked";

type Release = {
  title: string;
  date: string;
  image: string;
  content: string;
};

type infoMarkdown = {
  title: string;
  date: string;
  image: string;
};

function markdownHeadtoJson(markdown: string): infoMarkdown {
  const arrayInfo = markdown
    .split("---")[1]
    .split("\n")
    .filter((value) => value !== "");

  const resultinArrayObjects = arrayInfo.map((field) => {
    const key = field.split(":")[0].replace('"', "");

    const value = eval(field);

    return { [key]: value };
  });

  const resultinSingleObject = resultinArrayObjects.reduce((acc, obj) => {
    Object.assign(acc, obj);
    return acc;
  }, {});

  return resultinSingleObject as infoMarkdown;
}

async function getData() {
  const results: Array<Release> = [];
  const releasesDir = path.join(process.cwd(), "releases");

  const files = await fs.readdir(releasesDir);

  for (const file of files) {
    const data = await fs.readFile(`${releasesDir}/${file}`, "utf8");

    const markdownContent = data.split("---")[2];

    const { date, image, title } = markdownHeadtoJson(data);

    results.push({
      title,
      date,
      image,
      content: marked.parse(markdownContent),
    });
  }

  return { results };
}
async function Releases() {
  const data = await getData();
  return (
    <>
      <NavbarGetStarted />
      <div className="max-w-screen-lg m-auto mt-20 md:mt-20">
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

        {data.results.map(({ content, date, image, title }) => {
          return (
            <div
              key={title}
              className="grid mt-20"
              style={{
                gridTemplateColumns: "25% 75%",
              }}
            >
              <div>
                <Link
                  href="/releases/may-15-2023"
                  className="rounded-lg border w-fit p-2 border-indigo-400 text-indigo-400"
                >
                  {date}
                </Link>
              </div>
              <div className="[&>h2]:text-[#C9D1D9] [&>h2]:text-2xl [&>h2]:font-bold">
                <Link href="/releases/may-15-2023">
                  <picture>
                    <Image
                      src={`/releases/${image}`}
                      alt=""
                      width={808}
                      height={455}
                      className="w-[808px] h-[455px] rounded-lg mb-10"
                    />
                  </picture>
                </Link>
                <h2>
                  <Link href="/releases/may-15-2023">{title}</Link>
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                  className="[&>p]:my-2"
                />

                <div className="text-lg">
                  <Link href="/releases/may-15-2023" className="underline">
                    Learn more <span className="text-4xl">→</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Releases;
