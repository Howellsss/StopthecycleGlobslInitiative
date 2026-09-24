/*
# Create intake_submissions table

1. New Tables
- `intake_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `phone` (text, not null) — phone number
  - `organization` (text) — optional company/ministry name
  - `route` (text, not null) — intake desk: 'corporate_partnerships', 'technical_cohorts', 'speaking_media', or 'workforce'
  - `message` (text) — optional message body
  - `volunteer_unit` (text) — optional: 'creative_media', 'operations_protocol', 'training_assistants', 'campus_ambassador'
  - `created_at` (timestamptz, defaults to now())
2. Security
- Enable RLS on `intake_submissions`.
- Allow anon + authenticated INSERT only (public intake form, no public reads).
- No SELECT/UPDATE/DELETE policies — admin-only access via dashboard.
*/

CREATE TABLE IF NOT EXISTS intake_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  organization text,
  route text NOT NULL,
  message text,
  volunteer_unit text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE intake_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_intake" ON intake_submissions;
CREATE POLICY "anon_insert_intake"
ON intake_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
