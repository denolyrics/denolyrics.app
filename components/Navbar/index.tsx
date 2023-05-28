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
      <div className="nav-list-float">
        {paths.map((path) => {
          return (
            <Link
              key={path.id}
              href={path.path}
              className={`select-none px-5 py-2.5 font-bold border border-transparent ${
                pathname === path.path ? "text-white" : ""
              }`}
            >
              {path.name}
            </Link>
          );
        })}
      </div>
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
