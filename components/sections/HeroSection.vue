<template>
  <section class="hero section--deeper">
    <div class="hero-bg">
      <div class="orb orb-1" />
      <div class="orb orb-2" />
      <div class="orb orb-3" />
      <div class="grid-overlay" />
    </div>
    <div class="container">
      <div class="hero-content">
        <span class="badge">{{ $t('hero.badge') }}</span>
        <p class="hero-eyebrow">{{ $t('hero.eyebrow') }}</p>
        <h1 class="hero-title" v-html="titleHtml" />
        <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
        <div class="hero-ctas">
          <a href="#" class="store-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.33 10.56c-.02-2.09 1.71-3.1 1.79-3.15-.98-1.43-2.49-1.62-3.03-1.64-1.3-.13-2.54.76-3.2.76-.66 0-1.68-.74-2.76-.72-1.42.02-2.73.83-3.46 2.1-1.48 2.57-.38 6.37 1.06 8.46.7 1.02 1.54 2.16 2.64 2.12 1.06-.04 1.46-.68 2.74-.68 1.28 0 1.64.68 2.76.66 1.14-.02 1.87-1.04 2.56-2.07.82-1.18 1.15-2.34 1.17-2.4-.03-.01-2.25-.86-2.27-3.44zM12.27 4.36c.58-.71.98-1.69.87-2.67-.84.03-1.86.56-2.46 1.27-.54.62-1.01 1.62-.88 2.57.93.07 1.88-.47 2.47-1.17z" fill="currentColor"/></svg>
            <div class="store-text">
              <span class="store-sub">Download on the</span>
              <span class="store-name">{{ $t('hero.cta_ios') }}</span>
            </div>
          </a>
          <a href="#" class="store-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.83 1.14a1 1 0 0 0-.33.75v16.22a1 1 0 0 0 .33.75l.04.04 9.08-9.08v-.21L2.87 1.1l-.04.04zM15.14 13.46l-3.02-3.02v-.21l3.02-3.02.07.04 3.58 2.03c1.02.58 1.02 1.53 0 2.11l-3.58 2.03-.07.04zM15.21 13.42l-3.09-3.09-9.29 9.29c.34.36.9.41 1.53.05l10.85-6.25" fill="currentColor"/><path d="M15.21 6.58L4.36.33C3.73-.03 3.17.02 2.83.38l9.29 9.29 3.09-3.09z" fill="currentColor"/></svg>
            <div class="store-text">
              <span class="store-sub">Get it on</span>
              <span class="store-name">{{ $t('hero.cta_android') }}</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Phone Mockup -->
      <div class="hero-visual">
        <div class="phone-wrap">
          <!-- 사이드 버튼 -->
          <div class="btn-left btn-silent" />
          <div class="btn-left btn-vol-up" />
          <div class="btn-left btn-vol-dn" />
          <div class="btn-right btn-power" />

          <!-- 폰 바디 -->
          <div class="phone-body">
            <!-- 화면 -->
            <div class="phone-screen">
              <!-- 다이나믹 아일랜드 -->
              <div class="dynamic-island" />

              <!-- 상태바 -->
              <div class="status-bar">
                <span class="status-time">9:41</span>
                <div class="status-icons">
                  <!-- 신호 -->
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="white" opacity=".9">
                    <rect x="0" y="7" width="3" height="4" rx="1"/>
                    <rect x="4.5" y="5" width="3" height="6" rx="1"/>
                    <rect x="9" y="2.5" width="3" height="8.5" rx="1"/>
                    <rect x="13.5" y="0" width="2.5" height="11" rx="1"/>
                  </svg>
                  <!-- 와이파이 -->
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                    <path d="M7.5 8.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" fill="white" opacity=".9"/>
                    <path d="M3.5 6C4.8 4.6 6 4 7.5 4s2.7.6 4 2" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".9"/>
                    <path d="M1 3.5C3 1.5 5 .5 7.5.5s4.5 1 6.5 3" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".6"/>
                  </svg>
                  <!-- 배터리 -->
                  <div class="battery-icon">
                    <div class="battery-level" />
                    <div class="battery-tip" />
                  </div>
                </div>
              </div>

              <!-- 앱 콘텐츠 -->
              <div class="app-content">
                <!-- 앱 헤더 -->
                <div class="app-header">
                  <div class="app-header-left">
                    <span class="app-logo-text">MOODI</span>
                    <span class="app-location">📍 Seoul</span>
                  </div>
                  <div class="app-header-icons">
                    <div class="icon-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    </div>
                    <div class="icon-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                      <span class="notif-dot" />
                    </div>
                  </div>
                </div>

                <!-- 무드 태그 스크롤 -->
                <div class="mood-tags">
                  <span class="mood-tag active"># Retro</span>
                  <span class="mood-tag"># Minimal</span>
                  <span class="mood-tag"># Film</span>
                  <span class="mood-tag"># Local</span>
                </div>

                <!-- 스팟 카드 그리드 -->
                <div class="spot-grid">
                  <div class="spot-card card-tall" style="background:linear-gradient(160deg,#735EED 0%,#3819A9 100%)">
                    <div class="spot-overlay" />
                    <div class="spot-info">
                      <span class="spot-tag">#Retro Cafe</span>
                      <p class="spot-name">Seongsu Stay</p>
                      <div class="spot-meta">
                        <span class="spot-dist">0.3km</span>
                        <span class="spot-rating">★ 4.9</span>
                      </div>
                    </div>
                  </div>
                  <div class="spot-col">
                    <div class="spot-card card-short" style="background:linear-gradient(160deg,#4D4F58 0%,#1E1F24 100%)">
                      <div class="spot-overlay" />
                      <div class="spot-info">
                        <span class="spot-tag">#Film</span>
                        <p class="spot-name">Mangwon Cafe</p>
                      </div>
                    </div>
                    <div class="spot-card card-short" style="background:linear-gradient(160deg,#9A8CF8 0%,#572DEF 100%)">
                      <div class="spot-overlay" />
                      <div class="spot-info">
                        <span class="spot-tag">#Local</span>
                        <p class="spot-name">Yeonnam Alley</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- AI 추천 배너 -->
                <div class="ai-banner">
                  <span class="ai-icon">✦</span>
                  <div class="ai-text">
                    <p class="ai-label">AI Mood Match</p>
                    <p class="ai-desc">3 spots match your vibe</p>
                  </div>
                  <div class="ai-arrow">→</div>
                </div>
              </div>

              <!-- 하단 홈바 -->
              <div class="home-indicator" />

              <!-- 바텀 내비게이션 -->
              <div class="bottom-nav">
                <div class="nav-item active">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                  <span>Feed</span>
                </div>
                <div class="nav-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                  <span>Map</span>
                </div>
                <div class="nav-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                  <span>Route</span>
                </div>
                <div class="nav-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>My</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 플로팅 카드 -->
        <div class="float-card float-card-1">
          <span class="float-icon">✨</span>
          <div>
            <p class="float-title">AI matched your vibe</p>
            <p class="float-sub">3 spots in Seongsu</p>
          </div>
        </div>
        <div class="float-card float-card-2">
          <span class="float-tag">#Retro</span>
          <span class="float-tag">#Film</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const titleHtml = computed(() => t('hero.title').replace('\n', '<br>'))
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero-bg { position: absolute; inset: 0; pointer-events: none; }

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}
.orb-1 { width: 600px; height: 600px; top: -100px; right: -100px; background: radial-gradient(circle, #5C43E8 0%, transparent 70%); animation: float 8s ease-in-out infinite; }
.orb-2 { width: 400px; height: 400px; bottom: -50px; left: -80px; background: radial-gradient(circle, #3819A9 0%, transparent 70%); animation: float 10s ease-in-out infinite reverse; }
.orb-3 { width: 300px; height: 300px; top: 40%; left: 35%; background: radial-gradient(circle, #735EED 0%, transparent 70%); opacity: 0.25; animation: float 12s ease-in-out infinite 2s; }

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

.container {
  display: flex;
  align-items: center;
  gap: 64px;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

.hero-content { flex: 1; min-width: 0; }

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(92, 67, 232, 0.2);
  border: 1px solid rgba(92, 67, 232, 0.4);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  color: var(--purple-200);
  margin-bottom: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero-eyebrow {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.45);
  margin-bottom: 16px;
}

.hero-title {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--white);
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: clamp(15px, 2vw, 18px);
  line-height: 1.65;
  color: rgba(255,255,255,0.55);
  max-width: 480px;
  margin-bottom: 40px;
}

.hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; }

.store-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  color: var(--white);
  transition: all 0.2s ease;
}
.store-btn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); transform: translateY(-2px); }
.store-text { display: flex; flex-direction: column; }
.store-sub { font-size: 10px; color: rgba(255,255,255,0.45); line-height: 1; margin-bottom: 2px; }
.store-name { font-size: 15px; font-weight: 700; line-height: 1; }

/* ===== 리얼 폰 목업 ===== */
.hero-visual {
  flex-shrink: 0;
  position: relative;
  width: 300px;
}

.phone-wrap {
  position: relative;
  width: 230px;
  margin: 0 auto;
  filter: drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 1px rgba(255,255,255,0.05));
}

