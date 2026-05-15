import { sql } from "./neonClient";
import { ACRONYMS_SECPLUS } from "@/data/acronymsSecPlus.js";

export async function getAcronyms(exam) {
  return await sql`SELECT * FROM acronyms WHERE exam = ${exam} ORDER BY id`;
}

const toAcronym = (row) => ({
  id:            row.id,
  exam:          row.exam,
  acronym:       row.acronym,
  definition:    row.definition,
  category:      row.category,
  subcategory:   row.subcategory,
  whatItDoes:    row.what_it_does ?? undefined,
  whyInvented:   row.why_invented ?? undefined,
  problemSolved: row.problem_solved ?? undefined,
  analogy:       row.analogy ?? undefined,
  examUseCase:   row.exam_use_case ?? undefined,
});

const toTrap = (row) => ({
  acronym:     row.name,
  definition:  row.subcategory,
  category:    row.category,
  subcategory: row.subcategory,
  kind:        "trap",
  compare:     row.compare,
  examTrap:    row.exam_trap,
});

const toRule = (row) => ({
  acronym:     row.trigger,
  definition:  row.answer,
  category:    row.category,
  subcategory: row.subcategory,
  kind:        "rule",
  trigger:     row.trigger,
  answer:      row.answer,
});

export async function getAcronymsWithConcepts(exam) {
  if (exam === "secplus") return ACRONYMS_SECPLUS;

  const [acronyms, traps, rules] = await Promise.all([
    sql`SELECT * FROM acronyms       WHERE exam = ${exam} ORDER BY id`,
    sql`SELECT * FROM acronym_traps  WHERE exam = ${exam} ORDER BY sort_order`,
    sql`SELECT * FROM acronym_rules  WHERE exam = ${exam} ORDER BY sort_order`,
  ]);

  return [
    ...acronyms.map(toAcronym),
    ...traps.map(toTrap),
    ...rules.map(toRule),
  ];
}
