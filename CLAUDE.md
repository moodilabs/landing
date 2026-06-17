# MOODI Landing — Claude Instructions

## Stack
- Nuxt 3 + Vue 3 (`<script setup lang="ts">`)
- `@nuxtjs/i18n` — all user-facing strings go in `locales/*.json`, never hardcoded
- Global styles only in `assets/css/main.css`; component styles are `<style scoped>`

## Before any UI / styling work

**Always read `DESIGN.md` first.** It contains the full token set, component patterns, and Do/Don't rules for this project. Do not introduce colors, spacing, radii, or font weights that aren't already in the design system without explicit approval.

## File conventions
- Components: `components/sections/XxxSection.vue` for page sections, `components/AppXxx.vue` for layout
- i18n keys mirror component names: `hero.*`, `nav.*`, `persona.*`, etc.
- New sections must include an `id` attribute matching its nav key for smooth-scroll anchoring

## Commit style
Conventional commits: `feat:`, `fix:`, `refactor:`, `chore:`
