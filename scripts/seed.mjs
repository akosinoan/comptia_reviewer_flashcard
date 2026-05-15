/**
 * One-time seed script — run with an admin Postgres role (owner of the
 * `public` schema), not the read-only `web_anon` role used by the browser.
 * Reads DATABASE_URL_ADMIN from .env.local automatically.
 * Run from the project root:
 *
 *   node --env-file=.env.local scripts/seed.mjs
 *
 * Safe to re-run: uses INSERT ... ON CONFLICT ... DO UPDATE SET so existing
 * rows are updated.
 *
 * Note: Most data files imported below don't currently exist locally — the
 * authoritative source of truth is the Neon database itself, populated via
 * `pg_dump` from Supabase. Restore those data files before this script will
 * run end-to-end.
 */

import pg from "pg";

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
const { DATABASE_URL_ADMIN } = process.env;
if (!DATABASE_URL_ADMIN) {
  console.error("DATABASE_URL_ADMIN env var is required");
  process.exit(1);
}

const client = new pg.Client({ connectionString: DATABASE_URL_ADMIN });
await client.connect();

// ── Helpers ───────────────────────────────────────────────────────────────────
async function upsert(table, rows, conflictCols /* "exam,id" or "id" */) {
  console.log(`  → ${table}: ${rows.length} rows`);
  const bad = rows.findIndex((r) => r == null);
  if (bad !== -1) throw new Error(`${table}: null/undefined element at index ${bad}`);
  if (rows.length === 0) throw new Error(`${table}: rows array is empty`);

  const cols = Object.keys(rows[0]);
  const confl = conflictCols.split(",");
  const updates = cols.filter((c) => !confl.includes(c));

  const placeholders = rows
    .map((_, i) => `(${cols.map((_, j) => `$${i * cols.length + j + 1}`).join(",")})`)
    .join(",");
  const setClause = updates.map((c) => `"${c}" = EXCLUDED."${c}"`).join(",");
  const values = rows.flatMap((r) => cols.map((c) => {
    const v = r[c];
    // pg auto-serializes JS objects to JSONB, but only if the value is a
    // plain object/array. Stringify pre-emptively for consistency.
    return v !== null && typeof v === "object" ? JSON.stringify(v) : v;
  }));

  const text = `
    INSERT INTO "${table}" (${cols.map((c) => `"${c}"`).join(",")})
    VALUES ${placeholders}
    ON CONFLICT (${confl.map((c) => `"${c}"`).join(",")}) DO UPDATE SET ${setClause}
  `;
  await client.query(text, values);
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
  ].filter(Boolean);
  await upsert("questions", rows, "exam,id");
}

async function seedAcronyms() {
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
  ].map(({ fullName: _fn, ...rest }) => rest);
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
    await client.end();
    process.exit(1);
  }
}

console.log("Seeding Neon…\n");
await run("seedQuestions",  seedQuestions);
await run("seedAcronyms",   seedAcronyms);
await run("seedPorts",      seedPorts);
await run("seedCommands",   seedCommands);
await run("seedPBQs",       seedPBQs);
await run("seedRaid",       seedRaid);
await run("seedPCBuilder",  seedPCBuilder);
await client.end();
console.log("\nDone! All tables seeded successfully.");
