import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gear",
  description: "Gear I'm using",
}

type Gear = {
  name: string
  link: string
}

type GearCategory = {
  id: string
  name: string
  items: Gear[]
}

type GearList = {
  [key: string]: GearCategory
}

const gear: GearList = {
  computer: {
    id: "computer-office",
    name: "Computer / Office",
    items: [
      {
        name: '14" Macbook Pro M2 Max',
        link: "https://support.apple.com/kb/SP889?locale=en_US",
      },
      {
        name: "2x Dell UltraSharp 27 4K Thunderbolt Hub Monitor - U2725QE",
        link: "https://www.dell.com/en-us/shop/monitors/apd/dell-ultrasharp-27-4k-thunderbolt-hub-monitor-u2725qe/u2725qe_monitor/-",
      },
      {
        name: "Logitech G604",
        link: "https://www.rtings.com/mouse/reviews/logitech/g604-lightspeed",
      },
      {
        name: "Keychron V1 Ultra 8K",
        link: "https://www.keychron.com/products/keychron-v1-ultra-8k-wireless-custom-mechanical-keyboard",
      },
    ],
  },
  coding: {
    id: "coding",
    name: "Coding Environment",
    items: [
      {
        name: "Editor: VSCode - Theme: Dark Modern",
        link: "https://code.visualstudio.com/",
      },
      {
        name: "Ghostty terminal",
        link: "https://ghostty.org/",
      },
      {
        name: "herdr",
        link: "https://herdr.dev",
      },
      {
        name: "hermes",
        link: "https://hermes-agent.nousresearch.com",
      },
      {
        name: "LazyVim",
        link: "https://www.lazyvim.org",
      },
    ],
  },
  software: {
    id: "software",
    name: "Favorite Software",
    items: [
      {
        name: "Vicinae",
        link: "https://www.vicinae.com",
      },
      {
        name: "Karabiner",
        link: "https://karabiner-elements.pqrs.org/",
      },
      {
        name: "Obsidian",
        link: "https://obsidian.md/",
      },
      {
        name: "Kanata",
        link: "https://github.com/plasmadice/kanata",
      },
    ],
  },
  other: {
    id: "other",
    name: "Other Stuff",
    items: [
      {
        name: "Logitech MX Keys Mini",
        link: "https://www.logitech.com/en-us/products/keyboards/mx-keys-mini.920-010388.html",
      },
      {
        name: "Logitech M720 Triathlon",
        link: "https://www.logitech.com/en-us/products/mice/m720-triathlon.910-004790.html",
      },
      {
        name: "16-inch 1440p 120hz portable monitor",
        link: "https://www.uperfectmonitor.com/products/120hz-gaming-monitor",
      },
      {
        name: "Duramont Ergonomic Office Chair",
        link: "https://duramontchairs.com/products/duramont-ergonomic-office-chair",
      },
      {
        name: "Keychron Q5",
        link: "https://www.keychron.com/products/keychron-q5-qmk-custom-mechanical-keyboard",
      },
      {
        name: "AirPods Pro 3",
        link: "https://www.apple.com/airpods-pro/",
      },
    ],
  },
}

const Category = ({ id, name, items }: GearCategory) => (
  <div className="card rounded-lg bg-base-100 shadow-xl">
    <div className="card-body">
      <h3 id={id} className="card-title text-xl font-bold">{name}</h3>
      <ul className="list-disc list-inside">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              target="_blank"
              className="link link-hover hover:text-secondary transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default function UsesPage() {
  return (
    <section className="container mx-auto pb-8">
      <h1 className="font-bold text-3xl font-serif mb-12">Gear</h1>
      <div className="flex flex-col gap-8">
        {Object.values(gear).map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
    </section>
  )
}
