import App from './App.vue';
import { head, pinia, router } from './providers';

export const app = createApp(App).use(head).use(pinia).use(router);
