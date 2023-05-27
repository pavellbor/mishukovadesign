<script setup lang="ts">
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <section class="contacts" id="contacts">
    <div class="contacts__wrapper wrapper" v-intersect="['animate__animated', 'animate__fadeInUp']">
      <h3 class="contacts__title">Давайте обсудим проект, сотрудничество или идею</h3>
      <a
        class="contacts__contact-btn btn btn--with-arrow"
        href="https://t.me/nastyaaami"
        target="_blank"
      >
        Свяжитесь со мной <i class="bi bi-arrow-up-right-circle-fill"></i>
      </a>
      <button class="contacts__up-btn up-btn" @click="scrollTop">
        <i class="bi bi-arrow-up"></i>
        В начало
      </button>
    </div>
  </section>
</template>

<style scoped>
.contacts {
  padding-top: 125px;
  margin-bottom: 60px;
}

.contacts__wrapper:not(.animate__animated) {
  opacity: 0;
}

.contacts__wrapper {
  position: relative;
}

.contacts__title {
  max-width: 920px;
  margin-bottom: 30px;
  font-size: 80px;
  line-height: 76px;
}

.contacts__up-btn {
  position: absolute;
  bottom: 0;
  right: 20px;
  cursor: pointer;
}

@media (max-width: 769px) {
  .contacts {
    padding-top: 122px;
  }

  .contacts__title {
    font-size: 40px;
    line-height: normal;
  }

  .contacts__up-btn {
    display: none;
  }
}
</style>
