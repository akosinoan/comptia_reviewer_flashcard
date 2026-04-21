import { supabase } from "./supabaseClient";

export async function getRaidScenarios() {
  const { data, error } = await supabase
    .from("raid_scenarios")
    .select("*")
    .order("id");
  if (error) throw error;
  // Map snake_case DB columns to camelCase used by RAIDPage components
  return data.map((r) => ({
    id: r.id,
    title: r.title,
    requirement: r.requirement,
    requiredCapacity: r.required_capacity,
    requiredInterface: r.required_interface,
    correctRaid: r.correct_raid,
    storageEfficiency: r.storage_efficiency,
    totalUsable: r.total_usable,
    faultTolerance: r.fault_tolerance,
    explanation: r.explanation,
    drives: r.drives, // JSONB array — already the right shape
  }));
}
