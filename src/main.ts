import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import router from './router'
import './assets/tailwind.css'
import 'material-icons/iconfont/material-icons.css'

// createApp(App).use(store).use(router).mount('#app');

createApp(App).use(store).mount('#app')
