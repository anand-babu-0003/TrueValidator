export interface FileHistory {
  id: string;
  user_id: string;
  filename: string;
  processed_at: string;
  status: 'completed' | 'processing' | 'failed';
  total_emails: number;
  valid_emails: number;
  invalid_emails: number;
}

export interface Profile {
  id: string;
  full_name: string;
  avatar_url: string | null;
  updated_at: string;
}

export interface EmailTemplate {
  id: string;
  user_id: string;
  name: string;
  subject: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface ApiKey {
  id: string;
  user_id: string;
  name: string;
  key: string;
  created_at: string;
  last_used: string | null;
  status: 'active' | 'revoked';
}

export interface TeamMember {
  id: string;
  user_id: string;
  email: string;
  role: 'admin' | 'member';
  joined_at: string;
}

export interface ValidationStats {
  date: string;
  total_validations: number;
  valid_emails: number;
  invalid_emails: number;
}