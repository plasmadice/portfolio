import "./global.css"
import clsx from "clsx"
import type { Metadata } from "next"
import localFont from "next/font/local"
import Sidebar from "../components/sidebar"
import { Analytics } from "@vercel/analytics/react"
import { name, descpription } from "lib/info"
import { BackgroundPattern } from "@/components/background-pattern"

const kaisei = localFont({
  src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
  title: {
    default: `${name} | Software Engineer`,
    template: `%s | ${name}`,
  },
  description: descpription,
  openGraph: {
    title: name,
    description: descpription,
    url: process.env.NEXT_PUBLIC_URL,
    siteName: name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/og.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Herman White",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    yandex: "c3dfbd83ce593063",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "bg-base-300 text-base-content",
        kaisei.variable
      )}
    >
      <body className="antialiased max-w-5xl justify-center mb-36 flex flex-col md:flex-row mt-8 md:mt-20 lg:mt-32 mx-8 md:mx-auto overflow-x-hidden overflow-y-auto">
        <div className="fixed inset-0 -z-10">
          <BackgroundPattern />
        </div>
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
