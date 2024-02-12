import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    // Validate input data, e.g., check if username and email are not empty

    try {
      await sql`
        INSERT INTO users (username, email, password)
        VALUES (${username}, ${email}, ${password})
      `;
      res.status(200).json({ message: "User registered successfully!" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Failed to register user" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
