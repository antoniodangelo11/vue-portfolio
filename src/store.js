import { reactive } from "vue";

export const store = reactive({
  baseUrl: "http://localhost:8000/",
  userProjects: [],
  userId: null,
  setUserId(index) {
    store.userId = index;
  },
});
