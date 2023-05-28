"use client";

import { useContext } from "react";
import Faq from "@/components/Faq";
import Image from "next/image";
import Link from "next/link";

// CONTEXT
import NavbarContext from "../context/NavbarContext";
import { NavbarContextType } from "../context/NavbarContext/types";
import TryForFree from "@/components/TryForFree";

export default function Home() {
  const { ShowItemsMobile } = useContext(NavbarContext) as NavbarContextType;

  if (ShowItemsMobile) return <div />;
  return (
    <main className="bg-gradient">
      <nav className="hidden md:block font-semibold px-5 py-2">
        <div className="grid grid-cols-2">
          <div className="flex justify-start items-start">
            <Link
              href="/"
              className="select-none px-5 py-2.5 border border-transparent"
            >
              DenoLyrics
            </Link>
          </div>
          <div className="flex justify-end items-end gap-3">
            <div className="flex justify-center items-center">
              <Link
                href="https://app.denolyrics.com"
                className="select-none text-white hover:shadow-md bg-black focus:outline-none font-medium rounded-lg px-5 py-2.5 border border-transparent"
              >
                Get started
              </Link>{" "}
            </div>
          </div>
        </div>
      </nav>
      <div className="mt-20 md:mt-40">
        <div className="flex justify-center items-center"></div>
        <div className="text-3xl md:text-6xl font-extrabold text-center mb-5 mt-5 p-2 max-w-screen-lg m-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6b637b]">
          <h1 id="title">Convert Audio to Text with Artificial Intelligence</h1>
        </div>
        <div className="max-w-screen-md md:m-auto m-3">
          <p id="description" className="text-lg font-normal text-center">
            DenoLyrics is a web application built with an AI model that supports
            +300 languages, no matter if the audio speed is fast or slow.
          </p>
        </div>

        <div className="flex justify-center items-center mt-10">
          <Link
            href="https://app.denolyrics.com"
            className="select-none text-white hover:shadow-md bg-black focus:outline-none font-medium rounded-lg inline-flex items-center px-5 py-2.5 mb-2 mt-2 border border-transparent"
            rel="noreferrer"
          >
            Get started
          </Link>
        </div>
        <p className="text-center text-sm">No credit card required</p>

        <div className="flex justify-center items-center mt-40 m-3">
          <Image
            unoptimized={true}
            src={"/screenshot.png"}
            width="1200"
            alt=""
            height="550"
            id="screenshot"
          />
        </div>
      </div>

      <div className="md:h-96 grid place-content-center mt-20  p-3">
        <div className="max-w-screen-lg m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div className="text-2xl md:text-4xl font-bold text-white">
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

                <span>Built with Artificial Intelligence</span>
              </div>
              <p className="text-base font-normal text-[#CCD1D6] mt-2">
                Built with an AI model that supports +50 languages, no matter if
                the audio speed is fast or slow.
              </p>
            </div>

            <div>
              <div className="text-2xl md:text-4xl font-bold text-white">
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
                <span>We use the best technologies</span>
              </div>
              <p className="text-base font-normal text-[#CCD1D6] mt-2">
                Our team is dedicated to writing quality code with the latest
                and greatest in web technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid place-content-center mt-10 p-3">
        <div className="max-w-screen-xl m-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <svg
                viewBox="0 0 1920 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1920" height="1080" fill="#F9F9F8" />
                <rect width="121" height="1080" fill="#EDEDED" />
                <rect
                  x="514"
                  y="239"
                  width="933"
                  height="492"
                  rx="6"
                  fill="#EDEDED"
                />
                <path
                  d="M1137 661C1137 657.686 1139.69 655 1143 655H1254C1257.31 655 1260 657.686 1260 661V696C1260 699.314 1257.31 702 1254 702H1143C1139.69 702 1137 699.314 1137 696V661Z"
                  fill="#E0E0E0"
                />
                <rect
                  x="545"
                  y="485"
                  width="878"
                  height="74"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="545"
                  y="265"
                  width="352"
                  height="37"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="639"
                  y="29"
                  width="642"
                  height="37"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="162"
                  y="29"
                  width="180"
                  height="37"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="545"
                  y="326"
                  width="730"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1300"
                  y="655"
                  width="123"
                  height="47"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1774"
                  y="117"
                  width="123"
                  height="47"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="1613"
                  y="117"
                  width="123"
                  height="47"
                  rx="6"
                  fill="#EDEDED"
                />
                <circle cx="1854.5" cy="35.5" r="18.5" fill="#EDEDED" />
              </svg>
              <div className="text-2xl md:text-4xl font-bold mt-5">
                <span>Create a folder</span>
              </div>
              <p className="mt-2">Step 1</p>
              <p className="text-base font-normal mt-2">
                Create a folder to later upload your audio files.
              </p>
            </div>
            <div>
              <svg
                viewBox="0 0 1920 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1920" height="1080" fill="#F9F9F8" />
                <rect width="121" height="1080" fill="#EDEDED" />
                <rect
                  x="252"
                  y="199"
                  width="1535"
                  height="415"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="252"
                  y="736"
                  width="1535"
                  height="45"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="252"
                  y="806"
                  width="1535"
                  height="45"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="252"
                  y="666"
                  width="1535"
                  height="45"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="1504"
                  y="903"
                  width="123"
                  height="47"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="639"
                  y="29"
                  width="642"
                  height="37"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="162"
                  y="29"
                  width="180"
                  height="37"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="1664"
                  y="903"
                  width="123"
                  height="47"
                  rx="6"
                  fill="#EDEDED"
                />
                <circle cx="1854.5" cy="35.5" r="18.5" fill="#EDEDED" />
              </svg>

              <div className="text-2xl md:text-4xl font-bold mt-5">
                <span>Upload Audio Files</span>
              </div>
              <p className="mt-2">Step 2</p>
              <p className="text-base font-normal mt-2">
                Select your audio files with mp3 format.
              </p>
            </div>

            <div>
              <svg
                viewBox="0 0 1920 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1920" height="1080" fill="#F9F9F8" />
                <rect width="121" height="1080" fill="#EDEDED" />
                <path
                  d="M1018 201C1018 197.686 1020.69 195 1024 195H1870C1873.31 195 1876 197.686 1876 201V973C1876 976.314 1873.31 979 1870 979H1024C1020.69 979 1018 976.314 1018 973V201Z"
                  fill="#EDEDED"
                />
                <rect
                  x="162"
                  y="203"
                  width="831"
                  height="127"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="162"
                  y="402"
                  width="831"
                  height="127"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="162"
                  y="601"
                  width="831"
                  height="127"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="162"
                  y="779"
                  width="831"
                  height="127"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="639"
                  y="29"
                  width="642"
                  height="37"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="162"
                  y="29"
                  width="180"
                  height="37"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="1753"
                  y="117"
                  width="123"
                  height="47"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="870"
                  y="117"
                  width="123"
                  height="47"
                  rx="6"
                  fill="#EDEDED"
                />
                <rect
                  x="709"
                  y="117"
                  width="123"
                  height="47"
                  rx="6"
                  fill="#EDEDED"
                />
                <circle cx="1854.5" cy="35.5" r="18.5" fill="#EDEDED" />
                <rect
                  x="1085"
                  y="267"
                  width="730"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="393"
                  width="730"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="561"
                  width="730"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="603"
                  width="730"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="771"
                  width="730"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="435"
                  width="730"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="351"
                  width="591"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="813"
                  width="591"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="855"
                  width="591"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="687"
                  width="591"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="519"
                  width="591"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="309"
                  width="408"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="477"
                  width="408"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="645"
                  width="408"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="729"
                  width="408"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
                <rect
                  x="1085"
                  y="897"
                  width="408"
                  height="21"
                  rx="6"
                  fill="#E0E0E0"
                />
              </svg>

              <div className="text-2xl md:text-4xl font-bold mt-5">
                <span>Processing Text</span>
              </div>
              <p className="mt-2">Step 3</p>
              <p className="text-base font-normal mt-2">
                Processing audio on the server to get the text.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Faq />

      <TryForFree />
    </main>
  );
}
