'use client'

import { useEffect } from 'react'

interface CommentsProps {
  pageId: string
}

export function Comments({ pageId }: CommentsProps) {
  useEffect(() => {
    // Clean up any existing remark42 instance
    const existingDiv = document.getElementById('remark42')
    if (existingDiv) {
      existingDiv.innerHTML = ''
    }

    // Configure remark42
    ;(window as any).remark_config = {
      host: 'https://comments.haku.lol',
      site_id: 'hwhite.dev',
      components: ['embed'],
      url: typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '',
      theme: 'dark',
    }

    // Load the script
    const script = document.createElement('script')
    script.src = 'https://comments.haku.lol/web/embed.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[src*="comments.haku.lol"]')
      scripts.forEach(s => s.remove())
    }
  }, [pageId])

  return (
    <div className="mt-16 pt-8 border-t border-neutral-700">
      <h2 className="font-bold text-2xl mb-8">Comments</h2>
      <div id="remark42" />
    </div>
  )
}
