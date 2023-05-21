"use client"
import { useEffect } from "react"
import useSWR from "swr"

type PostView = {
  slug: string
  count: string
}

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}

export default function ViewCounter({
  slug,
  trackView,
}: {
  slug: string
  trackView: boolean
}) {
  const { data } = useSWR<PostView[]>("/api/views", fetcher)
  useEffect(() => {
    const registerView = () =>
      fetch(`${process.env.NEXT_PUBLIC_URL}/api/views/${slug}`, {
        method: "POST",
      })

    if (trackView) {
      registerView()
    }
  }, [slug])
  const viewsForSlug = data && data.find((view: PostView) => view.slug === slug)
  const viewCount = new Number(viewsForSlug?.count || 0)
  return (
    <p className="font-mono text-sm text-neutral-500 tracking-tighter">
      {data ? `${viewCount.toLocaleString()} views` : "​"}
    </p>
  )
}
