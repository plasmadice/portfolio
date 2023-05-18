import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Uses",
  description: "Here's the tech I'm currently using for coding.",
}

export default function UsesPage() {
  return (
    <section className="prose dark:prose-invert text-neutral-800 dark:text-neutral-200">
      <h1 className="text-inherit font-bold text-3xl font-serif mb-8">
        Tech I'm Using
      </h1>
      <p className="mt-2 mb-8 text-inherit">
        Here's the tech I'm currently using for coding
      </p>
      <div>
        <h3 id="computer-office" className="text-inherit">
          Computer / Office
        </h3>
        <ul>
          <li>14&quot; Macbook Pro M2 Max</li>
          <li>27&quot; LG UltraGear 27GL83A-B</li>
          <li>CalDigit TS3+</li>
          <li>Logitech G604</li>
          <li>Keychron Q5</li>
          <li>IKEA IDÅSEN</li>
          <li>Steelcase Gesture</li>
        </ul>
        <h3 id="coding" className="text-inherit">
          Coding
        </h3>
        <ul>
          <li>Editor: VSCode - Theme: Dark Modern</li>
          <li>Terminal: zsh</li>
        </ul>
        <h3 id="software" className="text-inherit">
          Software
        </h3>
        <ul>
          <li>Alfred</li>
          <li>Keyboard Maestro</li>
          <li>Karabiner</li>
          <li>AltTab</li>
          <li>Rectangle</li>
          {/* <li>Grammarly</li> */}
          {/* <li>Texts</li> */}
        </ul>
        <h3 id="other-tech" className="text-inherit">
          Other Tech
        </h3>
        <ul>
          {/* <li>Apple Airpods Pro</li>
          <li>Apple Watch</li>
          <li>Apple iPhone</li> */}
          <li>Lenovo Legion 7 w/ 2060</li>
          <li>Logitech MX Keys Mini</li>
          <li>Logitech Pro Wireless</li>
        </ul>
      </div>
    </section>
  )
}
