import { sql } from "./neonClient";

export async function getRaidScenarios() {
  const rows = await sql`SELECT * FROM raid_scenarios ORDER BY id`;
  return rows.map((r) => ({
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
    drives: r.drives,
  }));
}
