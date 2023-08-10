import { createApp } from "vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import "./style.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";

import { router } from "./router";

createApp(App).use(router).mount("#app");
