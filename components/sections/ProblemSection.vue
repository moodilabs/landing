<template>
  <section id="problem" class="section section--tinted">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">{{ $t('problem.eyebrow') }}</span>
        <h2 class="section-title" v-html="titleHtml" />
        <p class="section-sub">{{ $t('problem.subtitle') }}</p>
      </div>
      <div class="problem-grid">
        <div v-for="(item, i) in items" :key="i" class="problem-card">
          <div class="problem-icon">{{ item.icon }}</div>
          <h3 class="problem-title">{{ item.title }}</h3>
          <p class="problem-desc">{{ item.desc }}</p>
          <div class="problem-num">0{{ i + 1 }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
const items = computed(() => {
  const raw = tm('problem.items') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    icon: rt(item.icon),
    title: rt(item.title),
    desc: rt(item.desc),
  }))
})
const titleHtml = computed(() => t('problem.title').replace('\n', '<br>'))
</script>

<style scoped>
.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.problem-card {
  background: var(--white);
  border-radius: 20px;
  padding: 36px 32px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(92, 67, 232, 0.08);
  transition: transform 0.25s, box-shadow 0.25s;
}
.problem-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(92, 67, 232, 0.08);
}

.problem-icon {
  font-size: 36px;
  margin-bottom: 20px;
  line-height: 1;
}

.problem-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--grey-800);
  margin-bottom: 12px;
}

.problem-desc {
  font-size: 15px;
  line-height: 1.65;
  color: var(--grey-400);
}

.problem-num {
  position: absolute;
  bottom: 20px;
  right: 24px;
  font-size: 48px;
  font-weight: 800;
  color: rgba(92, 67, 232, 0.06);
  line-height: 1;
  letter-spacing: -0.04em;
}

@media (max-width: 768px) {
  .problem-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
</style>
