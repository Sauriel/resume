<template>
  <div class="language-switcher">
    <NuxtLink
      v-for="availableLocale in availableLocales"
      :key="availableLocale.code"
      v-tooltip="{
        text: $t('ui.language-switcher', { locale: availableLocale.name }),
        position: 'top',
      }"
      :to="switchLocalePath(availableLocale.code)"
      @click.prevent.stop="() => onLanguageSwitcherClick(availableLocale)"
    >
      <Icon name="ion:language" />
      {{ locale }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n';

const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => locales.value.filter((i) => i.code !== locale.value));

function onLanguageSwitcherClick(locale: LocaleObject<'de' | 'en'>) {
  if (!switchLocalePath(locale.code)) {
    setLocale(locale.code);
  }
}
</script>

<style scoped>
.language-switcher a {
  text-transform: uppercase;
  gap: 0.5ch;
  text-decoration: none;
  color: var(--color-light);
  transition: all 0.4s ease-in-out;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  padding: 0 0.5em;
  cursor: pointer;
  user-select: none;
}

.language-switcher a:hover {
  background-color: var(--color-light);
  color: var(--color-dark);
}
</style>
