import { reactive } from "vue";

export const store = reactive({
  search: new URLSearchParams(window.location.search).get("q"),
  baseUrl: "http://localhost:8000/",
});
