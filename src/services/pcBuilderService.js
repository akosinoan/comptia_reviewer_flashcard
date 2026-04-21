import { supabase } from "./supabaseClient";

export async function getPCBuilderScenarios(exam) {
  // NetPlus has no PC Builder data — fall back to core1 scenarios
  const dbExam = exam === "netplus" ? "core1" : exam;
  const { data, error } = await supabase
    .from("pc_builder_scenarios")
    .select("*")
    .eq("exam", dbExam)
    .order("id");
  if (error) throw error;
  // Map snake_case to camelCase; JSONB fields (requirements, categories) come back as-is
  return data.map((r) => ({
    id: r.id,
    title: r.title,
    badge: r.badge,
    badgeColor: r.badge_color,
    borderColor: r.border_color,
    requirements: r.requirements,
    categories: r.categories,
  }));
}
