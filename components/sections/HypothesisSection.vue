<template>
  <section class="section section--soft">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">{{ $t('hypothesis.eyebrow') }}</span>
        <h2 class="section-title">{{ $t('hypothesis.title') }}</h2>
        <p class="section-sub">{{ $t('hypothesis.subtitle') }}</p>
      </div>
      <div class="hyp-list">
        <div v-for="(item, i) in items" :key="i" class="hyp-card">
          <span class="hyp-num">{{ item.num }}</span>
          <div class="hyp-body">
            <h3 class="hyp-title">{{ item.title }}</h3>
            <p class="hyp-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const items = computed(() => {
  const raw = tm('hypothesis.items') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    num: rt(item.num),
    title: rt(item.title),
    desc: rt(item.desc),
  }))
})
</script>

<style scoped>
.hyp-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
}

.hyp-card {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 32px;
  background: var(--white);
  border-radius: 16px;
  border: 1px solid var(--grey-0);
  transition: all 0.2s ease;
}
.hyp-card:hover {
  border-color: var(--purple-200);
  box-shadow: 0 8px 32px rgba(92, 67, 232, 0.08);
}

.hyp-num {
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 700;
  color: var(--purple);
  background: var(--purple-10);
  padding: 5px 12px;
  border-radius: 100px;
  letter-spacing: 0.05em;
  margin-top: 2px;
}

.hyp-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--grey-800);
  margin-bottom: 8px;
}

.hyp-desc {
  font-size: 15px;
  line-height: 1.65;
  color: var(--grey-400);
}

@media (max-width: 640px) {
  .hyp-card { flex-direction: column; gap: 12px; }
}
</style>
