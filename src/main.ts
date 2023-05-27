import './assets/styles/main.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'animate.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('intersect', (el, { value }) => {
  const callback = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        console.log('Пользователь почти докрутил до картинки!')

        entry.target.classList.add(...value)
        observer.unobserve(entry.target)
      }
    })
  }

  const options = {
    // root: по умолчанию window, но можно задать любой элемент-контейнер
    rootMargin: '0px 0px 10px 0px',
    threshold: 0,
  }

  const observer = new IntersectionObserver(callback, options)
  observer.observe(el)
})

app.use(router)

app.mount('#app')
