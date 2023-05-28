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
                  className="select-none text-white hover:shadow-md bg-black focus:outline-none font-medium rounded-lg px-5 py-2.5 border border-transparent"
                >
                  Get started
                </Link>{" "}
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
              className="select-none text-white hover:shadow-md bg-black focus:outline-none font-medium rounded-lg inline-flex items-center px-5 py-2.5 mb-2 mt-2 border border-transparent"
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
        <div className="grid grid-cols-2 h-screen">
          <div className="grid h-screen place-content-center">
            <div className="text-3xl md:text-5xl font-extrabold text-center mb-5 mt-5 p-2 max-w-screen-lg m-auto text-[#E7E5E9]">
              <p>Share folders with your friends</p>
            </div>
            <div className="max-w-screen-md md:m-auto m-3">
              <p id="description" className="text-xl font-normal text-center">
                Simply write your {"friend's"} email, assign them permissions, and
                they will receive an invitation.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-[#363141] px-5 py-5 w-[40rem] rounded-md shawdow-modal">
              <div className="flex items-start justify-between">
                <h1 className="text-2xl font-bold">Share Podcasts</h1>
                <button
                  role="button"
                  type="button"
                  className="text-gray-400 bg-transparent hover:text-[#c4c1d0] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  data-modal-hide="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <p>Write the email of the person you want to share the file.</p>

              <br />
              <label htmlFor="name">
                Add people
                <input
                  className={`mt-2 appearance-none border border-gray-700 focus:border-red-300 bg-menu rounded-lg w-full py-3 px-3 text-white leading-tight focus:outline-none focus:shadow-outline`}
                  id="name"
                  placeholder="Eg. nelson@gmail.com"
                  name="name"
                  type="email"
                  autoComplete="off"
                />
              </label>

              <p className="mt-5 mb-5">People who have access</p>

              <div className="scroll-modal-shared">
                <div className="flex justify-between p-3 rounded-lg hover:bg-[#363141] mr-2">
                  <div className="inline-flex gap-2 items-center">
                    <div>
                      <Image
                        className="rounded-full"
                        width={40}
                        height={40}
                        src={"https://app.denolyrics.com/nelsoncode.jpg"}
                        alt={""}
                      />
                    </div>

                    <div className="w-28 md:w-60 truncate">
                      <p>Nelson Hernandez</p>
                      <p>nelsonher019@gmail.com</p>
                    </div>
                  </div>

                  <div>
                    <button
                      role="button"
                      type="button"
                      className="inline-flex gap-1 p-3"
                    >
                      Owner
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-5">
                <div>
                  <button
                    role="button"
                    id="submit-users-btn-modal"
                    type="submit"
                    className={`select-none text-black hover:shadow-md bg-[#74F9BE] hover:bg-black hover:text-white focus:outline-none font-medium rounded-lg inline-flex items-center px-5 py-2.5 mb-2 mt-2 border border-transparent`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 -ml-1 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Faq />
      </div>

      <TryForFree />
    </main>
  );
}
