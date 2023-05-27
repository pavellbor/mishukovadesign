<script setup lang="ts">
import type { Theme } from '@/types/Theme'

withDefaults(
  defineProps<{
    theme: Theme
  }>(),
  {
    theme: 'light'
  }
)

defineEmits<{
  (e: 'toggleTheme'): void
}>()
</script>

<template>
  <header class="app-header animate__animated animate__fadeInDown">
    <div class="app-header__wrapper wrapper">
      <div class="app-header__logo">Anastasiya Mishukova</div>
      <nav class="app-header__nav-list">
        <a class="app-header__nav-item" href="#about">Обо мне</a>
        <a class="app-header__nav-item" href="#projects">Проекты</a>
        <a class="app-header__nav-item" href="#contacts">Контакты</a>
      </nav>
      <button class="app-header__theme-toggle" @click="$emit('toggleTheme')">
        <i
          :class="{
            'bi-brightness-high': theme === 'light',
            'bi-moon': theme === 'dark'
          }"
        ></i>
        {{ theme === 'light' ? 'Светлый' : 'Темный' }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: absolute;
  width: 100%;
  animation-delay: 1.5s;
  z-index: 1;
}

.app-header__wrapper {
  display: flex;
  gap: 70px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.app-header__logo {
  font-family: 'PPMori', Arial, Helvetica, sans-serif;
  font-size: 19px;
}

.app-header__nav-list {
  display: flex;
  gap: 30px;
  margin-left: auto;
}

.app-header__theme-toggle {
  display: flex;
  gap: 8px;
  width: 110px;
  font: inherit;
  color: var(--color-text);
  background: none;
  border: none;
  cursor: pointer;
}

.app-header__theme-toggle i {
  transition: transform 0.3s ease-in-out;
}

.app-header__theme-toggle:hover i {
  transform: rotate(45deg);
}
</style>
