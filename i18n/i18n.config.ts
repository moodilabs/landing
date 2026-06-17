import en from '../locales/en.json'
import zh from '../locales/zh.json'
import ja from '../locales/ja.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, zh, ja },
}))
