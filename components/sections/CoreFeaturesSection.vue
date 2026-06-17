<template>
  <section id="features" class="section section--deeper">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">{{ $t('core_features.eyebrow') }}</span>
        <h2 class="section-title" v-html="titleHtml" />
        <p class="section-sub">{{ $t('core_features.subtitle') }}</p>
      </div>
      <div class="features-grid">
        <div v-for="(item, i) in items" :key="i" class="feature-card">
          <div class="feature-header">
            <span class="feature-index">0{{ i + 1 }}</span>
            <span class="tag tag--dark">{{ item.tag }}</span>
          </div>
          <h3 class="feature-title">{{ item.title }}</h3>
          <p class="feature-desc">{{ item.desc }}</p>
          <div class="feature-tags">
            <span v-for="tag in item.tags" :key="tag" class="feature-tag">{{ tag }}</span>
          </div>
          <div class="feature-deco">
            <div class="deco-circle" />
            <div class="deco-circle deco-circle--2" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
const items = computed(() => {
  const raw = tm('core_features.items') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    tag: rt(item.tag),
    title: rt(item.title),
    desc: rt(item.desc),
    tags: Array.isArray(item.tags) ? (item.tags as any[]).map((t: any) => rt(t)) : [],
  }))
})
const titleHtml = computed(() => t('core_features.title').replace('\n', '<br>'))
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
}
.feature-card:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(92, 67, 232, 0.4);
  transform: translateY(-4px);
}

.feature-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.feature-index {
  font-size: 13px;
  font-weight: 700;
  color: rgba(255,255,255,0.2);
  letter-spacing: 0.08em;
}

.feature-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 12px;
}

.feature-desc {
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255,255,255,0.45);
  margin-bottom: 24px;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  position: relative;
  z-index: 1;
}

.feature-tag {
  font-size: 11px;
  font-weight: 600;
  color: var(--purple-200);
  background: rgba(92, 67, 232, 0.15);
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid rgba(92, 67, 232, 0.2);
}

.feature-deco {
  position: absolute;
  bottom: -20px;
  right: -20px;
}

.deco-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(92, 67, 232, 0.15);
  position: absolute;
  bottom: 0;
  right: 0;
}
.deco-circle--2 {
  width: 120px;
  height: 120px;
  bottom: -20px;
  right: -20px;
  opacity: 0.5;
}

@media (max-width: 900px) {
  .features-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
</style>
