import { Mug, Browser, Ghost, File, Backpack, Planet, Folder, type KawaiiProps } from 'react-kawaii';
import Link from 'next/link'; 

// Adds className to Character component
interface ExtendedKawaiiProps extends KawaiiProps {
  className?: string
}

export const revalidate = 0

export default function notFound() {
  // Randomly choose a Kawaii character
  const characters = [Mug, Browser, Ghost, File, Backpack, Planet, Folder]
  const Character: React.ComponentType<ExtendedKawaiiProps> = characters[Math.floor(Math.random() * characters.length)]

  // Random color function with minimum brightness from https://stackoverflow.com/a/17373688
  function randomColor(brightness) {
    function randomChannel(brightness) {
      var r = 255 - brightness
      var n = 0 | (Math.random() * r + brightness)
      var s = n.toString(16)
      return s.length == 1 ? "0" + s : s
    }
    return (
      "#" +
      randomChannel(brightness) +
      randomChannel(brightness) +
      randomChannel(brightness)
    )
  }

  return (
    <div className="mx-auto">
      <Character
        className="flex place-content-center"
        size={200}
        mood="ko"
        color={randomColor(100)}
      />
      <div className="mx-auto m-8 text-center prose">
        <h1>Whoa, where are we?</h1>{" "}
        <p>
          {`This page doesn't exist. Maybe you mistyped the URL, or maybe it's been moved or deleted. Either way, you can head back `}
          <Link href="/">home</Link>
          {` or check out my `}
          <Link href="/blog">blog</Link>.
        </p>
      </div>
    </div>
  )
}