<template>
  <section id="solution" class="section section--dark">
    <div class="container">
      <div class="solution-layout">
        <div class="solution-text">
          <span class="section-eyebrow">{{ $t('solution.eyebrow') }}</span>
          <h2 class="section-title" v-html="titleHtml" />
          <p class="section-sub">{{ $t('solution.subtitle') }}</p>
        </div>
        <div class="steps">
          <div v-for="(step, i) in steps" :key="i" class="step">
            <div class="step-num">{{ step.num }}</div>
            <div class="step-body">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-desc">{{ step.desc }}</p>
            </div>
            <div v-if="i < steps.length - 1" class="step-line" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
const steps = computed(() => {
  const raw = tm('solution.steps') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    num: rt(item.num),
    title: rt(item.title),
    desc: rt(item.desc),
  }))
})
const titleHtml = computed(() => t('solution.title').replace('\n', '<br>'))
</script>

<style scoped>
.solution-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: start;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.step {
  display: flex;
  gap: 20px;
  position: relative;
}

.step-num {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(92, 67, 232, 0.2);
  border: 1px solid rgba(92, 67, 232, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--purple-200);
  font-variant-numeric: tabular-nums;
}

.step-body {
  padding-bottom: 40px;
  flex: 1;
}

.step-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 8px;
}

.step-desc {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255,255,255,0.5);
}

.step-line {
  position: absolute;
  left: 24px;
  top: 48px;
  bottom: 0;
  width: 1px;
  background: rgba(92, 67, 232, 0.2);
}

@media (max-width: 768px) {
  .solution-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
</style>
