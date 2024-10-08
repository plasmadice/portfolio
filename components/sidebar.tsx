"use client"

import clsx from "clsx"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutGroup, motion } from "framer-motion"
import { Logo } from "./logo"

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/blog": {
    name: "blog",
  },
  "/portfolio": {
    name: "portfolio",
  },
  "/gear": {
    name: "gear",
  },
  "/activity": {
    name: "activity",
  },
}
export default function Navbar() {
  let pathname = usePathname() || "/"
  if (pathname.includes("/blog/")) {
    pathname = "/blog"
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-10">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade overflow-auto scroll-pr-6"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "transition-all hover:text-neutral-900 dark:hover:text-neutral-400 flex align-middle",
                      {
                        "text-primary-content hover:text-neutral-800 dark:hover:text-neutral-300": isActive,
                        "font-bold": isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-primary/70 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  )
}
