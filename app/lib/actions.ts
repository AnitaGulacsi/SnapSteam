import { revalidatePath } from "next/cache";
import { State } from "../utils/types";
import { sql } from "@vercel/postgres";

export async function createPost(prevState: State, formData: FormData) {
  // Get values from formData
  const user_id = formData.get("user_id");
  const location = formData.get("location");
  const description = formData.get("description");
  const url = formData.get("url");

  // Validate the presence of required fields
  if (!user_id || !location || !description || !url) {
    return {
      errors: {
        user_id: user_id ? undefined : "Please provide a user_id.",
        location: location ? undefined : "Please provide a location.",
        description: description ? undefined : "Please provide a description.",
        url: url ? undefined : "Please provide a URL.",
      },
      message: "Missing Fields. Failed to Create User.",
    };
  }

  // Prepare data for insertion into the database
  const userData = {
    user_id: user_id as string,
    location: location as string,
    description: description as string,
    url: url as string,
  };

  // Insert data into the database
  try {
    await sql`
      INSERT INTO users (user_id, location, description, url)
      VALUES (${userData.user_id}, ${userData.location}, ${userData.description}, ${userData.url})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create User.",
    };
  }
  revalidatePath("/dashboard/social-feed");
}
