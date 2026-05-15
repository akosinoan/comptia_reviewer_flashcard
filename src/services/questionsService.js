import { sql } from "./neonClient";

export async function getQuestions(exam) {
  return await sql`SELECT * FROM questions WHERE exam = ${exam} ORDER BY id`;
}
