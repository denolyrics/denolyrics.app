import Faq from "@/components/Faq";
import Image from "next/image";
import Link from "next/link";

// CONTEXT
import TryForFree from "@/components/TryForFree";
import ShareFriends from "./ShareFriends";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient">
        <nav className="hidden md:block font-semibold px-5 py-2">
          <div className="grid grid-cols-2">
            <div className="inline-flex justify-start items-center">
              <svg
                width={30}
                height={30}
                viewBox="0 0 182 194"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="denolyrics">
                  <g id="Clip path group">
                    <mask
                      id="mask0_1_99"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={150}
                      height={150}
                    >
                      <g id="770974d8db">
                        <path id="Vector" d="M0 0H150V150H0V0Z" fill="white" />
                      </g>
                    </mask>
                    <g mask="url(#mask0_1_99)">
                      <g id="Group">
                        <g id="Clip path group_2">
                          <mask
                            id="mask1_1_99"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={150}
                            height={150}
                          >
                            <g id="eacf326b7d">
                              <path
                                id="Vector_2"
                                d="M6 0H144C145.594 0 147.12 0.630208 148.245 1.75521C149.37 2.88021 150 4.40625 150 6V144C150 145.589 149.37 147.115 148.245 148.24C147.12 149.365 145.594 150 144 150H6C4.40625 150 2.88021 149.365 1.75521 148.24C0.630208 147.115 0 145.589 0 144V6C0 2.68229 2.6875 0 6 0Z"
                                fill="white"
                              />
                            </g>
                          </mask>
                          <g mask="url(#mask1_1_99)">
                            <g id="Group_2">
                              <path
                                id="Vector_3"
                                d="M0 0H150V150H0V0Z"
                                fill="white"
                              />
                              <path
                                id="Vector_4"
                                d="M6 0H144C145.594 0 147.12 0.630208 148.245 1.75521C149.37 2.88021 150 4.40625 150 6V144C150 145.589 149.37 147.115 148.245 148.24C147.12 149.365 145.594 150 144 150H6C4.40625 150 2.88021 149.365 1.75521 148.24C0.630209 147.115 0 145.589 0 144V6C0 2.68229 2.6875 0 6 0Z"
                                stroke="#292936"
                                strokeWidth={4}
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Clip path group_3">
                    <mask
                      id="mask2_1_99"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={16}
                      y={16}
                      width={150}
                      height={150}
                    >
                      <g id="68ea387da9">
                        <path
                          id="Vector_5"
                          d="M16 16H166V166H16V16Z"
                          fill="white"
                        />
                      </g>
                    </mask>
                    <g mask="url(#mask2_1_99)">
                      <g id="Group_3">
                        <g id="Clip path group_4">
                          <mask
                            id="mask3_1_99"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x={16}
                            y={16}
                            width={150}
                            height={150}
                          >
                            <g id="4ebd488f08">
                              <path
                                id="Vector_6"
                                d="M22 16H160C161.594 16 163.12 16.6302 164.245 17.7552C165.37 18.8802 166 20.4062 166 22V160C166 161.589 165.37 163.115 164.245 164.24C163.12 165.365 161.594 166 160 166H22C20.4063 166 18.8802 165.365 17.7552 164.24C16.6302 163.115 16 161.589 16 160V22C16 18.6823 18.6875 16 22 16Z"
                                fill="white"
                              />
                            </g>
                          </mask>
                          <g mask="url(#mask3_1_99)">
                            <g id="Group_4">
                              <path
                                id="Vector_7"
                                d="M16 16H166V166H16V16Z"
                                fill="white"
                              />
                              <path
                                id="Vector_8"
                                d="M22 16H160C161.594 16 163.12 16.6302 164.245 17.7552C165.37 18.8802 166 20.4063 166 22V160C166 161.589 165.37 163.115 164.245 164.24C163.12 165.365 161.594 166 160 166H22C20.4063 166 18.8802 165.365 17.7552 164.24C16.6302 163.115 16 161.589 16 160V22C16 18.6823 18.6875 16 22 16Z"
                                stroke="#292936"
                                strokeWidth={4}
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Clip path group_5">
                    <mask
                      id="mask4_1_99"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={32}
                      y={32}
                      width={150}
                      height={162}
                    >
                      <g id="42ae55c4d8">
                        <path
                          id="Vector_9"
                          d="M32 32H182V193.719H32V32Z"
                          fill="white"
                        />
                      </g>
                    </mask>
                    <g mask="url(#mask4_1_99)">
                      <g id="Group_5">
                        <g id="Clip path group_6">
                          <mask
                            id="mask5_1_99"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x={32}
                            y={32}
                            width={150}
                            height={162}
                          >
                            <g id="ed335db663">
                              <path
                                id="Vector_10"
                                d="M38 32H176C177.594 32 179.12 32.6302 180.245 33.7552C181.37 34.8802 182 36.4062 182 38V187.552C182 189.146 181.37 190.672 180.245 191.797C179.12 192.922 177.594 193.552 176 193.552H38C36.4063 193.552 34.8802 192.922 33.7552 191.797C32.6302 190.672 32 189.146 32 187.552V38C32 34.6823 34.6875 32 38 32Z"
                                fill="white"
                              />
                            </g>
                          </mask>
                          <g mask="url(#mask5_1_99)">
                            <g id="Group_6">
                              <path
                                id="Vector_11"
                                d="M32 32H182V193.719H32V32Z"
                                fill="white"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Clip path group_7">
                    <mask
                      id="mask6_1_99"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={32}
                      y={32}
                      width={150}
                      height={162}
                    >
                      <g id="42737cb418">
                        <path
                          id="Vector_12"
                          d="M32.0052 32H181.995V194H32.0052V32Z"
                          fill="white"
                        />
                      </g>
                    </mask>
                    <g mask="url(#mask6_1_99)">
                      <g id="Group_7">
                        <g id="Clip path group_8">
                          <mask
                            id="mask7_1_99"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x={32}
                            y={32}
                            width={150}
                            height={162}
                          >
                            <g id="183a5cd628">
                              <path
                                id="Vector_13"
                                d="M38.0052 32H175.995C177.589 32 179.115 32.6302 180.24 33.7604C181.365 34.8906 181.995 36.4167 181.995 38.0156V187.979C181.995 189.578 181.365 191.109 180.24 192.234C179.115 193.365 177.589 194 175.995 194H38.0052C36.4114 194 34.8854 193.365 33.7604 192.234C32.6354 191.109 32.0052 189.578 32.0052 187.979V38.0156C32.0052 34.6927 34.6927 32 38.0052 32Z"
                                fill="white"
                              />
                            </g>
                          </mask>
                          <g mask="url(#mask7_1_99)">
                            <g id="Group_8">
                              <path
                                id="Vector_14"
                                d="M38.0052 32H175.995C177.589 32 179.115 32.6302 180.24 33.7604C181.365 34.8906 181.995 36.4167 181.995 38.0156V187.979C181.995 189.578 181.365 191.109 180.24 192.234C179.115 193.365 177.589 194 175.995 194H38.0052C36.4114 194 34.8854 193.365 33.7604 192.234C32.6354 191.109 32.0052 189.578 32.0052 187.979V38.0156C32.0052 34.6927 34.6927 32 38.0052 32Z"
                                stroke="#292936"
                                strokeWidth="4.00561"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_9">
                    <g id="Group_10">
                      <g id="Group_11">
                        <path
                          id="Vector_15"
                          d="M78.2969 143.998H55.6094V79.9982H78.4844C84.9271 79.9982 90.474 81.2794 95.1302 83.8315C99.7813 86.3732 103.359 90.0346 105.859 94.8107C108.359 99.5763 109.609 105.285 109.609 111.936C109.609 118.602 108.349 124.332 105.839 129.123C103.339 133.915 99.7448 137.597 95.0677 140.165C90.3854 142.722 84.7969 143.998 78.2969 143.998ZM69.151 132.394H77.7344C83.7604 132.394 88.3281 130.769 91.4427 127.519C94.5521 124.269 96.1094 119.076 96.1094 111.936C96.1094 104.826 94.5521 99.6596 91.4427 96.4357C88.3281 93.2013 83.776 91.5815 77.776 91.5815H69.151V132.394Z"
                          fill="#292936"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Group_12">
                    <g id="Group_13">
                      <g id="Group_14">
                        <path
                          id="Vector_16"
                          d="M119.598 143.998V79.9982H133.14V132.832H160.577V143.998H119.598Z"
                          fill="#292936"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
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
                  className="select-none text-white hover:shadow-md bg-[#292936] hover:bg-black focus:outline-none font-medium rounded-lg px-5 py-2.5 border border-transparent"
                >
                  Get started for free
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="mt-20 md:mt-40">
          <div className="text-3xl md:text-6xl font-extrabold text-center mb-5 mt-5 p-2 max-w-screen-lg m-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6b637b]">
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
              alt=""
              height={550}
              id="screenshot"
            />
          </div>
        </div>

        <div className="flex justify-center items-center m-3">
          <div className="max-w-screen-xl mt-40">
            <ol className="items-center flex">
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-[#292936] sm:ring-8 ring-[#292936] shrink-0 text-white text-xl">
                    1
                  </div>
                  <div className="hidden sm:flex w-full bg-[#828994] h-0.5" />
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-2xl font-semibold text-[#C9D1D9]">
                    Sign in
                  </h3>
                  <p className="font-normal">
                    Sign in with your favorite provider.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-[#292936] sm:ring-8 ring-[#292936] shrink-0 text-white text-xl">
                    2
                  </div>
                  <div className="hidden sm:flex w-full bg-[#828994] h-0.5" />
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-2xl font-semibold text-[#C9D1D9]">
                    Create folder
                  </h3>
                  <p className="font-normal">
                    Create a folder to later upload your audio files.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-[#292936] sm:ring-8 ring-[#292936] shrink-0 text-white text-xl">
                    3
                  </div>
                  <div className="hidden sm:flex w-full bg-[#828994] h-0.5" />
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-2xl font-semibold text-[#C9D1D9]">
                    Upload audio files
                  </h3>
                  <p className="font-normal">
                    Select your audio files with mp3 format.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-[#292936] sm:ring-8 ring-[#292936] shrink-0 text-white text-xl">
                    4
                  </div>
                  <div className="hidden sm:flex w-full bg-[#828994] h-0.5" />
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-2xl font-semibold text-[#C9D1D9]">
                    Processing text
                  </h3>
                  <p className="font-normal">
                    Processing audio on the server to get the text.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <ShareFriends />

        <div className="h-[50vh]">
          <div >
          <div className="flex justify-center items-center">
            <p className="text-3xl md:text-4xl font-bold mb-5 mt-5 text-[#C9D1D9]">
              Why DenoLyrics
            </p>
          </div>
          <div className="flex justify-center items-center m-3 mt-20">
            <div className="max-w-screen-xl">
              <div className="grid grid-cols-3 gap-3">
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
                  <p className="text-xl mt-5">
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
                  <p className="text-xl mt-5">
                    Access AI models built on the latest breakthroughs in
                    Transformers and large-scale training on enormous amounts of
                    data for transcribing speech.
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
                  <p className="text-xl mt-5">
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
