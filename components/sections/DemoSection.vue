<template>
  <section class="section section--dark demo-section">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">{{ $t('demo.eyebrow') }}</span>
        <h2 class="section-title">{{ $t('demo.title') }}</h2>
        <p class="section-sub">{{ $t('demo.subtitle') }}</p>
      </div>

      <div class="demo-layout">
        <!-- Phone mockup -->
        <div class="phone-outer">
          <div class="pb-silent" />
          <div class="pb-vol-up" />
          <div class="pb-vol-dn" />
          <div class="pb-power" />

          <div class="phone-body">
            <div class="phone-screen">
              <div class="d-island" />

              <div class="d-status">
                <span class="d-time">9:41</span>
                <div class="d-icons">
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="white" opacity=".9">
                    <rect x="0" y="7" width="3" height="4" rx="1"/>
                    <rect x="4.5" y="5" width="3" height="6" rx="1"/>
                    <rect x="9" y="2.5" width="3" height="8.5" rx="1"/>
                    <rect x="13.5" y="0" width="2.5" height="11" rx="1"/>
                  </svg>
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                    <path d="M7.5 8.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" fill="white" opacity=".9"/>
                    <path d="M3.5 6C4.8 4.6 6 4 7.5 4s2.7.6 4 2" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".9"/>
                    <path d="M1 3.5C3 1.5 5 .5 7.5.5s4.5 1 6.5 3" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".6"/>
                  </svg>
                  <div class="d-battery">
                    <div class="d-bat-body"><div class="d-bat-fill" /></div>
                    <div class="d-bat-tip" />
                  </div>
                </div>
              </div>

              <div class="slide-container">

                  <!-- Slide 0: 무드 피드 -->
                  <div class="slide" :class="{ 'is-active': currentSlide === 0 }">
                    <div class="app-hdr">
                      <div class="app-hdr-l">
                        <span class="app-logo">MOODI</span>
                        <span class="app-loc">📍 Seoul</span>
                      </div>
                      <div class="app-hdr-r">
                        <div class="icon-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        </div>
                        <div class="icon-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                          <span class="notif-dot" />
                        </div>
                      </div>
                    </div>
                    <div class="mood-tags">
                      <span class="mood-tag active"># Retro</span>
                      <span class="mood-tag"># Minimal</span>
                      <span class="mood-tag"># Film</span>
                      <span class="mood-tag"># Local</span>
                    </div>
                    <div class="spot-grid">
                      <div class="spot-card card-tall" style="background-image:url('/images/upload-1.jpeg');background-size:cover;background-position:center">
                        <div class="spot-ov" />
                        <div class="spot-info">
                          <span class="spot-tag-sm">#Retro Cafe</span>
                          <p class="spot-name">Seongsu Stay</p>
                          <div class="spot-meta"><span>0.3km</span><span>★ 4.9</span></div>
                        </div>
                      </div>
                      <div class="spot-col">
                        <div class="spot-card card-short" style="background-image:url('/images/feed-2.jpeg');background-size:cover;background-position:center">
                          <div class="spot-ov" />
                          <div class="spot-info"><span class="spot-tag-sm">#Minimal</span><p class="spot-name">Mangwon View</p></div>
                        </div>
                        <div class="spot-card card-short" style="background-image:url('/images/feed-3.jpeg');background-size:cover;background-position:center">
                          <div class="spot-ov" />
                          <div class="spot-info"><span class="spot-tag-sm">#Film</span><p class="spot-name">Songdo Garden</p></div>
                        </div>
                      </div>
                    </div>
                    <div class="ai-banner">
                      <span class="ai-icon">✦</span>
                      <div><p class="ai-lbl">AI Mood Match</p><p class="ai-sub">3 spots match your vibe</p></div>
                      <span class="ai-arr">→</span>
                    </div>
                  </div>

                  <!-- Slide 1: 이미지 업로드 -->
                  <div class="slide slide-upload" :class="{ 'is-active': currentSlide === 1 }">
                    <div class="upload-hdr">
                      <h3 class="upload-title">Pick Your Mood</h3>
                      <p class="upload-sub">Select 1–5 photos that match your vibe</p>
                    </div>
                    <div class="upload-grid">
                      <div v-for="(p, i) in photoSlots" :key="i" class="upload-img" :class="{ sel: p.selected }" :style="{ backgroundImage: `url(${p.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                        <!-- photo texture overlay -->
                        <div class="photo-noise" />
                        <!-- scene hint -->
                        <div class="photo-scene">
                          <span class="photo-tag">{{ p.tag }}</span>
                        </div>
                        <!-- selected checkmark -->
                        <div v-if="p.selected" class="check-overlay">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="rgba(92,67,232,0.9)"/><path d="M7 12l3.5 3.5L17 8.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <!-- unselected: camera icon -->
                        <div v-else class="camera-icon">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        </div>
                      </div>
                    </div>
                    <div class="upload-footer">
                      <span class="upload-count">3 selected</span>
                      <div class="upload-cta">Find Spots →</div>
                    </div>
                  </div>

                  <!-- Slide 2: 스팟 발견 -->
                  <div class="slide slide-map-view" :class="{ 'is-active': currentSlide === 2 }">
                    <div class="map-area">
                      <div class="map-grid-bg" />
                      <div class="map-pin" style="left:28%; top:38%">
                        <div class="pin-dot" /><span class="pin-lbl">Seongsu Stay</span>
                      </div>
                      <div class="map-pin" style="left:54%; top:55%">
                        <div class="pin-dot" /><span class="pin-lbl">Mangwon Cafe</span>
                      </div>
                      <div class="map-pin" style="left:68%; top:28%">
                        <div class="pin-dot" /><span class="pin-lbl">Yeonnam</span>
                      </div>
                      <div class="map-badge">3 spots found</div>
                    </div>
                    <div class="bottom-sheet">
                      <div class="sheet-handle" />
                      <p class="sheet-title">Seoul · Seongsu</p>
                      <div class="sheet-cards">
                        <div v-for="(s, i) in spotCards" :key="i" class="sheet-card" :style="{ background: s.bg }">
                          <div class="spot-ov" />
                          <div class="sheet-card-info">
                            <span class="spot-tag-sm">{{ s.tag }}</span>
                            <p class="spot-name">{{ s.name }}</p>
                            <span class="sheet-dist">{{ s.dist }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Slide 3: 루트 생성 -->
                  <div class="slide slide-route" :class="{ 'is-active': currentSlide === 3 }">
                    <div class="route-hdr">
                      <div>
                        <p class="route-eyebrow">AI Route</p>
                        <h3 class="route-day">Day 1 · Seoul</h3>
                      </div>
                      <span class="route-edit-btn">Edit</span>
                    </div>
                    <div class="route-stops">
                      <div v-for="(stop, i) in routeStops" :key="i" class="route-stop">
                        <div class="rs-left">
                          <div class="rs-num">{{ i + 1 }}</div>
                          <div v-if="i < routeStops.length - 1" class="rs-connector" />
                        </div>
                        <div class="rs-body">
                          <span class="rs-name">{{ stop.name }}</span>
                          <span class="rs-type">{{ stop.type }}</span>
                        </div>
                        <span class="rs-time">{{ stop.time }}</span>
                      </div>
                    </div>
                    <div class="route-save">Save Route</div>
                  </div>

              </div>

              <div class="d-bottom-nav">
                <div class="d-nav-item" :class="{ active: currentSlide === 0 }">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                  <span>Feed</span>
                </div>
                <div class="d-nav-item" :class="{ active: currentSlide === 1 || currentSlide === 2 }">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  <span>Discover</span>
                </div>
                <div class="d-nav-item" :class="{ active: currentSlide === 3 }">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                  <span>Route</span>
                </div>
                <div class="d-nav-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>My</span>
                </div>
              </div>
              <div class="d-home-bar" />
            </div>
          </div>
        </div>

        <!-- Desktop: step cards -->
        <div class="demo-steps">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="demo-step"
            :class="{ active: currentSlide === i }"
            @click="jumpTo(i)"
          >
            <div class="step-track">
              <div
                :key="`${i}-${currentSlide}`"
                class="step-progress"
                :class="{ running: currentSlide === i }"
              />
            </div>
            <div class="step-content">
              <span class="step-num">0{{ i + 1 }}</span>
              <div>
                <h3 class="step-title">{{ step.label }}</h3>
                <p class="step-desc">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: active step info -->
      <div class="mobile-step-info">
        <Transition name="fade-up" mode="out-in">
          <div v-if="steps[currentSlide]" :key="currentSlide" class="mobile-step-body">
            <span class="mobile-step-num">0{{ currentSlide + 1 }}</span>
            <h3 class="mobile-step-title">{{ steps[currentSlide].label }}</h3>
            <p class="mobile-step-desc">{{ steps[currentSlide].desc }}</p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const SLIDE_DURATION = 4000

const { tm, rt } = useI18n()
const currentSlide = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const steps = computed(() => {
  const raw = tm('demo.steps') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    label: rt(item.label),
    desc: rt(item.desc),
  }))
})

