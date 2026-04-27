-- Migration: rich acronym fields + sibling tables for confusion traps and
-- decision rules. Run this once in Supabase Studio (SQL editor) before
-- executing scripts/migrateRich.mjs.
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

-- Read access for the publishable (anon) role -------------------------------
ALTER TABLE acronym_traps ENABLE ROW LEVEL SECURITY;
ALTER TABLE acronym_rules ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'acronym_traps' AND policyname = 'public_read'
  ) THEN
    CREATE POLICY public_read ON acronym_traps FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'acronym_rules' AND policyname = 'public_read'
  ) THEN
    CREATE POLICY public_read ON acronym_rules FOR SELECT USING (true);
  END IF;
END $$;
