"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

// list of random H drawn with framer-motion
const logoList = [
  <motion.svg
    className="text-black dark:text-white h-[50px] md:h-[70px]"
    width="50"
    height="70"
    viewBox="0 0 50 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 0V70"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M40 0V70"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 35H40"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M7 0V70"
      stroke="currentColor"
      strokeWidth={5}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M43 0V70"
      stroke="currentColor"
      strokeWidth={5}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M7 32H43"
      stroke="currentColor"
      strokeWidth={5}
    />
  </motion.svg>,
  <motion.svg
    className="text-black dark:text-white h-[50px] md:h-[70px]"
    width="50"
    height="70"
    viewBox="0 0 50 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 0L15 10V60L10 70"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M40 0L35 10V60L40 70"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M15 35L25 25L35 35"
      stroke="currentColor"
      strokeWidth={10}
    />
  </motion.svg>,
  <motion.svg
    className="text-black dark:text-white h-[50px] md:h-[70px]"
    width="50"
    height="70"
    viewBox="0 0 50 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 0C15 20 15 50 10 70"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M40 0C35 20 35 50 40 70"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 35Q25 45 40 35"
      stroke="currentColor"
      strokeWidth={10}
    />
  </motion.svg>,
  <motion.svg
    className="text-black dark:text-white h-[50px] md:h-[70px]"
    width="50"
    height="70"
    viewBox="0 0 50 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 0V30C10 40 15 45 25 45"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M40 0V30C40 40 35 45 25 45"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 70V50C10 40 15 35 25 35"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M40 70V50C40 40 35 35 25 35"
      stroke="currentColor"
      strokeWidth={10}
    />
  </motion.svg>,
  <motion.svg
    className="text-black dark:text-white h-[50px] md:h-[70px]"
    width="50"
    height="70"
    viewBox="0 0 50 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 0V35C10 40 20 40 25 35"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M40 0V35C40 40 30 40 25 35"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 70V45C10 40 20 40 25 45"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M40 70V45C40 40 30 40 25 45"
      stroke="currentColor"
      strokeWidth={10}
    />
  </motion.svg>,
  <motion.svg
    className="text-black dark:text-white h-[50px] md:h-[70px]"
    width="50"
    height="70"
    viewBox="0 0 50 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 0V70"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M40 0V70"
      stroke="currentColor"
      strokeWidth={10}
    />
    <motion.path
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      d="M10 35Q25 45 40 35"
      stroke="currentColor"
      strokeWidth={10}
    />
  </motion.svg>,
]

export function Logo() {
  // choose random item from list
  const [randomItem, setRandomItem] = useState(0)
  useEffect(() => {
    setRandomItem(Math.floor(Math.random() * logoList.length))
  }, [])

  return (
    <Link aria-label="Herman White" href="/">
      {logoList[randomItem]}
    </Link>
  )
}
