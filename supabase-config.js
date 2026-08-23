// Second Run — Supabase configuration
//
// Fill these in from your Supabase project:
// Project settings → API → Project URL, and → Project API keys → anon public
//
// It is safe to expose the anon key in client-side code — it only works
// within the permissions your Row Level Security policies allow.

const SUPABASE_URL = 'sb_publishable_wy9d1L6Iv5u7cG5vuimd8g_tsyML2jZ';
const SUPABASE_ANON_KEY = 'sb_secret_AxhiC3X4D2XcqisW0CnSQA_embwjKkU';

const sbClient = (SUPABASE_URL.startsWith('http') && window.supabase)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
