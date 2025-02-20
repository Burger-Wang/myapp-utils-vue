import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "amfe-flexible";
import { EventManager } from "./utils/inputManager";
import { moveManager } from "./utils/moveManager";

const app = createApp(App);

app.use(router).mount("#app");
new EventManager();
new moveManager();