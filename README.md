# portfolio

### Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

```bash
git clone https://github.com/plasmadice/portfolio.git
cd portfolio
yarn install
yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/leerob/leerob.io/blob/main/.env.example).

## Connecting Database

1. Create a [Planetscale](https://planetscale.com/) and crete a database
2. Go to the console page for you database and enter this query:

```
CREATE TABLE views (
  slug VARCHAR(255) NOT NULL PRIMARY KEY,
  count INT NOT NULL
);
```

3. Grab the connect link and place it in .env file as `DATABASE_URL`

## Cloning / Forking

Best to first reach out to the [original](https://github.com/leerob/leerob.io.git) to see if there have been significant updates.

## Vercel Setup

In order for the environment variable `NEXT_PUBLIC_URL` to operate correctly you need to [set two extra scoped .env variables in Vercel](https://github.com/vercel/next.js/discussions/16429#discussioncomment-1302156).

Locally - Set in `.env.local`
Preview - `NEXT_PUBLIC_URL=https://$NEXT_PUBLIC_VERCEL_URL`
Production - `NEXT_PUBLIC_URL=https://www.yourdomain.com` Be sure to specify `www` if vercel automatically redirects there!

The .env.production file may not be needed. It contains `NEXT_PUBLIC_URL=https://$NEXT_PUBLIC_VERCEL_URL`. If you `yarn build` and `yarn start` this may be needed for some things to work locally, but this may not be the case.
