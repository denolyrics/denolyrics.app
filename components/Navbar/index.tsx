"use client";
import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// CONTEXT

import NavbarContext from "../../context/NavbarContext";
import { NavbarContextType } from "../../context/NavbarContext/types";

function Navbar() {
  const pathname = usePathname();
  const { ShowItemsMobile, setShowItemsMobile } = useContext(
    NavbarContext
  ) as NavbarContextType;
  return (
    <>
      <nav className="block md:hidden m-3">
        <div className="grid grid-cols-2">
          <Link href="/" className="font-extrabold">
            DenoLyrics
          </Link>
          <div
            className="flex justify-end"
            onClick={() => setShowItemsMobile((valueState) => !valueState)}
          >
            {ShowItemsMobile ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </div>
        </div>
      </nav>

      {ShowItemsMobile && (
        <div className="z-30 px-3 py-3 mt-10 bg-white flex flex-col absolute top-0 right-0 bottom-0 left-0">
          <Link
            onClick={() => setShowItemsMobile((valueState) => !valueState)}
            href="/"
            className={`select-none px-5 py-2.5 font-bold border border-transparent ${
              pathname === "/" ? "text-black" : "text-[#6D7073]"
            }`}
          >
            Home
          </Link>
          <Link
            onClick={() => setShowItemsMobile((valueState) => !valueState)}
            href="/pricing"
            className={`select-none px-5 py-2.5 font-bold border border-transparent ${
              pathname === "/pricing" ? "text-black" : "text-[#6D7073]"
            }`}
          >
            Pricing
          </Link>
          <Link
            onClick={() => setShowItemsMobile((valueState) => !valueState)}
            href="/help"
            className={`select-none px-5 py-2.5 font-bold border border-transparent ${
              pathname === "/help" ? "text-black" : "text-[#6D7073]"
            }`}
          >
            Help
          </Link>

          <div className="flex justify-center items-center">
            <Link
              onClick={() => setShowItemsMobile((valueState) => !valueState)}
              href="https://app.denolyrics.com"
              className="select-none text-white hover:shadow-md bg-[#363141] hover:bg-black focus:outline-none font-medium rounded-lg px-5 py-2.5 border border-transparent"
            >
              Get started for free
            </Link>{" "}
          </div>
        </div>
      )}
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
            {paths.map((path) => {
              return (
                <div key={path.id} className="flex justify-center items-center">
                  <Link
                    href={path.path}
                    className={`select-none px-5 py-2.5 font-bold border border-transparent ${
                      pathname === path.path ? "text-black" : "text-[#6D7073]"
                    }`}
                  >
                    {path.name}
                  </Link>
                </div>
              );
            })}
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

const paths = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: "3",
    name: "Notion",
    path: "/integration-with-notion",
  },
];
