<template>
  <aside class="app-aside animate__animated animate__fadeInRight">
    <div class="app-aside__list">
      <a class="app-aside__item" href="https://www.behance.net/nastyammi" target="_blank">
        <i class="bi bi-behance"></i>
      </a>
      <a class="app-aside__item" href="https://dribbble.com/Nastyami" target="_blank">
        <i class="bi bi-dribbble"></i>
      </a>
    </div>
  </aside>
</template>

<style scoped>
.app-aside {
  position: fixed;
  top: calc(50% - 76px);
  right: 0;
  transform: translateY(-50%);
  color: var(--color-button-text);
  background-color: var(--color-button-background);
  animation-delay: 1.5s;
  border: 1px solid var(--color-button-border);
  border-right: none;
}

.app-aside__list {
  display: grid;
  gap: 50px;
  padding: 20px 15px;
}

.app-aside__item {
  font-size: 25px;
  background-image: none;
  transition: 0.3s;
}

.app-aside__item:hover {
  color: #d13787;
}

@media (max-width: 769px) {
  .app-aside {
    position: absolute;
    top: calc(50% - 61px);
    background-color: var(--color-aside-background);
    color: #d83b8d;
    border: none;
  }

  .app-aside__list {
    gap: 30px;
    padding: 15px 10px;
  }
}
</style>
