/**
 * One-time seed script — run with the SERVICE ROLE key (not the publishable key).
 * Reads SUPABASE_URL and SUPABASE_SERVICE_KEY from .env.local automatically.
 * Run from the project root:
 *
 *   node --env-file=.env.local scripts/seed.mjs
 *
 * Safe to re-run: uses upsert with onConflict so existing rows are updated.
 */

import { createClient } from "@supabase/supabase-js";

// ── Data imports (relative paths, no @ alias) ─────────────────────────────────
import { questions }         from "../src/data/questions.js";
import { questionsCore2 }   from "../src/data/questionsCore2.js";
import { questionsNetPlus } from "../src/data/questionsNetPlus.js";

import { ACRONYMS }          from "../src/data/acronymsCore1.js";
import { ACRONYMS_CORE2 }   from "../src/data/acronymsCore2.js";
import { ACRONYMS_NETPLUS } from "../src/data/acronymsNetPlus.js";

import { PORTS_CORE1 }   from "../src/data/portsCore1.js";
import { PORTS_CORE2 }   from "../src/data/portsCore2.js";
import { PORTS_NETPLUS } from "../src/data/portsNetPlus.js";

import { COMMANDS_CORE2 }   from "../src/data/commandsCore2.js";
import { COMMANDS_NETPLUS } from "../src/data/commandsNetPlus.js";

import { PBQs }         from "../src/data/pbqCore1.js";
import { PBQs_CORE2 }   from "../src/data/pbqCore2.js";
import { PBQs_NETPLUS } from "../src/data/pbqNetPlus.js";
import { OSI_EXERCISES } from "../src/data/osiNetPlus.js";

import { SCENARIOS as RAID_SCENARIOS } from "../src/data/raidCore1.js";
import { SCENARIOS as PC_CORE1 }       from "../src/data/pcBuilderCore1.js";
import { SCENARIOS_CORE2 as PC_CORE2 } from "../src/data/pcBuilderCore2.js";

// ── Client ────────────────────────────────────────────────────────────────────
const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("SUPABASE_URL and SUPABASE_SERVICE_KEY env vars are required");
  process.exit(1);
}

const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { persistSession: false },
});

// ── Helpers ───────────────────────────────────────────────────────────────────
async function upsert(table, rows, conflict) {
  console.log(`  → ${table}: ${rows.length} rows`);
  const bad = rows.findIndex((r) => r == null);
  if (bad !== -1) throw new Error(`${table}: null/undefined element at index ${bad}`);
  if (rows.length === 0) throw new Error(`${table}: rows array is empty`);
  const { error } = await sb.from(table).upsert(rows, { onConflict: conflict });
  if (error) throw new Error(`${table}: ${error.message}`);
  console.log(`  ✓ ${table}: done`);
}

function pbqPayload(pbq) {
  if (pbq.type === "bucket") return { buckets: pbq.buckets, items: pbq.items };
  if (pbq.type === "match")  return { left: pbq.left, right: pbq.right };
  if (pbq.type === "order")  return { items: pbq.items };
  throw new Error(`Unknown PBQ type: ${pbq.type}`);
}

// ── Seed functions ─────────────────────────────────────────────────────────────
async function seedQuestions() {
  const rows = [
    ...questions.map((q)        => ({ ...q, exam: "core1" })),
    ...questionsCore2.map((q)   => ({ ...q, exam: "core2" })),
    ...questionsNetPlus.map((q) => ({ ...q, exam: "netplus" })),
  ].filter(Boolean); // drop sparse holes / null entries in source data
  await upsert("questions", rows, "exam,id");
}

async function seedAcronyms() {
  // Use a synthetic id based on exam + index since acronyms have no natural id.
  const rows = [
    ...ACRONYMS.map((a, i)          => ({ ...a, id: i + 1,                   exam: "core1" })),
    ...ACRONYMS_CORE2.map((a, i)    => ({ ...a, id: ACRONYMS.length + i + 1, exam: "core2" })),
    ...ACRONYMS_NETPLUS.map((a, i)  => ({ ...a, id: ACRONYMS.length + ACRONYMS_CORE2.length + i + 1, exam: "netplus" })),
  ].filter(Boolean);
  await upsert("acronyms", rows, "id");
}

async function seedPorts() {
  const rows = [
    ...PORTS_CORE1.map((p)   => ({ ...p, full_name: p.fullName, exam: "core1" })),
    ...PORTS_CORE2.map((p)   => ({ ...p, full_name: p.fullName, exam: "core2" })),
    ...PORTS_NETPLUS.map((p) => ({ ...p, full_name: p.fullName, exam: "netplus" })),
  ].map(({ fullName: _fn, ...rest }) => rest); // drop camelCase duplicate
  await upsert("ports", rows, "exam,id");
}

async function seedCommands() {
  let id = 1;
  const rows = [
    ...COMMANDS_CORE2.map((c)   => ({ id: id++, ...c, exam: "core2" })),
    ...COMMANDS_NETPLUS.map((c) => ({ id: id++, ...c, exam: "netplus" })),
  ];
  await upsert("commands", rows, "id");
}

async function seedPBQs() {
  const toRow = (exam) => (pbq) => ({
    id:          String(pbq.id),
    exam,
    type:        pbq.type,
    domain:      pbq.domain,
    title:       pbq.title,
    question:    pbq.question,
    explanation: pbq.explanation,
    payload:     pbqPayload(pbq),
  });

  const rows = [
    ...PBQs.map(toRow("core1")),
    ...PBQs_CORE2.map(toRow("core2")),
    ...PBQs_NETPLUS.map(toRow("netplus")),
    ...OSI_EXERCISES.map(toRow("osi")),
  ];
  await upsert("pbq_exercises", rows, "exam,id");
}

async function seedRaid() {
  const rows = RAID_SCENARIOS.map((s) => ({
    id:                 s.id,
    title:              s.title,
    requirement:        s.requirement,
    required_capacity:  s.requiredCapacity,
    required_interface: s.requiredInterface,
    correct_raid:       s.correctRaid,
    storage_efficiency: s.storageEfficiency,
    total_usable:       s.totalUsable,
    fault_tolerance:    s.faultTolerance,
    explanation:        s.explanation,
    drives:             s.drives,
  }));
  await upsert("raid_scenarios", rows, "id");
}

async function seedPCBuilder() {
  const toRow = (exam) => (s) => ({
    id:           s.id,
    exam,
    title:        s.title,
    badge:        s.badge,
    badge_color:  s.badgeColor,
    border_color: s.borderColor,
    requirements: s.requirements,
    categories:   s.categories,
  });

  const rows = [
    ...PC_CORE1.map(toRow("core1")),
    ...PC_CORE2.map(toRow("core2")),
  ];
  await upsert("pc_builder_scenarios", rows, "exam,id");
}

// ── Main ───────────────────────────────────────────────────────────────────────
async function run(name, fn) {
  try {
    await fn();
  } catch (err) {
    console.error(`\nSeed failed in ${name}:\n`, err.stack ?? err);
    process.exit(1);
  }
}

console.log("Seeding Supabase…\n");
await run("seedQuestions",  seedQuestions);
await run("seedAcronyms",   seedAcronyms);
await run("seedPorts",      seedPorts);
await run("seedCommands",   seedCommands);
await run("seedPBQs",       seedPBQs);
await run("seedRaid",       seedRaid);
await run("seedPCBuilder",  seedPCBuilder);
console.log("\nDone! All tables seeded successfully.");
