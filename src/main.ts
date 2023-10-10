import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "./App.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
