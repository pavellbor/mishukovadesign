<script setup lang="ts">
import Header from '@/components/Header.vue'
import HeroScreen from '@/components/HeroScreen.vue'
import Benefits from '@/components/Benefits.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Contacts from '@/components/Contacts.vue'
import Aside from '@/components/Aside.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
import { type Theme } from '@/types/Theme'

const theme = ref<Theme>('light')
const toggleTheme = () => {
  if (theme.value === 'light') {
    theme.value = 'dark'
  } else {
    theme.value = 'light'
  }

  document.body.classList.toggle('dark')
}
</script>

<template>
  <Header :theme="theme" @toggle-theme="toggleTheme" />
  <main>
    <HeroScreen />
    <Benefits />
    <About />
    <Projects />
    <Contacts />
  </main>
  <Aside />
  <Footer />
</template>
