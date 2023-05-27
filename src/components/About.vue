<template>
  <section class="about" id="about">
    <div class="about__wrapper wrapper" v-intersect="['animate__animated', 'animate__fadeInUp']">
      <div class="about__content">
        <div class="about__photo-block" v-intersect="['animate__animated', 'animate__fadeInLeft']">
          <img class="about__photo" src="@/assets/photo.png" />
        </div>
        <div class="about__text-block">
          <h2 class="about__title">Hi! I'm Nastya</h2>
          <p class="about__text" v-intersect="['animate__animated', 'animate__fadeInUp']">
            <!-- Я помогаю цифровым продуктам развиваться и достигать максимального потенциала в руках
            пользователей. -->
            Меня зовут Анастасия Мишукова. Мне 26 лет, живу в Санкт-Петербурге. Горю UX/UI-дизайном.
          </p>
          <p class="about__text" v-intersect="['animate__animated', 'animate__fadeInUp']">
            Дизайн для меня – безумно увлекательная область. Мне нравится воплощать смелые идеи,
            креативно решать сложные задачи и всегда учиться новому.
          </p>
          <p class="about__text" v-intersect="['animate__animated', 'animate__fadeInUp']">
            В свободное время занимаюсь йогой и медитацией, люблю читать книги по психологии.
            Интересуюсь искусством, посещаю выставки.
          </p>
          <!-- <a class="about__more-link btn">Подробнее</a> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  place-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 125px;
  padding-bottom: 125px;
}

.about__wrapper:not(.animate__animated) {
  opacity: 0;
}

.about__title {
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 90px;
  font-family: 'PPMori';
}

.about__content {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 100px;
}

.about__photo-block {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 320px;
  border-radius: 20px;
  background: linear-gradient(-45deg, #482da9, #583ac1, #d83b8d, #c22f7b);
  background-size: 1000px;
  animation: animated_text 10s ease-in-out infinite;
  -moz-animation: animated_text 10s ease-in-out infinite;
  -webkit-animation: animated_text 10s ease-in-out infinite;
  border-radius: 20px;
}

.about__text-block {
  padding-top: 50px;
  padding-bottom: 50px;
}

@keyframes animated_text {
  0% {
    background-position: 0px 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0px 50%;
  }
}
.about__photo {
  width: 100%;
  height: auto;
  /* box-shadow: 10px 10px 0 var(--c-bluish-black); */
  /* transform: rotate(15deg); */
  border-radius: 20px;
}

.about__text-block {
  display: grid;
  gap: 30px;
  justify-items: start;
  align-content: center;
  /* padding-right: 100px; */
}

.about__text {
  font-size: 28px;
}
</style>
