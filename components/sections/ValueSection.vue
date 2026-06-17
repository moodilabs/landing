<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">{{ $t('value.eyebrow') }}</span>
        <h2 class="section-title">{{ $t('value.title') }}</h2>
        <p class="section-sub">{{ $t('value.subtitle') }}</p>
      </div>
      <div class="value-grid">
        <div v-for="(item, i) in items" :key="i" class="value-card">
          <div class="value-icon">{{ item.icon }}</div>
          <h3 class="value-title">{{ item.title }}</h3>
          <p class="value-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const items = computed(() => {
  const raw = tm('value.items') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    icon: rt(item.icon),
    title: rt(item.title),
    desc: rt(item.desc),
  }))
})
</script>

<style scoped>
.value-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.value-card {
  padding: 36px 32px;
  border-radius: 20px;
  background: #FAFAFA;
  border: 1px solid var(--grey-0);
  transition: all 0.25s ease;
}
.value-card:hover {
  background: var(--white);
  border-color: var(--purple-200);
  box-shadow: 0 12px 40px rgba(92, 67, 232, 0.1);
  transform: translateY(-2px);
}

.value-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--purple-10);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--purple);
  font-weight: 700;
  margin-bottom: 20px;
}

.value-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--grey-800);
  margin-bottom: 10px;
}

.value-desc {
  font-size: 15px;
  line-height: 1.65;
  color: var(--grey-400);
}

@media (max-width: 640px) {
  .value-grid { grid-template-columns: 1fr; }
}
</style>
