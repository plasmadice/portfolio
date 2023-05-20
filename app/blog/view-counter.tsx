"use client"
import { useEffect, useState } from "react"
type PostView = {
  slug: string
  count: string
}

export default function ViewCounter({
  slug,
  trackView,
}: {
  slug: string
  trackView: boolean
}) {
  const [views, setViews] = useState<PostView[]>([])
  // Track views on page visit? Breaks pages with generic error from undici. Unable to generate pages
  // if (slug) {
  //   const registerView = () =>
  //     fetch(`${process.env.NEXT_PUBLIC_URL}/api/views/${slug}`, {
  //       method: "POST",
  //     })

  //   if (trackView) {
  //     registerView()
  //   }
  // }

  const getViews = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/views`)

    const data: PostView[] = await res.json()
    if (!views.length) {
      setViews(data)
    }
  }

  useEffect(() => {
    getViews()
  }, [])

  const data = views
  const viewsForSlug = data && data.find((view: PostView) => view.slug === slug)
  const viewCount = new Number(viewsForSlug?.count || 0)
  return (
    <p className="font-mono text-sm text-neutral-500 tracking-tighter">
      {data ? `${viewCount.toLocaleString()} views` : "​"}
    </p>
  )
}
