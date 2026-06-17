import { defineEventHandler, getHeader, getCookie, setCookie } from 'h3'

const COUNTRY_LOCALE: Record<string, string> = {
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh', SG: 'zh',
  JP: 'ja',
}

export default defineEventHandler((event) => {
  const existing = getCookie(event, 'moodi_locale')
  if (existing) return

  const country = getHeader(event, 'x-vercel-ip-country') ?? ''
  const locale = COUNTRY_LOCALE[country] ?? 'en'

  setCookie(event, 'moodi_locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
  })
})
