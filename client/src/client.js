import {createClient} from '@supabase/supabase-js'
const URL = 'https://hztldtoqanallgoxcvjz.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6dGxkdG9xYW5hbGxnb3hjdmp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3Mzk1OTQsImV4cCI6MjA3MjMxNTU5NH0.WgGckifXlT3cSxON2gtMWoBEw9R_Ts3yeBRYAd-ZmGE'
export const superbase = createClient(URL, API_KEY)
