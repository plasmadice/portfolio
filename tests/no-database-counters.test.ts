import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import test from "node:test"

const root = join(import.meta.dirname, "..")

const removedPaths = [
  "app/api/views/route.ts",
  "app/api/views/[slug]/route.ts",
  "app/blog/view-counter.tsx",
  "lib/planetscale.ts",
]

const removedDependencies = [
  "@planetscale/database",
  "kysely",
  "kysely-planetscale",
  "swr",
]

test("portfolio ships without the retired database view counters", () => {
  for (const path of removedPaths) {
    assert.equal(existsSync(join(root, path)), false, `${path} should be removed`)
  }

  const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"))
  for (const dependency of removedDependencies) {
    assert.equal(
      packageJson.dependencies?.[dependency],
      undefined,
      `${dependency} should be removed`,
    )
  }

  const dockerfile = readFileSync(join(root, "Dockerfile"), "utf8")
  assert.doesNotMatch(dockerfile, /DATABASE_URL/)
})
