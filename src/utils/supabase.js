import { createClient } from '@supabase/supabase-js'

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://cnxyqehbkcomvbtepvmr.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueHlxZWhia2NvbXZidGVwdm1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4MDU0ODMsImV4cCI6MjA0MjM4MTQ4M30.QNSjRep2BbyjAmYGzpAqdFTv1LGnsSVnEE63gDFrvoA"

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;