const photoSlots = [
  { url: '/images/upload-1.jpeg', tag: 'Cafe', selected: true },
  { url: '/images/upload-2.jpeg', tag: 'Park', selected: false },
  { url: '/images/upload-3.jpeg', tag: 'Moody', selected: true },
  { url: '/images/upload-4.jpeg', tag: 'Street', selected: false },
  { url: '/images/upload-5.jpeg', tag: 'Nature', selected: true },
  { url: '/images/upload-6.jpeg', tag: 'Garden', selected: false },
]

const spotCards = [
  { bg: 'linear-gradient(160deg,#735EED,#3819A9)', tag: '#Retro', name: 'Seongsu Stay', dist: '0.3km' },
  { bg: 'linear-gradient(160deg,#4D4F58,#1E1F24)', tag: '#Film', name: 'Mangwon Cafe', dist: '0.8km' },
  { bg: 'linear-gradient(160deg,#9A8CF8,#572DEF)', tag: '#Local', name: 'Yeonnam Alley', dist: '1.2km' },
]

const routeStops = [
  { name: 'Cafe Vintage', type: 'Cafe', time: '10:00' },
  { name: 'Seongsu Film', type: 'Gallery', time: '12:30' },
  { name: 'Retro Alley', type: 'Street', time: '14:00' },
  { name: 'Bukchon View', type: 'Landmark', time: '16:30' },
]

