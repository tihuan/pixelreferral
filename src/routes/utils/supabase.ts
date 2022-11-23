import { createClient } from "@supabase/supabase-js";

export const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0bnRnY3djaXFqeWp5Y2R3eGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNTA1NDAsImV4cCI6MTk4NDcyNjU0MH0.bunBJmwmvHnmzBXxQiofobc4Tn04SDymhYLOiIfl8wA";

export const SUPABASE_URL = "https://wtntgcwciqjyjycdwxdm.supabase.co";

export function createSupabase() {
  return createClient(SUPABASE_URL, SUPABASE_KEY || "");
}
