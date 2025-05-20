/*
  # Add tables for additional features

  1. New Tables
    - `email_templates`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `name` (text)
      - `subject` (text)
      - `content` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `api_keys`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `name` (text)
      - `key` (text)
      - `created_at` (timestamp)
      - `last_used` (timestamp)
      - `status` (text)
    
    - `team_members`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `email` (text)
      - `role` (text)
      - `joined_at` (timestamp)
    
    - `validation_stats`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `date` (date)
      - `total_validations` (integer)
      - `valid_emails` (integer)
      - `invalid_emails` (integer)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create email_templates table
CREATE TABLE IF NOT EXISTS email_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE,
  name text NOT NULL,
  subject text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create api_keys table
CREATE TABLE IF NOT EXISTS api_keys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE,
  name text NOT NULL,
  key text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now(),
  last_used timestamptz,
  status text NOT NULL DEFAULT 'active'
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE,
  email text NOT NULL,
  role text NOT NULL DEFAULT 'member',
  joined_at timestamptz DEFAULT now()
);

-- Create validation_stats table
CREATE TABLE IF NOT EXISTS validation_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE,
  date date NOT NULL,
  total_validations integer DEFAULT 0,
  valid_emails integer DEFAULT 0,
  invalid_emails integer DEFAULT 0,
  UNIQUE (user_id, date)
);

-- Enable RLS
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_stats ENABLE ROW LEVEL SECURITY;

-- Create policies for email_templates
CREATE POLICY "Users can manage own templates"
  ON email_templates
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create policies for api_keys
CREATE POLICY "Users can manage own API keys"
  ON api_keys
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create policies for team_members
CREATE POLICY "Team members can view team"
  ON team_members
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT user_id FROM team_members WHERE role = 'admin'
  ));

CREATE POLICY "Admins can manage team"
  ON team_members
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (
    SELECT user_id FROM team_members WHERE role = 'admin'
  ))
  WITH CHECK (auth.uid() IN (
    SELECT user_id FROM team_members WHERE role = 'admin'
  ));

-- Create policies for validation_stats
CREATE POLICY "Users can view own stats"
  ON validation_stats
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own stats"
  ON validation_stats
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);