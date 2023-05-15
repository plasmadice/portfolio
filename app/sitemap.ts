import { allBlogs } from "contentlayer/generated"

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const routes = [
    "",
    "/about",
    "/blog",
    "/guestbook",
    "/portfolio",
    "/uses",
  ].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
