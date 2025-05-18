import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import type { FileHistory } from '../types/dashboard';

interface DashboardState {
  fileHistory: FileHistory[];
  loading: boolean;
  error: string | null;
  fetchFileHistory: (userId: string) => Promise<void>;
  addFileHistory: (fileHistory: Omit<FileHistory, 'id' | 'processed_at'>) => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  fileHistory: [],
  loading: false,
  error: null,
  fetchFileHistory: async (userId: string) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('file_history')
        .select('*')
        .eq('user_id', userId)
        .order('processed_at', { ascending: false });

      if (error) throw error;
      set({ fileHistory: data || [] });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch file history' });
    } finally {
      set({ loading: false });
    }
  },
  addFileHistory: async (fileHistory) => {
    try {
      const { error } = await supabase
        .from('file_history')
        .insert([fileHistory]);

      if (error) throw error;

      // Refresh the file history
      const { data } = await supabase
        .from('file_history')
        .select('*')
        .eq('user_id', fileHistory.user_id)
        .order('processed_at', { ascending: false });

      set({ fileHistory: data || [] });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to add file history' });
    }
  },
}));