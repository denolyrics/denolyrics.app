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
            <div className="inline-flex justify-center items-center">
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
              supports +300 languages, no matter if the audio speed is fast or
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

        <div className="flex justify-center items-center">
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
      </div>
      <div className="max-w-screen-2xl m-auto">
        <div className="grid grid-cols-2 h-[70vh]">
          <div className="grid h-screen place-content-center">
            <Image
              unoptimized={true}
              src={"/notion-screenshot.png"}
              width={750}
              alt="Notion integration with DenoLyrics"
              height={758}
              className="shawdow-modal"
            />
          </div>

          <div className="grid h-screen place-content-center">
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeWidth={1.5}
                className="ml-10 w-28 h-28 animate-bounce"
                viewBox="0 0 256 268"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M16.0924984,11.5384656 L164.089991,0.608048392 C182.268719,-0.952166138 186.940447,0.0998642306 198.370133,8.40912104 L245.613429,41.6907258 C253.405586,47.4144843 256,48.9746988 256,55.2066414 L256,237.73391 C256,249.172512 251.845372,255.939385 237.304172,256.973584 L65.4398551,267.377986 C54.5272689,267.895086 49.3295257,266.334872 43.6146827,259.050899 L8.82635648,213.813593 C2.58549836,205.486505 0,199.254562 0,191.970589 L0,29.7261093 C0,20.3737376 4.1546284,12.572665 16.0924984,11.5384656 Z"
                    fill={"#FFFFFF"}
                  ></path>
                  <path
                    d="M164.089991,0.608048392 L16.0924984,11.5384656 C4.1546284,12.572665 0,20.3737376 0,29.7261093 L0,191.970589 C0,199.254562 2.58549836,205.486505 8.82635648,213.813593 L43.6146827,259.050899 C49.3295257,266.334872 54.5272689,267.895086 65.4398551,267.377986 L237.304172,256.973584 C251.836456,255.939385 256,249.172512 256,237.73391 L256,55.2066414 C256,49.2956572 253.664136,47.5927945 246.790277,42.5466149 C246.394749,42.2616979 245.999494,41.9764014 245.604513,41.6907258 L198.370133,8.40912104 C186.940447,0.0998642306 182.268719,-0.952166138 164.089991,0.608048392 Z M69.3270182,52.219945 C55.2940029,53.1649893 52.1111653,53.3789615 44.1406979,46.8973846 L23.8757401,30.7781396 C21.8162569,28.6919099 22.8504562,26.0885805 28.039284,25.5714809 L170.313018,15.1759943 C182.259804,14.1328795 188.482831,18.2964234 193.154559,21.9339521 L217.556314,39.6134116 C218.599429,40.1394268 221.193843,43.2509404 218.073414,43.2509404 L71.1457825,52.0951279 L69.3270182,52.219945 Z M52.9670544,236.173696 L52.9670544,81.2221043 C52.9670544,74.455231 55.0443686,71.3348019 61.2673957,70.8087867 L230.020199,60.9303999 C235.743958,60.4133002 238.329456,64.0508289 238.329456,70.8087867 L238.329456,224.726179 C238.329456,231.493052 237.286341,237.216811 227.942885,237.73391 L66.4562234,247.095198 C57.1127673,247.612297 52.9670544,244.500784 52.9670544,236.173696 Z M212.376402,89.5313611 C213.410601,94.2120046 212.376402,98.8926482 207.695758,99.4275789 L199.912517,100.969962 L199.912517,215.373807 C193.154559,219.011336 186.931532,221.08865 181.733788,221.08865 C173.424532,221.08865 171.347217,218.485321 165.12419,210.693164 L114.225535,130.614039 L114.225535,208.089834 L130.326949,211.736279 C130.326949,211.736279 130.326949,221.097566 117.337048,221.097566 L81.523438,223.17488 C80.4803232,221.08865 81.523438,215.890907 85.1520513,214.856708 L94.5044229,212.262294 L94.5044229,109.823065 L81.523438,108.771035 C80.4803232,104.090391 83.0747371,97.3324337 90.3497945,96.8064185 L128.77565,94.2209202 L181.733788,175.334245 L181.733788,103.573292 L168.235704,102.021993 C167.192589,96.2893189 171.347217,92.1257749 176.536045,91.6175908 L212.376402,89.5313611 L212.376402,89.5313611 Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-right mb-5 mt-5 text-[#C9D1D9]">
              <p>Save text output on Notion</p>
            </div>
            <div className="max-w-screen-sm m-auto">
              <p id="description" className="text-xl font-normal text-right">
                Have you ever wished you could easily save the text of an audio
                so you can review it later? Well, now it's possible thanks to
                Notion!.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Faq />

      <TryForFree />
    </main>
  );
}
