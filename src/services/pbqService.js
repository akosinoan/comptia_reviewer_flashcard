import { sql } from "./neonClient";

function rehydrate(row) {
  return {
    id: row.id,
    type: row.type,
    domain: row.domain,
    title: row.title,
    question: row.question,
    explanation: row.explanation,
    ...row.payload,
  };
}

export async function getPBQs(exam) {
  const rows = await sql`SELECT * FROM pbq_exercises WHERE exam = ${exam} ORDER BY id`;
  return rows.map(rehydrate);
}

export async function getOSIExercises() {
  return getPBQs("osi");
}
