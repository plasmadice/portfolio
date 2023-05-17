import { queryBuilder } from "lib/planetscale"
import { NextResponse } from "next/server"

type Props = {
  params: {
    slug: string
  }
}

export async function handler(req: Request, { params }: Props) {
  const slug = params.slug

  const main = async () => {
    if (!slug) {
      return NextResponse.json({ message: "Slug is required." })
    }
    const data = await queryBuilder
      .selectFrom("views")
      .where("slug", "=", slug)
      .select(["count"])
      .execute()

    const views = !data.length ? 0 : Number(data[0].count)

    if (req.method === "POST" && process.env.NODE_ENV === "production") {
      await queryBuilder
        .insertInto("views")
        .values({ slug, count: 1 })
        .onDuplicateKeyUpdate({ count: views + 1 })
        .execute()

      return NextResponse.json({
        total: views + 1,
      })
    }

    if (req.method === "GET") {
      return NextResponse.json({
        total: views,
      })
    }
  }

  return main().catch((e) => {
    return NextResponse.json({ message: e.message })
  })
}

export { handler as GET, handler as POST }
