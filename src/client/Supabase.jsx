import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iwiwwlfnsbagysnrmbhh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3aXd3bGZuc2JhZ3lzbnJtYmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0OTQ0MzIsImV4cCI6MjAwMzA3MDQzMn0.QjidQXVz7WDLOm4q6_AbbS3-k-uRQL2fSCjth_odO7A'
const supabase = createClient(supabaseUrl, supabaseKey, {

  // Không dùng cùng phải thêm Authorization: `Bearer ${supabaseKey}` vào headers :vv mặc dù đã có supabaseKey ở trên rồi @@
  headers: {
    Authorization: `Bearer `,
    "Content-Type": "application/json",
    Accept: "application/json",
  }
})

export default supabase