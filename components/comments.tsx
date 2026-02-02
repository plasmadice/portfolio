'use client'

import { useEffect } from 'react'

interface CommentsProps {
  pageId: string
}

// Custom CSS variables to match hwhite.dev dark theme
// These are passed to Remark42 iframe via window.name
const customColors = {
  '--color-background': '#171717',
  '--color-font': '#e5e5e5',
  '--color-font-secondary': '#a3a3a3',
  '--color-border': '#404040',
  '--color-hover': '#262626',
  '--color-primary': '#47a3f3',
  '--color-link': '#47a3f3',
  '--color-success': '#22c55e',
  '--color-warning': '#eab308',
  '--color-danger': '#ef4444',
}

export function Comments({ pageId }: CommentsProps) {
  useEffect(() => {
    // Clean up any existing remark42 instance
    const existingDiv = document.getElementById('remark42')
    if (existingDiv) {
      existingDiv.innerHTML = ''
    }

    // Configure remark42 with custom colors
    ;(window as any).remark_config = {
      host: 'https://comments.haku.lol',
      site_id: 'hwhite.dev',
      components: ['embed'],
      url: typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '',
      theme: 'dark',
      __colors__: customColors,
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
