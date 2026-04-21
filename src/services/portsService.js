import { supabase } from "./supabaseClient";

export async function getPorts(exam) {
  const { data, error } = await supabase
    .from("ports")
    .select("*")
    .eq("exam", exam)
    .order("id");
  if (error) throw error;
  // Map full_name → fullName to match what components expect
  return data.map((r) => ({ ...r, fullName: r.full_name }));
}
