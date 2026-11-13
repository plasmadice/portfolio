"use client"

import { useEffect } from "react"

export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data)

  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = json
    document.head.appendChild(script)

    return () => script.remove()
  }, [json])

  return null
}
