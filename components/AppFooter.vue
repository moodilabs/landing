<template>
  <footer class="footer section--deeper">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="footer-logo">MOODI</span>
          <p class="footer-tagline">{{ $t('footer.tagline') }}</p>
          <p class="footer-coming">{{ $t('footer.coming') }}</p>
        </div>
        <div class="footer-links">
          <button v-for="item in navItems" :key="item.key" class="footer-link" @click="scrollTo(item.key)">
            {{ $t(`nav.${item.key}`) }}
          </button>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-rights">{{ $t('footer.rights') }}</p>
        <div class="lang-switcher">
          <button
            v-for="lang in locales"
            :key="lang.code"
            class="lang-btn"
            :class="{ active: locale === lang.code }"
            @click="switchLocale(lang.code)"
          >
            {{ lang.label }}
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localeCookie = useCookie('moodi_locale', { maxAge: 60 * 60 * 24 * 365 })

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: 'CN' },
  { code: 'ja', label: 'JP' },
]

async function switchLocale(code: string) {
  if (locale.value === code) return
  localeCookie.value = code
  await setLocale(code as 'en' | 'zh' | 'ja')
}

const navItems = [
  { key: 'persona' },
  { key: 'problem' },
  { key: 'solution' },
  { key: 'features' },
  { key: 'goals' },
]

const route = useRoute()

function scrollTo(id: string) {
  if (route.path !== '/') {
    navigateTo(`/#${id}`)
    return
  }
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  padding: 64px 0 40px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 32px;
}

.footer-logo {
  display: block;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--white);
  margin-bottom: 12px;
}

.footer-tagline {
  font-size: 15px;
  color: rgba(255,255,255,0.5);
  margin-bottom: 8px;
}

.footer-coming {
  font-size: 13px;
  color: var(--purple-200);
  font-weight: 500;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  justify-content: flex-end;
}

.footer-link {
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  transition: color 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font);
  padding: 0;
}
.footer-link:hover { color: var(--white); }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.footer-rights {
  font-size: 13px;
  color: rgba(255,255,255,0.3);
}

.lang-switcher {
  display: flex;
  gap: 4px;
  background: rgba(255,255,255,0.06);
  border-radius: 8px;
  padding: 3px;
}

.lang-btn {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  transition: all 0.2s;
  cursor: pointer;
  background: none;
  border: none;
  font-family: var(--font);
}
.lang-btn.active {
  background: var(--purple);
  color: var(--white);
}
.lang-btn:hover:not(.active) { color: var(--white); }

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    gap: 32px;
  }
  .footer-links {
    justify-content: flex-start;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
