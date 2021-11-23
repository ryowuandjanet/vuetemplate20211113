import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// TailwindCSS - index.css裡有預載tailwindcss
// import './index.css'

// Bootstrap - 預載boostrap.min.css樣式庫
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

createApp(App).use(router).use(store).mount('#app')
