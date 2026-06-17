<template>
  <section id="persona" class="section">
    <div class="container">
      <div class="section-head">
        <span class="section-eyebrow">{{ $t('persona.eyebrow') }}</span>
        <h2 class="section-title">{{ $t('persona.title') }}</h2>
        <p class="section-sub">{{ $t('persona.subtitle') }}</p>
      </div>
      <div class="persona-grid">
        <div v-for="(p, i) in personas" :key="i" class="persona-card" :style="{ '--accent': accents[i] }">
          <div class="persona-avatar">
            <span>{{ p.initial }}</span>
          </div>
          <div class="persona-info">
            <span class="persona-name">{{ p.name }}</span>
            <span class="persona-from">{{ p.from }}</span>
          </div>
          <span class="persona-role">{{ p.role }}</span>
          <blockquote class="persona-quote">"{{ p.quote }}"</blockquote>
          <div class="persona-traits">
            <span v-for="trait in p.traits" :key="trait" class="trait-tag">{{ trait }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

const personas = computed(() => {
  const raw = tm('persona.items') as any[]
  if (!raw || !Array.isArray(raw)) return []
  return raw.map((p: any) => ({
    name: rt(p.name),
    from: rt(p.from),
    role: rt(p.role),
    quote: rt(p.quote),
    initial: rt(p.name).charAt(0),
    traits: Array.isArray(p.traits) ? (p.traits as any[]).map((t: any) => rt(t)) : [],
  }))
})

const accents = ['#735EED', '#5C43E8', '#9A8CF8']
</script>

<style scoped>
.persona-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.persona-card {
  background: var(--white);
  border: 1px solid var(--grey-0);
  border-radius: 20px;
  padding: 32px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
}
.persona-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--accent);
  border-radius: 20px 20px 0 0;
}
.persona-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(0,0,0,0.08);
}

.persona-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #000));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
}

.persona-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 12px;
}

.persona-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--grey-800);
}

.persona-from {
  font-size: 13px;
  color: var(--grey-400);
}

.persona-role {
  display: inline-flex;
  padding: 5px 12px;
  background: var(--purple-10);
  color: var(--purple);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 20px;
}

.persona-quote {
  font-size: 14px;
  line-height: 1.65;
  color: var(--grey-500);
  margin-bottom: 20px;
  font-style: italic;
  padding-left: 12px;
  border-left: 2px solid var(--grey-0);
}

.persona-traits {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.trait-tag {
  font-size: 12px;
  font-weight: 500;
  color: var(--grey-400);
  background: #F8F8FA;
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid var(--grey-0);
}

@media (max-width: 900px) {
  .persona-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
</style>
