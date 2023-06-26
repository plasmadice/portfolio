import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import * as ReactKawaii from "react-kawaii"

const CustomLink = (props) => {
  const href = props.href

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function CustomImage({
  className,
  ...otherProps
}: React.ComponentProps<typeof Image>) {
  return (
    <Image
      className={
        className?.includes("rounded")
          ? className
          : `rounded-lg${className ? ` ${className}` : ""}`
      }
      {...otherProps}
    />
  )
}

interface ExtendedImageProps extends React.ComponentProps<typeof Image> {
  size?: string
}

function GIF({ className, size, ...otherProps }: ExtendedImageProps) {
  let dimensions: number

  // Prevents overwriting margin and corner rounding
  const margin =
    className && ["m-", "mx-", "my-"].includes(className)
      ? className
      : `mx-auto ${className}`
  const rounded = margin?.includes("rounded") ? margin : `rounded-lg ${margin}`

  switch (size) {
    case "xs":
      dimensions = 100
      break
    case "sm":
      dimensions = 200
      break
    case "lg":
      dimensions = 400
      break
    case "xl":
      dimensions = 500
      break
    case "xl2":
      dimensions = 1000
      break
    default:
      dimensions = 300 // md
  }

  return (
    <Image
      className={rounded}
      height={dimensions}
      width={dimensions}
      {...otherProps}
    />
  )
}

function Callout(props) {
  return (
    <div className="flex bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">
        {props.emoji ? props.emoji : "💡"}
      </div>
      <div className="w-full callout">{props.children}</div>
    </div>
  )
}

function ProsCard({ title, pros }) {
  return (
    <div className="border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConsCard({ title, cons }) {
  return (
    <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Centers caption under image. Image is centered by default.
function Caption(props) {
  return (
    <figure className={`${props.className ? ` ${props.className}` : "w-fit"}`}>
      {props.children}
      <figcaption className="blog-figcaption">{props.value}</figcaption>
    </figure>
  )
}

function Box(props) {
  // Prevents overwriting margin and width values
  const margin =
    props.className && ["m-", "mx-", "my-"].includes(props.className)
      ? props.className
      : `mx-auto ${props.className}`
  const width = margin && ["w-"].includes(margin) ? margin : `w-fit ${margin}`

  return <div className={width}>{props.children}</div>
}

function Flex(props) {
  return (
    <div
      className={`flex gap-8${props.className ? ` ${props.className}` : ""}`}
    >
      {props.children}
    </div>
  )
}

function Grid(props) {
  return (
    <div
      className={`grid gap-8${
        props?.className?.includes("grid-cols")
          ? ` ${props.className}`
          : " grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {props.children}
    </div>
  )
}

interface ExtendedKawaiiProps extends ReactKawaii.KawaiiProps {
  className?: string | undefined,
  character?: string | undefined,
  centered?: boolean | undefined,
}

function Kawaii({ character = "Cat", size, mood = "blissful", color, className = "", centered = false }: ExtendedKawaiiProps) {
  // Adds className to Character component

  // Centers character with 'mx-auto' class or centered prop
  className = className.includes("mx-auto") || centered ? `${className} flex place-content-center` : className
  const Character: React.ComponentType<ExtendedKawaiiProps> = ReactKawaii[character]

  return (
    <Character size={size} mood={mood} color={color} className={className} />
  )
}

const components = {
  Image: CustomImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  Caption,
  Flex,
  Grid,
  GIF,
  Box,
  Kawaii,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={{ ...components }} />
    </article>
  )
}
