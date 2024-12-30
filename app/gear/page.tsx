import type { Metadata } from "next"
import { Backpack } from "react-kawaii"
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
        name: '27" LG UltraGear 27GL83A-B',
        link: "https://www.lg.com/us/monitors/lg-27gl83a-b-gaming-monitor",
      },
      {
        name: '27” Samsung ViewFinity S80A',
        link: "https://www.samsung.com/us/computing/monitors/uhd-and-wqhd/27--s804a-uhd-monitor-ls27a804nmnxgo/"
      },
      {
        name: "CalDigit TS3+",
        link: "https://www.caldigit.com/ts3-plus/",
      },
      {
        name: "Logitech G604",
        link: "https://www.rtings.com/mouse/reviews/logitech/g604-lightspeed",
      },
      {
        name: "Keychron Q5",
        link: "https://www.keychron.com/products/keychron-q5-qmk-custom-mechanical-keyboard",
      },
      {
        name: "HyperX QuadCast S",
        link: "https://hyperx.com/products/hyperx-quadcast-s-usb-microphone?variant=42438091866269",
      },
      {
        name: "IKEA IDÅSEN",
        link: "https://www.ikea.com/us/en/p/idasen-desk-brown-dark-gray-s49281027/#content",
      },
      {
        name: "Steelcase Gesture",
        link: "https://store.steelcase.com/gesture",
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
        link: "https://ghostty.org/"
      }
    ],
  },
  software: {
    id: "software",
    name: "Favorite Software",
    items: [
      {
        name: "Raycast",
        link: "https://www.raycast.com/",
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
        name: "Moom 3",
        link: "https://manytricks.com/moom/",
      },
      {
        name: "Capslock",
        link: "https://github.com/Plasmadice/Capslock",
      },
      {
        name: "Synergy",
        link: "https://symless.com/synergy"
      }
    ],
  },
  other: {
    id: "other",
    name: "Other Stuff",
    items: [
      {
        name: "ROG Ally X",
        link: "https://rog.asus.com/us/gaming-handhelds/rog-ally/rog-ally-x-2024/",
      },
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
        name: "AirPods Pro 2",
        link: "https://www.apple.com/airpods-pro/"
      }
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
      
      <div className="fixed bottom-16 right-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-30 blur-2xl animate-pulse" />
        <Backpack size={320} mood="excited" color="#64748b" />
      </div>
    </section>
  )
}
