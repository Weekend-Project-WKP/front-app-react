import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'

import { createClient } from '@supabase/supabase-js'

const url = "https://jaxsihpqpjqisdqzikzo.supabase.co"; //process.env.EXPO_PUBLIC_SUPABASE_URL
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpheHNpaHBxcGpxaXNkcXppa3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMjM5MjQsImV4cCI6MjAxOTY5OTkyNH0.ACg3wqYuCYKvl0n7NDUxAJlEsHz1-v4XkOktZ3LifMQ"

// Initialize the Supabase client
export const supabase = createClient(url!, key!, {
    auth: {
        storage: AsyncStorage,
        detectSessionInUrl: false,
        autoRefreshToken: true,
        persistSession: true,
    },
})