/* 사이드 버튼 */
.btn-left, .btn-right {
  position: absolute;
  background: #2a2a2e;
  border-radius: 3px;
  z-index: 0;
}
.btn-silent { width: 3px; height: 28px; left: -3px; top: 90px; border-radius: 2px 0 0 2px; background: #252528; }
.btn-vol-up { width: 3px; height: 44px; left: -3px; top: 132px; border-radius: 2px 0 0 2px; background: #252528; }
.btn-vol-dn { width: 3px; height: 44px; left: -3px; top: 186px; border-radius: 2px 0 0 2px; background: #252528; }
.btn-right { }
.btn-power { width: 3px; height: 64px; right: -3px; top: 148px; border-radius: 0 2px 2px 0; background: #252528; }

/* 폰 바디 */
.phone-body {
  position: relative;
  z-index: 1;
  background: linear-gradient(145deg, #2e2e32 0%, #1a1a1e 50%, #111114 100%);
  border-radius: 44px;
  padding: 10px;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.12),
    inset 0 0 0 1px rgba(0,0,0,0.5),
    0 2px 4px rgba(255,255,255,0.04) inset;
}

/* 화면 */
.phone-screen {
  background: #09090C;
  border-radius: 36px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 480px;
}

/* 다이나믹 아일랜드 */
.dynamic-island {
  width: 90px;
  height: 28px;
  background: #000;
  border-radius: 20px;
  margin: 10px auto 0;
  flex-shrink: 0;
}

/* 상태바 */
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px 4px;
  flex-shrink: 0;
}
.status-time {
  font-size: 12px;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
}
.status-icons {
  display: flex;
  align-items: center;
  gap: 5px;
}
.battery-icon {
  display: flex;
  align-items: center;
  gap: 1px;
}
.battery-level {
  width: 20px;
  height: 10px;
  border: 1.5px solid rgba(255,255,255,0.8);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}
.battery-level::after {
  content: '';
  position: absolute;
  left: 1px; top: 1px; bottom: 1px;
  width: 75%;
  background: white;
  border-radius: 1.5px;
}
.battery-tip {
  width: 2px;
  height: 5px;
  background: rgba(255,255,255,0.6);
  border-radius: 0 1px 1px 0;
}

/* 앱 콘텐츠 */
.app-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 8px 12px 0;
  gap: 8px;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app-header-left {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.app-logo-text {
  font-size: 15px;
  font-weight: 900;
  color: white;
  letter-spacing: -0.03em;
}
.app-location {
  font-size: 9px;
  color: rgba(255,255,255,0.45);
}
.app-header-icons {
  display: flex;
  gap: 8px;
}
.icon-btn {
  width: 28px;
  height: 28px;
  background: rgba(255,255,255,0.07);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.7);
  position: relative;
}
.notif-dot {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 6px;
  height: 6px;
  background: #FF6B6B;
  border-radius: 50%;
  border: 1px solid #09090C;
}

/* 무드 태그 */
.mood-tags {
  display: flex;
  gap: 6px;
  overflow: hidden;
}
.mood-tag {
  font-size: 10px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 100px;
  color: rgba(255,255,255,0.45);
  background: rgba(255,255,255,0.06);
  white-space: nowrap;
  flex-shrink: 0;
}
.mood-tag.active {
  background: rgba(92, 67, 232, 0.25);
  color: var(--purple-200);
  border: 1px solid rgba(92, 67, 232, 0.4);
}

/* 스팟 카드 */
.spot-grid {
  display: flex;
  gap: 6px;
  flex: 1;
  overflow: hidden;
}
.spot-card {
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.card-tall { flex: 1; }
.spot-col { display: flex; flex-direction: column; gap: 6px; flex: 1; }
.card-short { flex: 1; }
.spot-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
}
.spot-info {
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
}
.spot-tag {
  font-size: 8px;
  font-weight: 700;
  color: rgba(255,255,255,0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 2px;
}
.spot-name {
  font-size: 11px;
  font-weight: 700;
  color: white;
  line-height: 1.2;
}
.spot-meta {
  display: flex;
  gap: 6px;
  margin-top: 2px;
}
.spot-dist, .spot-rating {
  font-size: 8px;
  color: rgba(255,255,255,0.6);
}

/* AI 배너 */
.ai-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: rgba(92, 67, 232, 0.15);
  border: 1px solid rgba(92, 67, 232, 0.3);
  border-radius: 10px;
  flex-shrink: 0;
}
.ai-icon { font-size: 14px; }
.ai-text { flex: 1; }
.ai-label { font-size: 10px; font-weight: 700; color: var(--purple-200); }
.ai-desc { font-size: 9px; color: rgba(255,255,255,0.4); }
.ai-arrow { font-size: 13px; color: var(--purple-200); }

/* 홈 인디케이터 */
.home-indicator {
  width: 100px;
  height: 4px;
  background: rgba(255,255,255,0.25);
  border-radius: 3px;
  margin: 6px auto 2px;
  flex-shrink: 0;
}

/* 바텀 내비게이션 */
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 6px 4px 8px;
  border-top: 1px solid rgba(255,255,255,0.06);
  flex-shrink: 0;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  color: rgba(255,255,255,0.3);
  flex: 1;
}
.nav-item.active { color: #5C43E8; }
.nav-item span { font-size: 8px; font-weight: 600; }

/* 플로팅 카드 */
.float-card {
  position: absolute;
  background: rgba(20, 20, 28, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 10px 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}
.float-card-1 {
  display: flex;
  align-items: center;
  gap: 10px;
  bottom: 30px;
  left: -50px;
  white-space: nowrap;
}
.float-card-2 {
  display: flex;
  gap: 6px;
  top: 60px;
  right: -30px;
}
.float-icon { font-size: 18px; }
.float-title { font-size: 11px; font-weight: 700; color: var(--white); }
.float-sub { font-size: 10px; color: rgba(255,255,255,0.45); }
.float-tag {
  font-size: 11px;
  font-weight: 600;
  color: var(--purple-200);
  background: rgba(92, 67, 232, 0.2);
  padding: 4px 10px;
  border-radius: 100px;
}

@media (max-width: 900px) {
  .container { flex-direction: column; text-align: center; }
  .hero-subtitle { max-width: 100%; margin-left: auto; margin-right: auto; }
  .hero-ctas { justify-content: center; }
  .hero-visual { order: -1; }
  .float-card-1 { left: -20px; }
  .float-card-2 { right: -10px; }
}

@media (max-width: 480px) {
  .hero { padding: 100px 0 60px; }
  .hero-visual { display: none; }
}
</style>
