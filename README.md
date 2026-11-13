# portfolio

### Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: Vercel (production) and Coolify (local staging)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

```bash
git clone https://github.com/plasmadice/portfolio.git
cd portfolio
npm install
npm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/leerob/leerob.io/blob/main/.env.example).

## Cloning / Forking

Best to first reach out to the [original](https://github.com/leerob/leerob.io.git) to see if there have been significant updates.

## Vercel Setup

In order for the environment variable `NEXT_PUBLIC_URL` to operate correctly you need to [set two extra scoped .env variables in Vercel](https://github.com/vercel/next.js/discussions/16429#discussioncomment-1302156).

Locally - Set in `.env.local`
Preview - `NEXT_PUBLIC_URL=https://$NEXT_PUBLIC_VERCEL_URL`
Production - `NEXT_PUBLIC_URL=https://www.yourdomain.com` Be sure to specify `www` if vercel automatically redirects there!

`NEXT_PUBLIC_URL` must be set at build time because site metadata requires an absolute origin. For a local production build, run `NEXT_PUBLIC_URL=http://localhost:3000 npm run build`; on Vercel, configure it as above. A `.env.production` file is only needed when the build environment does not already provide this variable.
