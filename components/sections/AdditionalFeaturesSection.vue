<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">{{ $t('additional_features.eyebrow') }}</span>
        <h2 class="section-title" v-html="titleHtml" />
        <p class="section-sub">{{ $t('additional_features.subtitle') }}</p>
      </div>
      <div class="add-grid">
        <div v-for="(item, i) in items" :key="i" class="add-card">
          <span class="add-icon">{{ item.icon }}</span>
          <h3 class="add-title">{{ item.title }}</h3>
          <p class="add-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
const items = computed(() => {
  const raw = tm('additional_features.items') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    icon: rt(item.icon),
    title: rt(item.title),
    desc: rt(item.desc),
  }))
})
const titleHtml = computed(() => t('additional_features.title').replace('\n', '<br>'))
</script>

<style scoped>
.add-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.add-card {
  padding: 28px 24px;
  border-radius: 16px;
  border: 1px solid var(--grey-0);
  background: var(--white);
  transition: all 0.2s ease;
}
.add-card:hover {
  border-color: var(--purple-200);
  box-shadow: 0 8px 24px rgba(92, 67, 232, 0.08);
  transform: translateY(-2px);
}

.add-icon {
  display: block;
  font-size: 28px;
  margin-bottom: 12px;
}

.add-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--grey-800);
  margin-bottom: 8px;
}

.add-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--grey-400);
}

@media (max-width: 900px) {
  .add-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .add-grid { grid-template-columns: 1fr; }
}
</style>
