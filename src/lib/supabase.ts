import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create Supabase client
// If env vars are missing, create client with placeholder values
// This allows the build to succeed even without credentials (for Railway/Docker builds)
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

// Validate at runtime when actually used (not during build)
export function validateSupabaseConfig() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return {
      valid: false,
      error: 'Missing Supabase environment variables. Please check your .env.local file:\n' +
        '- NEXT_PUBLIC_SUPABASE_URL\n' +
        '- NEXT_PUBLIC_SUPABASE_ANON_KEY'
    };
  }
  return { valid: true };
}
