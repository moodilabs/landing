<template>
  <section id="waitlist" class="waitlist-section">
    <div class="wl-bg">
      <div class="wl-orb wl-orb-1" />
      <div class="wl-orb wl-orb-2" />
    </div>
    <div class="container">
      <div class="wl-inner">
        <div class="wl-badge">🚀 {{ badgeText }}</div>
        <h2 class="wl-title">{{ titleText }}</h2>
        <p class="wl-sub">{{ subText }}</p>

        <form v-if="!submitted" class="wl-form" @submit.prevent="submit">
          <div class="wl-input-wrap">
            <input
              v-model="email"
              type="email"
              class="wl-input"
              :placeholder="placeholderText"
              required
              :disabled="loading"
            />
            <button type="submit" class="wl-btn" :disabled="loading || !email || !agreed">
              <span v-if="loading" class="wl-spinner" />
              <span v-else>{{ ctaText }}</span>
            </button>
          </div>
          <label class="wl-consent">
            <input v-model="agreed" type="checkbox" class="wl-checkbox" :disabled="loading" />
            <span class="wl-consent-text" v-html="consentText" />
          </label>
          <p v-if="error" class="wl-error">{{ error }}</p>
        </form>

        <div v-else class="wl-success">
          <div class="wl-success-icon">✓</div>
          <h3>{{ successTitle }}</h3>
          <p>{{ successSub }}</p>
        </div>

        <div class="wl-stats">
          <div v-for="stat in stats" :key="stat.label" class="wl-stat">
            <span class="wl-stat-num">{{ stat.num }}</span>
            <span class="wl-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const email = ref('')
const loading = ref(false)
const submitted = ref(false)
const error = ref('')
const agreed = ref(false)

const content = computed(() => {
  const map: Record<string, any> = {
    en: {
      badge: 'Early Access',
      title: 'Be the first to explore\nKorea by your mood',
      sub: 'Join the waitlist and get notified the moment MOODI launches. Early members get priority access and exclusive perks.',
      placeholder: 'Enter your email address',
      cta: 'Join Waitlist',
      privacy: 'No spam. Unsubscribe anytime.',
      consent: 'I agree to the collection and use of my email address for MOODI launch notifications. <a href="/privacy" target="_blank">Privacy Policy</a>',
      successTitle: "You're on the list!",
      successSub: "We'll notify you when MOODI is ready. Stay tuned.",
      stats: [
        { num: 'Q3 2026', label: 'Launch target' },
        { num: 'Free', label: 'During beta' },
      ],
    },
    zh: {
      badge: '抢先体验',
      title: '成为第一批以\n心情探索韩国的人',
      sub: '加入等待名单，MOODI 一经发布立即通知你。早期成员享有优先访问权和专属福利。',
      placeholder: '请输入您的电子邮件',
      cta: '加入等待名单',
      privacy: '不发送垃圾邮件，随时可取消订阅。',
      consent: '我同意收集并使用我的电子邮件地址，用于接收 MOODI 发布通知。<a href="/privacy" target="_blank">隐私政策</a>',
      successTitle: '您已成功加入！',
      successSub: 'MOODI 上线时，我们将第一时间通知您。敬请期待。',
      stats: [
        { num: '2026年Q3', label: '目标上线时间' },
        { num: '免费', label: '测试期间' },
      ],
    },
    ja: {
      badge: '先行体験',
      title: 'ムードで韓国を旅する\n最初の一人になろう',
      sub: 'ウェイトリストに登録して、MOODIのリリース通知を最初に受け取りましょう。早期メンバーには優先アクセスと特典をご用意しています。',
      placeholder: 'メールアドレスを入力',
      cta: 'ウェイトリストに登録',
      privacy: 'スパムはありません。いつでも解除できます。',
      consent: 'MOODIのリリース通知のためにメールアドレスの収集・利用に同意します。<a href="/privacy" target="_blank">プライバシーポリシー</a>',
      successTitle: 'リスト登録完了！',
      successSub: 'MOODIの準備が整い次第、ご連絡します。お楽しみに。',
      stats: [
        { num: '2026年Q3', label: 'リリース予定' },
        { num: '無料', label: 'ベータ期間中' },
      ],
    },
  }
  return map[locale.value] || map['en']
})

const badgeText = computed(() => content.value.badge)
const titleText = computed(() => content.value.title.replace('\n', '\n'))
const subText = computed(() => content.value.sub)
const placeholderText = computed(() => content.value.placeholder)
const ctaText = computed(() => content.value.cta)
const privacyText = computed(() => content.value.privacy)
const consentText = computed(() => content.value.consent)
const successTitle = computed(() => content.value.successTitle)
const successSub = computed(() => content.value.successSub)
const stats = computed(() => content.value.stats)

