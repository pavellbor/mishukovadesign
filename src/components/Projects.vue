<template>
  <section class="projects" id="projects">
    <div class="projects__wrapper wrapper" v-intersect="['animate__animated', 'animate__fadeInUp']">
      <h2 class="projects__title">My projects</h2>
      <div class="projects__groups">
        <div class="projects__group" v-intersect="['animate__animated', 'animate__fadeInUp']">
          <h3 class="projects__subtitle">2023</h3>
          <ul class="projects__list">
            <li class="projects__item">
              <img class="projects__item-picture" src="@/assets/raiffeisen.png" />
              <a
                class="projects__item-hover"
                href="https://www.behance.net/gallery/166412629/redizajn-stranicy-platezhej"
                target="_blank"
              >
                <span class="projects__item-btn btn btn--reverse">Смотреть на Behance</span>
              </a>
            </li>
            <li class="projects__item">
              <img class="projects__item-picture" src="@/assets/lazy.png" />
              <a
                class="projects__item-hover"
                href="https://www.behance.net/gallery/165861287/servis-dlja-poiska-interesnyh-sobytij"
                target="_blank"
              >
                <span class="projects__item-btn btn btn--reverse">Смотреть на Behance </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="projects__group" v-intersect="['animate__animated', 'animate__fadeInUp']">
          <h3 class="projects__subtitle">2022</h3>
          <ul class="projects__list">
            <li class="projects__item">
              <img class="projects__item-picture" src="@/assets/mental-health.png" />
              <a
                class="projects__item-hover"
                href="https://www.behance.net/gallery/158215421/chat-bot-dlja-podbora-psihologa"
                target="_blank"
              >
                <span class="projects__item-btn btn btn--reverse">Смотреть на Behance </span>
              </a>
            </li>
            <li class="projects__item">
              <img class="projects__item-picture" src="@/assets/minimalism.png" />
              <a
                class="projects__item-hover"
                href="https://www.behance.net/gallery/161036921/informacionnyj-sajt-pro-minimalizm-v-veb-dizajne"
                target="_blank"
              >
                <span class="projects__item-btn btn btn--reverse">Смотреть на Behance </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  place-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 125px;
  padding-bottom: 125px;
}

.projects__wrapper:not(.animate__animated) {
  opacity: 0;
}

.projects__title {
  margin-bottom: 60px;
  font-weight: 600;
  font-size: 90px;
  font-family: 'PPMori';
}

.projects__groups {
  display: grid;
  gap: 60px;
}

.projects__group {
  display: grid;
  gap: 40px;
}

.projects__subtitle {
  font-weight: 600;
  font-size: 40px;
  font-family: 'PPMori';
}

.projects__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.projects__item {
  position: relative;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
}

.projects__item-hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.5s;
  opacity: 0;
  cursor: pointer;
}

.projects__item-hover:hover {
  opacity: 1;
}

@media (max-width: 769px) {
  .projects {
    padding-top: 125px;
    padding-bottom: 62px;
  }

  .projects__title {
    margin-bottom: 40px;
    font-size: 50px;
  }

  .projects__subtitle {
    font-size: 30px;
  }

  .projects__groups {
    gap: 40px;
  }

  .projects__group {
    gap: 30px;
  }

  .projects__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
