<template>
  <section class="hero-screen animate__animated animate__fadeIn">
    <div class="hero-screen__wrapper wrapper">
      <h1 class="hero-screen__title">UX/UI Designer</h1>
      <p class="hero-screen__title-tip animate__animated animate__fadeInUp">
        специализируюсь<br />
        в веб-дизайне и UX / UI.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero-screen {
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  height: 100vh;
  padding-bottom: 30px;
  margin-bottom: 30px;
  animation-delay: 1s;
}

.hero-screen__wrapper {
  display: grid;
  grid-template-columns: 825px 1fr;
  width: 100%;
}

.hero-screen__title {
  height: 310px;
  font-family: 'PPMori', Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 180px;
  line-height: 144px;
  letter-spacing: 4px;
  /* background: linear-gradient(-45deg, #6355a4, #6355a4, #e89a3e, #e89a3e); */
  background: linear-gradient(-45deg, #482da9, #583ac1, #d83b8d, #c22f7b);
  background-size: 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animated_text 10s ease-in-out infinite;
  -moz-animation: animated_text 10s ease-in-out infinite;
  -webkit-animation: animated_text 10s ease-in-out infinite;
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

.hero-screen__title-tip {
  align-self: end;
  margin-bottom: 38px;
  /* animation-delay: 1s; */
}

@media (max-width: 769px) {
  .hero-screen {
    margin-bottom: 95px;
  }
  .hero-screen__wrapper {
    grid-template-columns: auto;
  }
  .hero-screen__title {
    height: 130px;
    margin-bottom: 5px;
    font-size: 70px;
    line-height: 62px;
  }

  .hero-screen__title-tip {
    margin-bottom: 0;
    font-size: 18px;
  }
}
</style>