function jumpTo(i: number) {
  currentSlide.value = i
  resetTimer()
}

function resetTimer() {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % 4
  }, SLIDE_DURATION)
}

onMounted(() => resetTimer())
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.demo-section { overflow: hidden; }
.section-sub { color: rgba(255,255,255,0.5); }

/* ── Layout ── */
.demo-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
}

/* ── Phone frame ── */
.phone-outer {
  position: relative;
  width: 270px;
  flex-shrink: 0;
  filter: drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 1px rgba(255,255,255,0.05));
}

.pb-silent  { position: absolute; width: 3px; height: 28px; left: -3px; top: 90px;  background: #252528; border-radius: 2px 0 0 2px; }
.pb-vol-up  { position: absolute; width: 3px; height: 44px; left: -3px; top: 132px; background: #252528; border-radius: 2px 0 0 2px; }
.pb-vol-dn  { position: absolute; width: 3px; height: 44px; left: -3px; top: 186px; background: #252528; border-radius: 2px 0 0 2px; }
.pb-power   { position: absolute; width: 3px; height: 64px; right: -3px; top: 148px; background: #252528; border-radius: 0 2px 2px 0; }

.phone-body {
  background: linear-gradient(145deg, #2e2e32 0%, #1a1a1e 50%, #111114 100%);
  border-radius: 44px;
  padding: 10px;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.12),
    inset 0 0 0 1px rgba(0,0,0,0.5),
    0 2px 4px rgba(255,255,255,0.04) inset;
}

.phone-screen {
  background: #09090C;
  border-radius: 36px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 580px;
}

.d-island {
  width: 90px; height: 28px;
  background: #000;
  border-radius: 20px;
  margin: 10px auto 0;
  flex-shrink: 0;
}

.d-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px 4px;
  flex-shrink: 0;
}
.d-time { font-size: 12px; font-weight: 700; color: white; letter-spacing: -0.02em; }
.d-icons { display: flex; align-items: center; gap: 5px; }
.d-battery { display: flex; align-items: center; gap: 1px; }
.d-bat-body {
  width: 20px; height: 10px;
  border: 1.5px solid rgba(255,255,255,0.8);
  border-radius: 3px;
  position: relative; overflow: hidden;
}
.d-bat-fill { position: absolute; left: 1px; top: 1px; bottom: 1px; width: 75%; background: white; border-radius: 1.5px; }
.d-bat-tip { width: 2px; height: 5px; background: rgba(255,255,255,0.6); border-radius: 0 1px 1px 0; }

/* ── Slide container ── */
.slide-container {
  flex: 1;
  overflow: hidden;
  position: relative;
  min-height: 0;
}

.slide {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 8px 12px 12px;
  gap: 8px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}
.slide.is-active {
  opacity: 1;
  pointer-events: auto;
}

/* mobile step info transition — synced with phone slide crossfade (0.35s) */
.fade-up-enter-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-up-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.fade-up-enter-from { opacity: 0; transform: translateY(10px); }
.fade-up-leave-to { opacity: 0; transform: translateY(-8px); }

/* ── Shared app components ── */
.app-hdr { display: flex; justify-content: space-between; align-items: center; flex-shrink: 0; }
.app-hdr-l { display: flex; flex-direction: column; gap: 1px; }
.app-logo { font-size: 15px; font-weight: 900; color: white; letter-spacing: -0.03em; }
.app-loc { font-size: 9px; color: rgba(255,255,255,0.45); }
.app-hdr-r { display: flex; gap: 8px; }
.icon-btn {
  width: 28px; height: 28px;
  background: rgba(255,255,255,0.07);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.7);
  position: relative; flex-shrink: 0;
}
.notif-dot {
  position: absolute; top: 4px; right: 4px;
  width: 6px; height: 6px;
  background: #FF6B6B; border-radius: 50%;
  border: 1px solid #09090C;
}

.mood-tags { display: flex; gap: 6px; overflow: hidden; flex-shrink: 0; }
.mood-tag {
  font-size: 10px; font-weight: 600;
  padding: 4px 10px; border-radius: 100px;
  color: rgba(255,255,255,0.45);
  background: rgba(255,255,255,0.06);
  white-space: nowrap; flex-shrink: 0;
}
.mood-tag.active {
  background: rgba(92,67,232,0.25);
  color: var(--purple-200);
  border: 1px solid rgba(92,67,232,0.4);
}

.spot-grid { display: flex; gap: 6px; flex: 1; overflow: hidden; }
.spot-card { border-radius: 14px; position: relative; overflow: hidden; flex-shrink: 0; }
.card-tall { flex: 1; }
.spot-col { display: flex; flex-direction: column; gap: 6px; flex: 1; }
.card-short { flex: 1; }
.spot-ov { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%); }
.spot-info { position: absolute; bottom: 8px; left: 8px; right: 8px; }
.spot-tag-sm { font-size: 8px; font-weight: 700; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px; }
.spot-name { font-size: 11px; font-weight: 700; color: white; line-height: 1.2; }
.spot-meta { display: flex; gap: 6px; margin-top: 2px; }
.spot-meta span { font-size: 8px; color: rgba(255,255,255,0.6); }

.ai-banner {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 10px;
  background: rgba(92,67,232,0.15);
  border: 1px solid rgba(92,67,232,0.3);
  border-radius: 10px; flex-shrink: 0;
  margin-bottom: 10px;
}
.ai-icon { font-size: 14px; }
.ai-lbl { font-size: 10px; font-weight: 700; color: var(--purple-200); }
.ai-sub { font-size: 9px; color: rgba(255,255,255,0.4); }
.ai-arr { font-size: 13px; color: var(--purple-200); margin-left: auto; }

/* ── Upload slide ── */
.slide-upload { justify-content: space-between; }
.upload-hdr { flex-shrink: 0; }
.upload-title { font-size: 16px; font-weight: 800; color: white; margin-bottom: 4px; }
.upload-sub { font-size: 10px; color: rgba(255,255,255,0.45); }
.upload-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; flex: 1; }
.upload-img {
  border-radius: 10px; position: relative;
  min-height: 70px; overflow: hidden;
  opacity: 0.7; transition: opacity 0.2s;
  border: 1.5px solid transparent;
}
.upload-img.sel {
  opacity: 1;
  border-color: var(--purple-200);
}
.photo-noise {
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
  opacity: 0.4;
  pointer-events: none;
}
.photo-scene {
  position: absolute; bottom: 6px; left: 6px;
}
.photo-tag {
  font-size: 8px; font-weight: 700;
  color: rgba(255,255,255,0.7);
  background: rgba(0,0,0,0.35);
  padding: 2px 6px; border-radius: 4px;
  letter-spacing: 0.04em;
}
.check-overlay {
  position: absolute; top: 5px; right: 5px;
}
.camera-icon {
  position: absolute; top: 5px; right: 5px;
}
.upload-footer { display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
.upload-count { font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.5); }
.upload-cta { font-size: 11px; font-weight: 700; color: white; background: var(--purple); padding: 6px 14px; border-radius: 100px; }

