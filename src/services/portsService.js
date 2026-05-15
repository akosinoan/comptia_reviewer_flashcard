import { sql } from "./neonClient";

export async function getPorts(exam) {
  const rows = await sql`SELECT * FROM ports WHERE exam = ${exam} ORDER BY id`;
  return rows.map((r) => ({ ...r, fullName: r.full_name }));
}
