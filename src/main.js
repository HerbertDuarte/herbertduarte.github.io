import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/global.css';
import './assets/index.css';
import { MotionPlugin } from '@vueuse/motion';
const app = createApp(App);

app.use(router);
app.use(MotionPlugin)

app.mount('#app');
