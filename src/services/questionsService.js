import { supabase } from "./supabaseClient";

export async function getQuestions(exam) {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("exam", exam)
    .order("id");
  if (error) throw error;
  return data;
}
