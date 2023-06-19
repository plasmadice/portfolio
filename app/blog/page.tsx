import { formatDistanceToNowStrict, parseISO, differenceInDays, differenceInYears, differenceInMonths } from "date-fns"
import type { Metadata } from "next"
import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import ViewCounter from "./view-counter"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
}

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => {
          const parsedDate = parseISO(String(post.publishedAt));
          const dateDiffInDays = differenceInDays(new Date(), parsedDate);
          const dateDiffInYears = differenceInYears(new Date(), parsedDate);
          const dateDiffInMonths = differenceInMonths(new Date(), parsedDate) % 12;
          
          let displayDate = "";
          
          if (dateDiffInDays < 1) {
            displayDate = "Less than 1 day ago";
          } else if (dateDiffInYears >= 1 && dateDiffInMonths >= 6) {
            displayDate = `Less than ${dateDiffInYears + 1} years ago`;
          } else {
            displayDate = `${formatDistanceToNowStrict(parsedDate)} ago`;
          }

          return (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p>{post.title}</p>
                <div className="w-full grid grid-cols-2">
                  <ViewCounter slug={post.slug} trackView={false} />
                  <p className="text-sm text-neutral-500 tracking-tighter">
                    {displayDate}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </section>
  )
}
