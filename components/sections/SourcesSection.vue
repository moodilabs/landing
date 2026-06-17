<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">{{ $t('sources.eyebrow') }}</span>
        <h2 class="section-title">{{ $t('sources.title') }}</h2>
        <p class="section-sub">{{ $t('sources.subtitle') }}</p>
      </div>
      <div class="sources-list">
        <div v-for="(item, i) in items" :key="i" class="source-card">
          <span class="source-num">{{ item.num }}</span>
          <div class="source-body">
            <h3 class="source-title">{{ item.title }}</h3>
            <p class="source-desc">{{ item.desc }}</p>
            <a v-if="item.link" :href="`https://${item.link}`" target="_blank" rel="noopener" class="source-link">
              {{ item.link }}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const items = computed(() => {
  const raw = tm('sources.items') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    num: rt(item.num),
    title: rt(item.title),
    desc: rt(item.desc),
    link: item.link ? rt(item.link) : null,
  }))
})
</script>

<style scoped>
.sources-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 760px;
}

.source-card {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 28px 32px;
  background: var(--white);
  border-radius: 16px;
  border: 1px solid var(--grey-0);
  transition: all 0.2s ease;
}
.source-card:hover {
  border-color: var(--grey-100);
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
}

.source-num {
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 700;
  color: var(--grey);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.05em;
  margin-top: 3px;
  min-width: 28px;
}

.source-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--grey-700);
  margin-bottom: 6px;
}

.source-desc {
  font-size: 14px;
  line-height: 1.65;
  color: var(--grey-400);
  margin-bottom: 10px;
}

.source-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--purple);
  transition: color 0.2s;
}
.source-link:hover { color: var(--purple-400); }

@media (max-width: 640px) {
  .source-card { flex-direction: column; gap: 8px; }
}
</style>
