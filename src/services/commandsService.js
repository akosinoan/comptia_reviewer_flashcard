import { supabase } from "./supabaseClient";

export async function getCommands(exam) {
  const { data, error } = await supabase
    .from("commands")
    .select("*")
    .eq("exam", exam)
    .order("id");
  if (error) throw error;
  // JSONB windows/linux fields come back as plain objects — shape is unchanged
  return data;
}
