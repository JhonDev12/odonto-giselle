import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'


createApp(App)
 .use(router) 
.mount('#app')
                
