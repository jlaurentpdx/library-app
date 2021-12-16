import { createClient } from '@supabase/supabase-js';

const client = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

export default client;
