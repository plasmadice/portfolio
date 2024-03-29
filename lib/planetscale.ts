// import 'server-only' not working with API routes yet
import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface MetricsTable {
  project_id: string;
  views: number;
}

interface ViewsTable {
  slug: string;
  count: number;
}

interface Database {
  views: ViewsTable;
  metrics: MetricsTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
