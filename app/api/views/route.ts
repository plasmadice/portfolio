import { queryBuilder } from "lib/planetscale"
import { NextResponse, NextRequest } from "next/server"

export async function handler(req: NextRequest, res: NextResponse) {
  const main = async () => {
    const data = await queryBuilder
      .selectFrom("views")
      .select(["slug", "count"])
      .execute()

    return NextResponse.json(data)
  }

  return main().catch((e) => {
    NextResponse.json({ message: e.message })
  })
}

export { handler as GET, handler as POST }
