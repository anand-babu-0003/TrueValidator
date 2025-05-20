/*
  # Create tables and policies for email validation system
  
  1. New Tables
    - profiles (if not exists)
    - email_templates
    - api_keys
    - team_members
    - validation_stats
    
  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for each table
*/

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text,
  avatar_url text,
  updated_at timestamptz DEFAULT now()
);

-- Email Templates
CREATE TABLE IF NOT EXISTS email_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  subject text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- API Keys
CREATE TABLE IF NOT EXISTS api_keys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  key text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_used timestamptz,
  status text NOT NULL DEFAULT 'active'
);

-- Team Members
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  email text NOT NULL,
  role text NOT NULL DEFAULT 'member',
  joined_at timestamptz DEFAULT now()
);

-- Validation Statistics
CREATE TABLE IF NOT EXISTS validation_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  date date NOT NULL,
  total_validations integer DEFAULT 0,
  valid_emails integer DEFAULT 0,
  invalid_emails integer DEFAULT 0,
  UNIQUE(user_id, date)
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_stats ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can view own profile'
  ) THEN
    CREATE POLICY "Users can view own profile"
      ON profiles
      FOR SELECT
      TO authenticated
      USING (auth.uid() = id);
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can update own profile'
  ) THEN
    CREATE POLICY "Users can update own profile"
      ON profiles
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = id);
  END IF;
END $$;

-- Email Templates Policies
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'email_templates' AND policyname = 'Users can manage own templates'
  ) THEN
    CREATE POLICY "Users can manage own templates"
      ON email_templates
      FOR ALL
      TO authenticated
      USING (auth.uid() = user_id)
      WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

-- API Keys Policies
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'api_keys' AND policyname = 'Users can manage own API keys'
  ) THEN
    CREATE POLICY "Users can manage own API keys"
      ON api_keys
      FOR ALL
      TO authenticated
      USING (auth.uid() = user_id)
      WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

-- Team Members Policies
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'team_members' AND policyname = 'Admins can manage team'
  ) THEN
    CREATE POLICY "Admins can manage team"
      ON team_members
      FOR ALL
      TO authenticated
      USING (
        auth.uid() IN (
          SELECT user_id FROM team_members WHERE role = 'admin'
        )
      )
      WITH CHECK (
        auth.uid() IN (
          SELECT user_id FROM team_members WHERE role = 'admin'
        )
      );
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'team_members' AND policyname = 'Team members can view team'
  ) THEN
    CREATE POLICY "Team members can view team"
      ON team_members
      FOR SELECT
      TO authenticated
      USING (
        auth.uid() IN (
          SELECT user_id FROM team_members WHERE role = 'admin'
        )
      );
  END IF;
END $$;

-- Validation Stats Policies
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'validation_stats' AND policyname = 'Users can view own stats'
  ) THEN
    CREATE POLICY "Users can view own stats"
      ON validation_stats
      FOR SELECT
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'validation_stats' AND policyname = 'Users can update own stats'
  ) THEN
    CREATE POLICY "Users can update own stats"
      ON validation_stats
      FOR INSERT
      TO authenticated
      WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;