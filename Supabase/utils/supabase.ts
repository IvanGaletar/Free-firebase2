import { createClient } from '@supabase/supabase-js'

let supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL || "TODO: https://xqkgqqabjfbivulbhpan.supabase.co"
let supabase_key = process.env.NEXT_PUBLIC_SUPABASE_KEY || "TODO: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhxa2dxcWFiamZiaXZ1bGJocGFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1NzUzMzcsImV4cCI6MTk4MjE1MTMzN30.p3hSIJp-HVmnnb74bBDAcJKKRlbavEYVyR7tNAMBMYE"

const getSupabase = (acces_token: string) => {
    const supabase = createClient (
        supabase_url,
        supabase_key
    )

    supabase.auth.session= () => ({
        acces_token,
        token_type: "",
        user: null
    })

    return supabase
}

export { getSupabase }