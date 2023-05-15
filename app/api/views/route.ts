import { queryBuilder } from "lib/planetscale"
import { NextResponse, NextRequest } from "next/server"

export async function handler(req: NextRequest, res: NextResponse) {
  try {
    const data = await queryBuilder
      .selectFrom("views")
      .select(["slug", "count"])
      .execute()

    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json({ message: e.message })
  }
}

export { handler as GET, handler as POST }
