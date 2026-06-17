<template>
  <section id="goals" class="section goals-section">
    <div class="goals-bg" />
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow" style="color: var(--purple-200)">{{ $t('goals.eyebrow') }}</span>
        <h2 class="section-title" style="color: var(--white)">{{ $t('goals.title') }}</h2>
        <p class="section-sub" style="color: rgba(255,255,255,0.55)">{{ $t('goals.subtitle') }}</p>
      </div>
      <div class="goals-grid">
        <div v-for="(item, i) in items" :key="i" class="goal-card">
          <span class="goal-metric">{{ item.metric }}</span>
          <span class="goal-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const items = computed(() => {
  const raw = tm('goals.items') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    metric: rt(item.metric),
    label: rt(item.label),
  }))
})
</script>

<style scoped>
.goals-section {
  position: relative;
  overflow: hidden;
}

.goals-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--purple-900) 0%, var(--grey-800) 50%, var(--purple-800) 100%);
}
.goals-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(92, 67, 232, 0.3) 0%, transparent 70%);
}

.container {
  position: relative;
  z-index: 1;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px;
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: rgba(255,255,255,0.06);
  border-radius: 20px;
  overflow: hidden;
}

.goal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  background: rgba(255,255,255,0.03);
  text-align: center;
  transition: background 0.2s;
}
.goal-card:hover {
  background: rgba(92, 67, 232, 0.15);
}

.goal-metric {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--white);
  line-height: 1;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #fff 0%, var(--purple-200) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.goal-label {
  font-size: 14px;
  line-height: 1.45;
  color: rgba(255,255,255,0.45);
  max-width: 120px;
}

@media (max-width: 640px) {
  .goals-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
