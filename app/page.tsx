import Faq from "@/components/Faq";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";
import { faqs } from "../components/Faq";

// CONTEXT
import TryForFree from "@/components/TryForFree";
import ShareFriends from "@/components/ShareFriends/page";
import NavbarGetStarted from "@/components/NavbarGetStarted";
import FeaturesDeno from "@/components/FeaturesDeno";

export const metadata: Metadata = {
  title: "Home | DenoLyrics",
  description:
    "DenoLyrics is a web application built with an AI model that supports 143 languages, no matter if the audio speed is fast or slow.",
  keywords: "DenoLyrics, el salvador",
  openGraph: {
    type: "website",
    url: "https://denolyrics.com/",
    title: "Home | DenoLyrics",
    description:
      "DenoLyrics is a web application built with an AI model that supports 143 languages, no matter if the audio speed is fast or slow.",
    siteName: "DenoLyrics",
    images: [
      {
        url: "https://denolyrics.com/preview.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | DenoLyrics",
    description:
      "DenoLyrics is a web application built with an AI model that supports 143 languages, no matter if the audio speed is fast or slow.",
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

const parseLdJson = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => {
      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    }),
  };
  return data;
};

export default function Home() {
  return (
    <main>
      <Script
        id="faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parseLdJson()) }}
      />
      <div className="bg-gradient">
        <NavbarGetStarted />
        <div className="md:mt-40">
          <div className="text-3xl md:text-6xl font-extrabold text-center mb-5 pt-20 md:mt-5 p-2 max-w-screen-lg m-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6b637b]">
            <h1 id="title">
              Convert Audio to Text with Artificial Intelligence
            </h1>
          </div>
          <div className="max-w-screen-md md:m-auto m-3">
            <p id="description" className="text-xl font-normal text-center">
              DenoLyrics is a web application built with an AI model that
              supports 143 languages, no matter if the audio speed is fast or
              slow.
            </p>
          </div>

          <div className="flex justify-center items-center mt-10">
            <Link
              href="https://app.denolyrics.com"
              className="select-none text-white hover:shadow-md bg-[#292936] hover:bg-black focus:outline-none font-medium rounded-lg inline-flex items-center px-5 py-2.5 mb-2 mt-2 border border-transparent"
              rel="noreferrer"
            >
              Get started for free
            </Link>
          </div>
          <p className="text-center text-sm">No credit card required</p>

          <div className="flex justify-center items-center mt-40 m-3">
            <Image
              unoptimized={true}
              src={"/screenshot.png"}
              width={1200}
              alt="Screenshot of the DenoLyrics web app"
              height={550}
              id="screenshot"
              priority={true}
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center m-3">
          <div className="max-w-screen-xl mt-20 md:mt-40">
            <ol className="lg:flex lg:items-center text-center lg:text-start">
              <li className="relative mb-6 sm:mb-0">
                <div className="flex justify-center items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 md:w-6 md:h-10 rounded-full ring-0 bg-[#292936] sm:ring-8 ring-[#292936] shrink-0 text-white">
                    1
                  </div>
                  <div className="hidden lg:flex w-full bg-[#828994] h-0.5" />
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#C9D1D9]">
                    Sign in
                  </h3>
                  <p className="font-normal text-lg">
                    Sign in with your favorite provider.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex justify-center items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 md:w-6 md:h-10 rounded-full ring-0 bg-[#292936] sm:ring-8 ring-[#292936] shrink-0 text-white text-xl">
                    2
                  </div>
                  <div className="hidden lg:flex w-full bg-[#828994] h-0.5" />
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#C9D1D9]">
                    Create folder
                  </h3>
                  <p className="font-normal text-lg">
                    Create a folder to later upload your audio files.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex justify-center items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 md:w-6 md:h-10 rounded-full ring-0 bg-[#292936] sm:ring-8 ring-[#292936] shrink-0 text-white text-xl">
                    3
                  </div>
                  <div className="hidden lg:flex w-full bg-[#828994] h-0.5" />
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#C9D1D9]">
                    Upload audio files
                  </h3>
                  <p className="font-normal text-lg">
                    Select your audio files with mp3 format.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex justify-center items-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 md:w-6 md:h-10 rounded-full ring-0 bg-[#292936] sm:ring-8 ring-[#292936] shrink-0 text-white text-xl">
                    4
                  </div>
                  <div className="hidden lg:flex w-full bg-[#828994] h-0.5" />
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#C9D1D9]">
                    Processing text
                  </h3>
                  <p className="font-normal text-lg">
                    Processing audio on the server to get the text.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <ShareFriends />

        <FeaturesDeno />

        <div className="mt-24 md:mt-5 md:h-[60vh]">
          <div>
            <div className="flex justify-center items-center">
              <p className="text-3xl md:text-4xl font-bold mt-5 text-[#C9D1D9]">
                Why DenoLyrics
              </p>
            </div>
            <div className="flex justify-center items-center m-3 mt-10">
              <div className="max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-[#2A2D38] p-3 rounded-lg">
                    <div className="bg-[#74F9BE] w-[65px] h-[60px] rounded-xl relative mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#363141"
                        viewBox="0 0 256 256"
                        className="w-10 h-10"
                        style={{
                          position: "absolute",
                          top: "50%",
                          transform: "translate(30%, -50%)",
                        }}
                      >
                        <path d="M99.06,128.61a8,8,0,0,0-8.72,1.73L68.69,152H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H68.69l21.65,21.66A8,8,0,0,0,104,224V136A8,8,0,0,0,99.06,128.61ZM88,204.69,77.66,194.34A8,8,0,0,0,72,192H56V168H72a8,8,0,0,0,5.66-2.34L88,155.31ZM152,180a40.55,40.55,0,0,1-20,34.91A8,8,0,0,1,124,201.09a24.49,24.49,0,0,0,0-42.18A8,8,0,0,1,132,145.09,40.55,40.55,0,0,1,152,180Zm61.66-97.66-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v80a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H168a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z"></path>
                      </svg>
                    </div>
                    <h5 className="text-2xl font-semibold ">
                      Async transcription
                    </h5>
                    <p className="text-lg md:text-xl mt-5">
                      Save and transcribe pre-recorded audio files in seconds,
                      with our efficient model
                    </p>
                  </div>
                  <div className="bg-[#2A2D38] p-3 rounded-lg">
                    <div className="bg-[#74F9BE] w-[65px] h-[60px] rounded-xl relative mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#363141"
                        className="w-10 h-10"
                        style={{
                          position: "absolute",
                          top: "50%",
                          transform: "translate(30%, -50%)",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                        />
                      </svg>
                    </div>
                    <h5 className="text-2xl font-semibold ">
                      Incorporating the most recent advancements in AI
                    </h5>
                    <p className="text-lg md:text-xl mt-5">
                      Access AI models built on the latest breakthroughs in
                      Transformers and large-scale training on enormous amounts
                      of data for transcribing speech.
                    </p>
                  </div>{" "}
                  <div className="bg-[#2A2D38] p-3 rounded-lg">
                    <div className="bg-[#74F9BE] w-[65px] h-[60px] rounded-xl relative mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#363141"
                        className="w-10 h-10"
                        style={{
                          position: "absolute",
                          top: "50%",
                          transform: "translate(30%, -50%)",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                        />
                      </svg>
                    </div>
                    <h5 className="text-2xl font-semibold ">
                      We use the best technologies
                    </h5>
                    <p className="text-lg md:text-xl mt-5">
                      Our team is dedicated to writing quality code with the
                      latest and greatest in web technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />

      <TryForFree />
    </main>
  );
}
