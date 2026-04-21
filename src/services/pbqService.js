import { supabase } from "./supabaseClient";

function rehydrate(row) {
  // Spread JSONB payload to restore the flat shape components expect:
  // bucket → { buckets, items }  |  match → { left, right }  |  order → { items }
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
  const { data, error } = await supabase
    .from("pbq_exercises")
    .select("*")
    .eq("exam", exam)
    .order("id");
  if (error) throw error;
  return data.map(rehydrate);
}

export async function getOSIExercises() {
  return getPBQs("osi");
}
