"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="block md:hidden m-3">
        <div className="grid grid-cols-2">
          <Link href="/" className="font-extrabold">
            DenoLyrics
          </Link>
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
      <nav className="hidden md:block font-semibold backdrop-blur-sm bg-white/80 sticky top-0 z-50 p-2">
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
                href="/"
                className={`select-none px-5 py-2.5 font-bold border border-transparent ${
                  pathname === "/" ? "text-black" : "text-[#6D7073]"
                }`}
              >
                Home
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Link
                href="/pricing"
                className={`select-none px-5 py-2.5 font-bold border border-transparent ${
                  pathname === "/pricing" ? "text-black" : "text-[#6D7073]"
                }`}
              >
                Pricing
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Link
                href="/help"
                className="select-none px-5 py-2.5 border border-transparent"
              >
                Help
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <Link
                href="https://app.denolyrics.com"
                className="select-none text-white hover:shadow-md bg-[#363141] hover:bg-black focus:outline-none font-medium rounded-lg px-5 py-2.5 border border-transparent"
              >
                Get started for free
              </Link>{" "}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
