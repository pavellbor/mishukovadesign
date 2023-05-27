<template>
  <section class="benefits">
    <div class="benefits__wrapper wrapper" v-intersect="['animate__animated', 'animate__fadeInUp']">
      <div class="benefits__left-col">
        <p class="benefits__desc">
          Помогаю стартапам и владельцам бизнеса сделать визуальное заявление с помощью безупречного
          веб-дизайна, чтобы они могли повысить узнаваемость бренда и продавать больше.
        </p>
        <a class="benefits__contact-btn btn btn--with-arrow" href="https://t.me/nastyaaami" target="_blank">
          Свяжитесь со мной <i class="bi bi-arrow-up-right-circle-fill"></i>
        </a>
      </div>
      <div class="benefits__right-col">
        <ul class="benefits__list">
          <li class="benefits__item">#Figma</li>
          <li class="benefits__item">#UX-исследования</li>
          <li class="benefits__item">#Прототипирование</li>
          <li class="benefits__item">#CJM</li>
          <li class="benefits__item">#User Stories</li>
          <li class="benefits__item">#User Stories, JTBD</li>
          <li class="benefits__item">#UI-kit</li>
          <li class="benefits__item">#Адаптивный Дизайн</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  margin-bottom: 125px;
  animation-delay: 1s;
}

.benefits__wrapper {
  display: grid;
  grid-template-columns: 825px 1fr;
  width: 100%;
}

.benefits__wrapper:not(.animate__animated) {
  opacity: 0;
}

.benefits__left-col {
  display: grid;
  justify-items: start;
  gap: 30px;
}

.benefits__desc {
  padding-right: 140px;
  font-size: 28px;
}

.benefits__list {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
