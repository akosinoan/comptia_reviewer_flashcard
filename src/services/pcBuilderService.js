import { sql } from "./neonClient";

export async function getPCBuilderScenarios(exam) {
  const dbExam = exam === "netplus" ? "core1" : exam;
  const rows = await sql`SELECT * FROM pc_builder_scenarios WHERE exam = ${dbExam} ORDER BY id`;
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    badge: r.badge,
    badgeColor: r.badge_color,
    borderColor: r.border_color,
    requirements: r.requirements,
    categories: r.categories,
  }));
}