/* ── Map slide ── */
.slide-map-view { padding: 0; gap: 0; }
.map-area { flex: 1; position: relative; overflow: hidden; background: #0d0e14; min-height: 0; }
.map-grid-bg {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 28px 28px;
}
.map-pin { position: absolute; display: flex; flex-direction: column; align-items: center; gap: 3px; }
.pin-dot { width: 12px; height: 12px; background: var(--purple); border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 8px rgba(92,67,232,0.6); }
.pin-lbl { font-size: 8px; font-weight: 700; color: white; background: rgba(92,67,232,0.9); padding: 2px 6px; border-radius: 4px; white-space: nowrap; }
.map-badge { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); font-size: 10px; font-weight: 700; color: white; background: rgba(92,67,232,0.85); padding: 4px 12px; border-radius: 100px; white-space: nowrap; }
.bottom-sheet { background: #12131a; border-radius: 16px 16px 0 0; padding: 8px 12px 12px; flex-shrink: 0; border-top: 1px solid rgba(255,255,255,0.07); }
.sheet-handle { width: 32px; height: 3px; background: rgba(255,255,255,0.2); border-radius: 2px; margin: 0 auto 8px; }
.sheet-title { font-size: 11px; font-weight: 700; color: white; margin-bottom: 8px; }
.sheet-cards { display: flex; gap: 8px; overflow: hidden; }
.sheet-card { width: 90px; height: 70px; flex-shrink: 0; border-radius: 10px; position: relative; overflow: hidden; }
.sheet-card-info { position: absolute; bottom: 6px; left: 6px; right: 6px; }
.sheet-dist { font-size: 8px; color: rgba(255,255,255,0.5); }

/* ── Route slide ── */
.slide-route { justify-content: space-between; }
.route-hdr { display: flex; justify-content: space-between; align-items: flex-start; flex-shrink: 0; }
.route-eyebrow { font-size: 9px; font-weight: 700; color: var(--purple-200); margin-bottom: 2px; letter-spacing: 0.05em; text-transform: uppercase; }
.route-day { font-size: 15px; font-weight: 800; color: white; }
.route-edit-btn { font-size: 10px; font-weight: 600; color: var(--purple-200); background: rgba(92,67,232,0.15); padding: 4px 10px; border-radius: 6px; }
.route-stops { display: flex; flex-direction: column; flex: 1; padding: 4px 0; }
.route-stop { display: flex; align-items: flex-start; gap: 8px; }
.rs-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.rs-num { width: 20px; height: 20px; border-radius: 50%; background: var(--purple); display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; color: white; flex-shrink: 0; }
.rs-connector { width: 1px; flex: 1; background: rgba(92,67,232,0.3); margin: 2px 0; min-height: 18px; }
.rs-body { display: flex; flex-direction: column; flex: 1; padding: 1px 0 18px; }
.rs-name { font-size: 11px; font-weight: 700; color: white; }
.rs-type { font-size: 9px; color: rgba(255,255,255,0.4); }
.rs-time { font-size: 9px; font-weight: 600; color: var(--purple-200); flex-shrink: 0; margin-top: 2px; }
.route-save { font-size: 12px; font-weight: 700; color: white; background: var(--purple); border-radius: 10px; padding: 10px; text-align: center; flex-shrink: 0; margin-bottom: 10px; }

/* ── Bottom nav ── */
.d-bottom-nav { display: flex; justify-content: space-around; align-items: center; padding: 6px 4px 8px; border-top: 1px solid rgba(255,255,255,0.06); flex-shrink: 0; }
.d-nav-item { display: flex; flex-direction: column; align-items: center; gap: 2px; color: rgba(255,255,255,0.3); flex: 1; }
.d-nav-item.active { color: var(--purple); }
.d-nav-item span { font-size: 8px; font-weight: 600; }
.d-home-bar { width: 100px; height: 4px; background: rgba(255,255,255,0.25); border-radius: 3px; margin: 6px auto 2px; flex-shrink: 0; }

/* ── Desktop step cards ── */
.demo-steps {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 340px;
  flex: 1;
}
.demo-step {
  padding: 16px 20px;
  border-radius: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}
.demo-step:hover { background: rgba(255,255,255,0.03); }
.demo-step.active { background: rgba(92,67,232,0.08); border-color: rgba(92,67,232,0.25); }

.step-track { height: 2px; background: rgba(255,255,255,0.08); border-radius: 2px; margin-bottom: 12px; overflow: hidden; }
.step-progress { height: 100%; background: var(--purple); width: 0; border-radius: 2px; }
.step-progress.running { animation: step-fill 4s linear forwards; }
@keyframes step-fill { from { width: 0; } to { width: 100%; } }

.step-content { display: flex; gap: 14px; align-items: flex-start; }
.step-num { font-size: 11px; font-weight: 800; color: rgba(255,255,255,0.2); letter-spacing: 0.05em; flex-shrink: 0; margin-top: 2px; transition: color 0.3s; }
.demo-step.active .step-num { color: var(--purple-200); }
.step-title { font-size: 15px; font-weight: 700; color: rgba(255,255,255,0.4); margin-bottom: 4px; transition: color 0.3s; }
.demo-step.active .step-title { color: var(--white); }
.step-desc { font-size: 13px; line-height: 1.55; color: rgba(255,255,255,0.25); transition: color 0.3s; }
.demo-step.active .step-desc { color: rgba(255,255,255,0.5); }

/* ── Mobile step info (hidden on desktop) ── */
.mobile-step-info { display: none; }

/* ── Responsive ── */
@media (max-width: 860px) {
  .demo-steps { display: none; }
  .mobile-step-info { display: block; margin-top: 32px; text-align: center; }

  .demo-layout {
    flex-direction: column;
    gap: 0;
  }

  .phone-outer {
    width: 270px;
  }

  .mobile-step-body {
    padding: 0 16px;
  }
  .mobile-step-num {
    display: inline-block;
    font-size: 11px;
    font-weight: 800;
    color: var(--purple-200);
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }
  .mobile-step-title {
    font-size: 22px;
    font-weight: 800;
    color: var(--white);
    margin-bottom: 10px;
    letter-spacing: -0.02em;
  }
  .mobile-step-desc {
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255,255,255,0.5);
  }
}

@media (max-width: 480px) {
  :deep(.section-head) { margin-bottom: 24px; }
  :deep(.section-title) { font-size: 22px; margin-bottom: 8px; }
  :deep(.section-sub) { font-size: 14px; }

  /* 프레임 제거, 스크린만 */
  .phone-outer { width: 220px; filter: none; }
  .pb-silent, .pb-vol-up, .pb-vol-dn, .pb-power { display: none; }
  .phone-body {
    background: transparent;
    border-radius: 24px;
    padding: 0;
    box-shadow: 0 0 0 1.5px rgba(255,255,255,0.12);
  }
  .phone-screen { height: 440px; border-radius: 24px; }
  .d-island { display: none; }
  .d-status { padding-top: 12px; }

  .mobile-step-info { margin-top: 20px; }
  .mobile-step-title { font-size: 18px; margin-bottom: 6px; }
  .mobile-step-desc { font-size: 13px; }
}
</style>
