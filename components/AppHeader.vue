<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="header-inner container">
      <button class="logo" @click="scrollToTop">MOODI</button>

      <nav class="nav" :class="{ 'nav--open': menuOpen }">
        <button
          v-for="item in navItems"
          :key="item.key"
          class="nav-link"
          @click="scrollTo(item.key)"
        >
          {{ $t(`nav.${item.key}`) }}
        </button>
      </nav>

      <div class="header-actions">
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
        <button class="btn btn-primary header-cta" @click="goToWaitlist">{{ $t('nav.cta') }}</button>
        <button class="hamburger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localeCookie = useCookie('moodi_locale', { maxAge: 60 * 60 * 24 * 365 })
const route = useRoute()

const scrolled = ref(false)
const menuOpen = ref(false)

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: 'CN' },
  { code: 'ja', label: 'JP' },
]

async function switchLocale(code: string) {
  if (locale.value === code) return
  menuOpen.value = false
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

function goToWaitlist() {
  menuOpen.value = false
  if (route.path !== '/') {
    navigateTo('/#waitlist')
  } else {
    scrollTo('waitlist')
  }
}

function scrollTo(id: string) {
  menuOpen.value = false
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

function scrollToTop() {
  if (route.path !== '/') {
    navigateTo('/')
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 40
  })
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0;
  background: rgba(9, 9, 12, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.header--scrolled {
  background: rgba(9, 9, 12, 0.95);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  height: 68px;
}

.logo {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--white);
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-link {
  background: none;
  border: none;
  padding: 4px 0;
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
  flex: 1;
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.65);
  transition: color 0.2s;
}
.nav-link:hover { color: var(--white); }

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
}

.lang-switcher {
  display: flex;
  gap: 4px;
  background: rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 3px;
}

.lang-btn {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
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
.lang-btn:hover:not(.active) {
  color: var(--white);
}

.header-cta {
  padding: 9px 18px;
  font-size: 13px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 24px;
  cursor: pointer;
}
.hamburger span {
  display: block;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all 0.25s ease;
  transform-origin: center;
}
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .nav {
    display: none;
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: var(--grey-800);
    padding: 12px 0 24px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .nav--open { display: flex; }
  .nav-link {
    width: 100%;
    padding: 14px 24px;
    font-size: 16px;
  }
  .header-cta { display: none; }
  .hamburger { display: flex; }
}
</style>
