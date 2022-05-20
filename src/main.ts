import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/tailwind.css'
import 'material-icons/iconfont/material-icons.css'
import VueCarousel from '@chenfengyuan/vue-carousel'

import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";

// createApp(App).component(VueCarousel.name, VueCarousel).use(store).use(router).use(plugin, defaultConfig).mount('#app')

const app = createApp(App);
app.component(VueCarousel.name, VueCarousel);
app.use(store);
app.use(router);
app.use(plugin, defaultConfig);

app.mount("#app");

// createApp(App).component(VueCarousel.name, VueCarousel).use(store).use(router).mount('#app')
