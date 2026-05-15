import { sql } from "./neonClient";

export async function getCommands(exam) {
  return await sql`SELECT * FROM commands WHERE exam = ${exam} ORDER BY id`;
}
