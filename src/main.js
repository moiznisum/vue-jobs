import './assets/main.css'
import 'primeicons/primeicons.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { createApp } from 'vue'
import App from './App.vue'

import router from "@/router";

createApp(App)
    .use(router)
    .use(Toast)
    .mount('#app')
