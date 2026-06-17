<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <PersonaSection />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <ValueSection />
      <CoreFeaturesSection />
      <AdditionalFeaturesSection />
      <GoalsSection />
      <FinalOutputSection />
      <WaitlistSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: { lang: locale },
})
</script>
