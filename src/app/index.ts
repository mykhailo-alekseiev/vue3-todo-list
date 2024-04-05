import { createApp } from 'vue';
import App from './App.vue';
import { pinia, router } from './providers';

export const app = createApp(App).use(pinia).use(router);
