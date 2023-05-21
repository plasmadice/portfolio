"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { name } from "lib/info"

// list of random H drawn with framer-motion
const logoList = [
  <>
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
  </>,
  <>
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
  </>,
  <>
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
  </>,
  <>
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
  </>,
  <>
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
  </>,
]

export function Logo() {
  // choose random item from list
  const [item, setItem] = useState(0)
  const [items, setItems] = useState<any>([logoList[item]])

  useEffect(() => {
    const interval = setInterval(() => {
      setItem((prevItem) => {
        return (prevItem + 1) % logoList.length
      })
      setItems([])
    }, 5000) // changes every 10 seconds

    // clear interval on component unmount
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (!items.length) {
      setItems([logoList[item]])
    }
  }, [items])

  return (
    <Link
      className="md:min-h-[70px] min-w-[25px] min-h-[40px] md:min-w-[50px]"
      aria-label={name}
      href="/"
    >
      {items.map((item, index) => (
        <motion.svg
          key={index}
          id="logo"
          className="text-white dark:text-white w-[25px] md:w-auto h-[40px] md:h-[70px]"
          width="50"
          height="70"
          viewBox="0 0 50 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {item}
        </motion.svg>
      ))}
    </Link>
  )
}
