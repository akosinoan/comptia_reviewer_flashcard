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