async function submit() {
  if (!email.value || loading.value) return
  loading.value = true
  error.value = ''

  try {
    await $fetch('/api/waitlist', {
      method: 'POST',
      body: { email: email.value, locale: locale.value },
    })
    submitted.value = true
  } catch (e) {
    error.value = locale.value === 'zh'
      ? '提交失败，请稍后再试。'
      : locale.value === 'ja'
        ? '送信に失敗しました。もう一度お試しください。'
        : 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.waitlist-section {
  position: relative;
  padding: 100px 0;
  overflow: hidden;
}

.wl-bg {
  position: absolute;
  inset: 0;
  background: #09090C;
}

.wl-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}
.wl-orb-1 {
  width: 500px; height: 500px;
  top: -100px; right: -50px;
  background: radial-gradient(circle, rgba(92,67,232,0.35) 0%, transparent 70%);
}
.wl-orb-2 {
  width: 400px; height: 400px;
  bottom: -80px; left: -60px;
  background: radial-gradient(circle, rgba(55,25,169,0.25) 0%, transparent 70%);
}

.container {
  position: relative;
  z-index: 1;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px;
}

.wl-inner {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

.wl-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: rgba(92, 67, 232, 0.15);
  border: 1px solid rgba(92, 67, 232, 0.3);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  color: var(--purple-200);
  margin-bottom: 24px;
}

.wl-title {
  font-size: clamp(28px, 4.5vw, 48px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--white);
  margin-bottom: 16px;
  white-space: pre-line;
}

.wl-sub {
  font-size: 16px;
  line-height: 1.65;
  color: rgba(255,255,255,0.5);
  margin-bottom: 40px;
}

.wl-form {
  width: 100%;
}

.wl-input-wrap {
  display: flex;
  gap: 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  padding: 6px 6px 6px 20px;
  margin-bottom: 12px;
  transition: border-color 0.2s;
}
.wl-input-wrap:focus-within {
  border-color: var(--purple);
  box-shadow: 0 0 0 3px rgba(92, 67, 232, 0.15);
}

.wl-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-family: var(--font);
  font-size: 15px;
  color: var(--white);
  min-width: 0;
}
.wl-input::placeholder {
  color: rgba(255,255,255,0.3);
}
.wl-input:disabled {
  opacity: 0.5;
}
.wl-input:-webkit-autofill,
.wl-input:-webkit-autofill:hover,
.wl-input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #16161e inset !important;
  -webkit-text-fill-color: white !important;
  transition: background-color 5000s ease-in-out 0s;
}

.wl-btn {
  flex-shrink: 0;
  padding: 12px 24px;
  background: var(--purple);
  color: white;
  border-radius: 10px;
  font-family: var(--font);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}
.wl-btn:hover:not(:disabled) {
  background: var(--purple-400);
}
.wl-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.wl-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

.wl-error {
  font-size: 13px;
  color: #FF6B6B;
  margin-bottom: 8px;
}

.wl-consent {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  text-align: left;
}

.wl-checkbox {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  accent-color: var(--purple);
  cursor: pointer;
}

.wl-consent-text {
  font-size: 12px;
  line-height: 1.6;
  color: rgba(255,255,255,0.35);
}

.wl-consent-text :deep(a) {
  color: var(--purple-200);
  text-decoration: underline;
}

.wl-success {
  padding: 48px 0;
  margin-bottom: 40px;
}

.wl-success-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(92, 67, 232, 0.2);
  border: 1px solid rgba(92, 67, 232, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: var(--purple-200);
  margin: 0 auto 16px;
  animation: popIn 0.4s ease;
}
@keyframes popIn {
  from { transform: scale(0.7); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.wl-success h3 {
  font-size: 22px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 8px;
}
.wl-success p {
  font-size: 15px;
  color: rgba(255,255,255,0.5);
}

.wl-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 40px;
}

.wl-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.wl-stat-num {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--white);
}

.wl-stat-label {
  font-size: 12px;
  color: rgba(255,255,255,0.35);
}

@media (max-width: 640px) {
  .wl-input-wrap {
    flex-direction: column;
    background: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
    gap: 10px;
    box-shadow: none;
  }
  .wl-input-wrap:focus-within {
    box-shadow: none;
    border: none;
  }
  .wl-input {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 12px;
    padding: 14px 18px;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.2s;
    font-size: 16px;
  }
  .wl-input:focus {
    border-color: var(--purple);
    box-shadow: 0 0 0 3px rgba(92, 67, 232, 0.15);
  }
  .wl-btn { width: 100%; border-radius: 12px; padding: 14px; }
  .wl-stats { gap: 24px; }
}
</style>
