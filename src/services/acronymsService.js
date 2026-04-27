import { supabase } from "./supabaseClient";

export async function getAcronyms(exam) {
  const { data, error } = await supabase
    .from("acronyms")
    .select("*")
    .eq("exam", exam)
    .order("id");
  if (error) throw error;
  return data;
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
  const [acronymsRes, trapsRes, rulesRes] = await Promise.all([
    supabase.from("acronyms").select("*").eq("exam", exam).order("id"),
    supabase.from("acronym_traps").select("*").eq("exam", exam).order("sort_order"),
    supabase.from("acronym_rules").select("*").eq("exam", exam).order("sort_order"),
  ]);
  if (acronymsRes.error) throw acronymsRes.error;
  if (trapsRes.error) throw trapsRes.error;
  if (rulesRes.error) throw rulesRes.error;

  return [
    ...acronymsRes.data.map(toAcronym),
    ...trapsRes.data.map(toTrap),
    ...rulesRes.data.map(toRule),
  ];
}
