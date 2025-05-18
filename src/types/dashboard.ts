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