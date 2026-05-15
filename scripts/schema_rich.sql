-- Migration: rich acronym fields + sibling tables for confusion traps and
-- decision rules. Run once on Neon (or any vanilla Postgres) before
-- executing scripts/seed.mjs. The read-only `web_anon` role inherits SELECT
-- on these tables via the default-privileges grant set up at role creation,
-- so no per-table RLS is needed.
--
-- Idempotent: safe to re-run.

-- 1. Extend acronyms with rich-text columns -----------------------------------
ALTER TABLE acronyms
  ADD COLUMN IF NOT EXISTS what_it_does    TEXT,
  ADD COLUMN IF NOT EXISTS why_invented    TEXT,
  ADD COLUMN IF NOT EXISTS problem_solved  TEXT,
  ADD COLUMN IF NOT EXISTS analogy         TEXT,
  ADD COLUMN IF NOT EXISTS exam_use_case   TEXT;

-- 2. Confusion-trap cards (Network+ today) -----------------------------------
CREATE TABLE IF NOT EXISTS acronym_traps (
  id           BIGSERIAL PRIMARY KEY,
  exam         TEXT NOT NULL,
  name         TEXT NOT NULL,
  category     TEXT NOT NULL,
  subcategory  TEXT NOT NULL,
  exam_trap    TEXT NOT NULL,
  compare      JSONB NOT NULL,
  sort_order   INT NOT NULL DEFAULT 0,
  CONSTRAINT acronym_traps_exam_name_key UNIQUE (exam, name)
);

-- 3. Decision-rule cheat-sheet entries ---------------------------------------
CREATE TABLE IF NOT EXISTS acronym_rules (
  id           BIGSERIAL PRIMARY KEY,
  exam         TEXT NOT NULL,
  category     TEXT NOT NULL,
  subcategory  TEXT NOT NULL,
  trigger      TEXT NOT NULL,
  answer       TEXT NOT NULL,
  sort_order   INT NOT NULL DEFAULT 0,
  CONSTRAINT acronym_rules_exam_subcat_trigger_key UNIQUE (exam, subcategory, trigger)
);
