import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Uses",
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
    name: "Coding",
    items: [
      {
        name: "Editor: VSCode - Theme: Dark Modern",
        link: "https://code.visualstudio.com/",
      },
      {
        name: "Terminal: zsh",
        link: "https://ohmyz.sh/",
      },
    ],
  },
  software: {
    id: "software",
    name: "Software",
    items: [
      {
        name: "Alfred",
        link: "https://www.alfredapp.com/",
      },
      {
        name: "Keyboard Maestro",
        link: "https://www.keyboardmaestro.com/main/",
      },
      {
        name: "Karabiner",
        link: "https://karabiner-elements.pqrs.org/",
      },
      {
        name: "AltTab",
        link: "https://alt-tab-macos.netlify.app/",
      },
      {
        name: "Rectangle",
        link: "https://rectangleapp.com/",
      },
    ],
  },
  other: {
    id: "other",
    name: "Other",
    items: [
      {
        name: "Lenovo Legion 7 w/ 2060",
        link: "https://pcsupport.lenovo.com/us/en/products/laptops-and-netbooks/legion-series/legion-7-15imh05/81yt/81yt0000us",
      },
      {
        name: "Logitech MX Keys Mini",
        link: "https://www.logitech.com/en-us/products/keyboards/mx-keys-mini.920-010388.html",
      },
      {
        name: "Logitech Pro Wireless",
        link: "https://www.logitechg.com/en-us/products/gaming-mice/pro-wireless-mouse.html",
      },
    ],
  },
}

const Category = ({ id, name, items }: GearCategory) => (
  <>
    <h3 id={id}>{name}</h3>
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <Link href={item.link} target="_blank" className="no-underline">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export default function UsesPage() {
  return (
    <section className="prose prose-quoteless dark:prose-invert text-neutral-800">
      <h1 className="font-bold text-3xl font-serif mb-8">Gear</h1>
      {Object.values(gear).map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </section>
  )
}
