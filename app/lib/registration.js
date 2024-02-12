import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, password, confirmPassword } = req.body;

    // Check if all fields are filled
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
      // Save the data to the database
      await sql`
        INSERT INTO users (username, email, password)
        VALUES (${username}, ${email}, ${password})
      `;
      return res.status(200).json({ message: "User registered successfully!" });
    } catch (error) {
      console.error("Error registering user:", error);
      return res.status(500).json({ message: "Failed to register user" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
