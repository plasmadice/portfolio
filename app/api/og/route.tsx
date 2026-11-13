import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "nodejs"

const publicDirectory = path.join(process.cwd(), "public")
const font = readFile(
  path.join(publicDirectory, "fonts/kaisei-tokumin-bold.ttf")
).then((buffer) => new Uint8Array(buffer).buffer)

const background = readFile(path.join(publicDirectory, "og-bg.png")).then(
  (buffer) => `data:image/png;base64,${buffer.toString("base64")}`
)

export async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get("title")
  const [fontData, backgroundImage] = await Promise.all([font, background])

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 130,
            fontFamily: "Kaisei Tokumin",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Kaisei Tokumin",
          data: fontData,
          style: "normal",
        },
      ],
    }
  )
}

export { handler as POST, handler as GET }
