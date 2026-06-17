import { defineEventHandler, readBody, createError } from 'h3'

// In-memory store for development — replace with DB or external service call
const waitlistEmails: { email: string; locale: string; joinedAt: string }[] = []

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email: string = (body?.email ?? '').trim().toLowerCase()
  const locale: string = body?.locale ?? 'en'

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address' })
  }

  if (waitlistEmails.some(e => e.email === email)) {
    // Return success silently — don't leak whether email was already registered
    return { success: true }
  }

  waitlistEmails.push({ email, locale, joinedAt: new Date().toISOString() })

  // TODO: Replace with one of these when ready:
  // Option A — Spring Boot backend:
  //   await $fetch('http://localhost:8080/api/waitlist', { method: 'POST', body: { email } })
  // Option B — Send email via Resend/Mailgun:
  //   await $fetch('https://api.resend.com/emails', { ... })

  console.log(`[Waitlist] New signup: ${email} (${locale}) — total: ${waitlistEmails.length}`)

  return { success: true }
})
