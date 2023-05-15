# portfolio

####The portfolio template was created by [leerob.io](https://github.com/leerob/leerob.io.git)

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
