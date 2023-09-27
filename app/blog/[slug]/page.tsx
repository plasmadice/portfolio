import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Mdx } from "components/mdx"
import { allBlogs } from "contentlayer/generated"
import Balancer from "react-wrap-balancer"
import ViewCounter from "../view-counter"
import Link from "next/link"

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post
  const ogImage = image
    ? `${process.env.NEXT_PUBLIC_URL}${image}`
    : `${process.env.NEXT_PUBLIC_URL}/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  }
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug)
  const jsonLd = post?.structuredData

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-primary text-primary-content rounded-md px-2 py-1 tracking-tighter">
          {post.publishedAt}
        </div>
        <div className="h-[0.2em] bg-secondary mx-2" />
        <ViewCounter slug={post.slug} trackView />
        {process.env.NODE_ENV === "development" && (
          <Link 
            prefetch={false}
            href={`${process.env.NEXT_PUBLIC_URL}/api/og?title=${post.title}`}
            target="_blank"
            className="btn btn-secondary absolute top-24 right-24">
              OG Image
          </Link>
        )}
      </div>
      <Mdx code={post.body.code} />
    </section>
  )
}
