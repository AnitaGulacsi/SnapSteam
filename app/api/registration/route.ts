import { RedirectType, redirect, useRouter } from "next/navigation";

const { db } = require("@vercel/postgres");

export async function POST(request: Request) {
  const data = await request.json();

  const { username, email, password, confirm } = data;

  const client = await db.connect();

  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  const res = await client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (uuid_generate_v4(), ${username}, ${email}, ${password})
    `;

  await client.end();

  return Response.json(res);
}
