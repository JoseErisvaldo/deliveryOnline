import axios from 'axios';

const supabaseUrl =  process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
const axiosClient = axios.create({
  baseURL: supabaseUrl,
  headers: {
    apikey: supabaseAnonKey,
    Authorization: `Bearer ${supabaseAnonKey}`,
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
