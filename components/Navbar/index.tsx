"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <div className="hidden md:block">
        <div className="nav-list-float">
          {paths.map((path) => {
            return (
              <Link
                key={path.id}
                href={path.path}
                className={`select-none px-5 py-2.5 font-bold border border-transparent ${
                  pathname?.includes("releases") &&
                  path.path.includes("releases")
                    ? "text-white"
                    : pathname === path.path
                    ? "text-white"
                    : ""
                }`}
              >
                {path.name}
              </Link>
            );
          })}
        </div>
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
    name: "What’s New",
    path: "/releases",
  },
];
