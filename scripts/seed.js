const { bd } = require("@vercel/postgres");
const { post, user } = require("../app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedPost(client) {
  try {
    // By using uuid-ossp in PostgreSQL, you can ensure that your database records have unique identifiers.
    //These identifiers are not only unique within your database but also globally, reducing the chances of conflicts,
    //especially when dealing with distributed systems or merging data from different sources.
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    //create post table if not exists
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS post (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            user_id UUID NOT NULL
            location VARCHAR(50) NOT NULL,
            description VARCHAR(800) NOT NULL,
            url VARCHAR(800) NOT NULL, 
        );
        `;

    console.log(`create post table `);

    //insert data into the "post" table
    const insertPost = await Promise.all(
      post.map(
        (post) => client.sql`
            INSERT INTO post (user_id, location, description, url)
            VALUES (${post.user_id},${post.location}, ${post.description},  ${post.url})
            ON CONFLICT (id) DO NOTHING;`
      )
    );

    return {
      createTable,
      post: insertPost,
    };
  } catch (error) {
    console.log("Error post");
  }
}
