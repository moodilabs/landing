<template>
  <section class="section section--soft">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">{{ $t('output.eyebrow') }}</span>
        <h2 class="section-title">{{ $t('output.title') }}</h2>
        <p class="section-sub">{{ $t('output.subtitle') }}</p>
      </div>
      <div class="output-grid">
        <div v-for="(item, i) in items" :key="i" class="output-card">
          <div class="output-icon">{{ item.icon }}</div>
          <h3 class="output-title">{{ item.title }}</h3>
          <p class="output-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const items = computed(() => {
  const raw = tm('output.items') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    icon: rt(item.icon),
    title: rt(item.title),
    desc: rt(item.desc),
  }))
})
</script>

<style scoped>
.output-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.output-card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 32px;
  background: var(--white);
  border-radius: 20px;
  border: 1px solid var(--grey-0);
  transition: all 0.2s ease;
}
.output-card:hover {
  border-color: var(--purple-200);
  box-shadow: 0 12px 40px rgba(92, 67, 232, 0.08);
  transform: translateY(-2px);
}

.output-icon {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 14px;
  background: var(--purple-10);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.output-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--grey-800);
  margin-bottom: 8px;
}

.output-desc {
  font-size: 14px;
  line-height: 1.65;
  color: var(--grey-400);
}

@media (max-width: 640px) {
  .output-grid { grid-template-columns: 1fr; }
  .output-card { flex-direction: column; gap: 16px; }
}
</style>
