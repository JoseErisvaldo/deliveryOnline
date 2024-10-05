import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl) {
  throw new Error(
    'supabaseUrl is required. Set your NEXT_PUBLIC_SUPABASE_URL environment variable.'
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    'supabaseAnonKey is required. Set your NEXT_PUBLIC_SUPABASE_KEY environment variable.'
  );
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
