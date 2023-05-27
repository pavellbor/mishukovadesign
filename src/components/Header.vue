<script setup lang="ts">
import type { Theme } from '@/types/Theme'
import { ref, watch } from 'vue';

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

const isNavVisible = ref(false)

watch(isNavVisible, (val) => {
  if (val) {
    document.body.style.position = 'fixed'
  } else {
    document.body.style.position = 'static'
  }
})
</script>

<template>
  <header class="app-header animate__animated animate__fadeInDown">
    <div class="app-header__wrapper wrapper">
      <div class="app-header__logo">Anastasiya Mishukova</div>
      <div class="app-header__mobile-col" :class="{'app-header__mobile-col--active': isNavVisible}">
        <button class="app-header__mobile-burger" @click="isNavVisible = !isNavVisible">
          <i v-if="!isNavVisible" class="bi bi-list"></i>
          <i v-else class="bi bi-x-lg"></i>
        </button>
        <div class="app-header__mobile-nav" :class="{'app-header__mobile-nav--visible': isNavVisible}">
          <nav class="app-header__nav-list">
            <a class="app-header__nav-item" href="#about" @click="isNavVisible = !isNavVisible">Обо мне</a>
            <a class="app-header__nav-item" href="#projects" @click="isNavVisible = !isNavVisible">Проекты</a>
            <a class="app-header__nav-item" href="#contacts" @click="isNavVisible = !isNavVisible">Контакты</a>
          </nav>
          <button class="app-header__theme-toggle" @click="$emit('toggleTheme')">
            <i
              :class="{
                'bi-brightness-high': theme === 'light',
                'bi-moon': theme === 'dark'
              }"
            ></i>
            <span>{{ theme === 'light' ? 'Светлый' : 'Темный' }}</span>
          </button>
        </div>
      </div>
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

@media (min-width: 769px) {
  [class*='mobile'] {
    display: contents;
  }

  .app-header__mobile-burger {
    display: none;
  }
}


@media (max-width: 769px) {
  .app-header {
    position: fixed;
    background: var(--color-header-background);
  }

  .app-header__logo {
    font-size: 18px;
  }

  .app-header__wrapper {
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  .app-header__mobile-col {
    margin-left: auto;
  }

  .app-header__mobile-col--active .app-header__mobile-burger {
    color: var(--color-text-reverse)
  }

  .app-header__mobile-burger {
    font-size: 30px;
    border: none;
    background: none;
    padding: 0;
    position: relative;
    z-index: 1;
    color: var(--color-text);
  }
  
  .app-header__mobile-nav {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    padding: 90px 50px;
    font-size: 40px;
    display: none;
    flex-direction: column;
    gap: 30px;
    align-content: start;
    background: var(--color-text);
    color: var(--color-text-reverse);
  }

  .app-header__mobile-nav--visible {
    display: flex;
  }

  .app-header__nav-list {
    display: contents;
  }

  .app-header__theme-toggle {
    margin-top: auto;
    color: inherit;
  }

  .app-header__theme-toggle span {
    display: none;
  }
}
</style>
