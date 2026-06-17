import { defineEventHandler, readBody, createError } from 'h3'
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email: string = (body?.email ?? '').trim().toLowerCase()
  const locale: string = body?.locale ?? 'en'

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address' })
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw createError({ statusCode: 500, statusMessage: 'Server configuration error' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  const { error } = await supabase
    .from('waitlist')
    .upsert({ email, locale }, { onConflict: 'email', ignoreDuplicates: true })

  if (error) {
    console.error('[Waitlist] Supabase error:', error.message)
    throw createError({ statusCode: 500, statusMessage: 'Failed to save email' })
  }

  return { success: true }
})
