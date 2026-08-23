// Second Run — Supabase configuration
//
// Fill these in from your Supabase project:
// Project settings → API → Project URL, and → Project API keys → anon public
//
// It is safe to expose the anon key in client-side code — it only works
// within the permissions your Row Level Security policies allow.

const SUPABASE_URL = 'https://rhbytefinuxrltksorjr.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoYnl0ZWZpbnV4cmx0a3NvcmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0NzE1MzgsImV4cCI6MjEwMzA0NzUzOH0.05XjxfohFcgGN5XDYB1gRTO6J6N-yb4UvgznEsPzOdo';

const sbClient = (SUPABASE_URL.startsWith('http') && window.supabase)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
