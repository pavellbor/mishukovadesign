<template>
  <footer class="app-footer">
    <div class="app-footer__wrapper wrapper">
      <div class="app-footer__contact-list">
        <a class="app-footer__contact-item" href="https://www.behance.net/nastyammi" target="_blank">Behance</a>
        <a class="app-footer__contact-item" href="https://dribbble.com/Nastyami" target="_blank">Dribbble</a>
        <a class="app-footer__contact-item" href="https://instagram.com/mishukova_n_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">Instagram</a>
        <a class="app-footer__contact-item" href="https://t.me/nastyaaami" target="_blank">Telegram</a>
        <a class="app-footer__contact-item" href="mailto:mischukova.nastya@yandex.ru" target="_blank">Email</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--color-footer-border);
}

.app-footer__wrapper {
  padding-top: 30px;
  padding-bottom: 30px;
}

.app-footer__contact-list {
  display: flex;
  gap: 30px;
  justify-content: center;
}
</style>
