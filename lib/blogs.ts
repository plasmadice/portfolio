import { readdirSync, readFileSync } from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export type BlogPost = {
  slug: string
  title: string
  publishedAt: string
  summary: string
  image?: string
  source: string
  structuredData: {
    "@context": string
    "@type": string
    headline: string
    datePublished: string
    dateModified: string
    description: string
    image: string
    url: string
    author: {
      "@type": string
      name: string
    }
  }
}

const contentDirectory = path.join(process.cwd(), "content")
const siteUrl = process.env.NEXT_PUBLIC_URL

function findMdxFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      return findMdxFiles(filePath)
    }

    return entry.isFile() && entry.name.endsWith(".mdx") ? [filePath] : []
  })
}

function requiredString(
  data: Record<string, unknown>,
  key: "title" | "publishedAt" | "summary",
  slug: string,
): string {
  const value = data[key]
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Missing or invalid "${key}" in content/${slug}.mdx`)
  }
  return value
}

function loadBlog(filePath: string): BlogPost {
  const slug = path
    .relative(contentDirectory, filePath)
    .replace(/\.mdx$/, "")
    .split(path.sep)
    .join("/")
  const { data, content } = matter(readFileSync(filePath, "utf8"))
  const title = requiredString(data, "title", slug)
  const publishedAt = requiredString(data, "publishedAt", slug)
  const summary = requiredString(data, "summary", slug)
  const image = typeof data.image === "string" ? data.image : undefined

  return {
    slug,
    title,
    publishedAt,
    summary,
    image,
    source: content,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      datePublished: publishedAt,
      dateModified: publishedAt,
      description: summary,
      image: image
        ? `${siteUrl}${image}`
        : `${siteUrl}/api/og?title=${title}`,
      url: `${siteUrl}/blog/${slug}`,
      author: {
        "@type": "Person",
        name: "Herman White",
      },
    },
  }
}

export const allBlogs = findMdxFiles(contentDirectory).map(loadBlog)
