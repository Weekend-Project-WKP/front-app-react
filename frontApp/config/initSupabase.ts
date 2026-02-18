import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'

import { createClient } from '@supabase/supabase-js'

const url = "https://<supabaseID>.supabase.co";
const key = "<supabaseapikey>"

// Initialize the Supabase client
export const supabase = createClient(url!, key!, {
    auth: {
        storage: AsyncStorage,
        detectSessionInUrl: false,
        autoRefreshToken: true,
        persistSession: true,
    },
})
