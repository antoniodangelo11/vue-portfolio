<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { initFlowbite } from "flowbite";

export default {
  created() {
    initFlowbite();
  },
  components: {
    AppHeader,
    AppFooter,
  },
  mounted() {
    initFlowbite();
  },
};
</script>

<template>
  <div class="template font-mono">
    <header class="header text-white bg-blue-800">
      <AppHeader />
    </header>

    <main class="mb-20">
      <router-view></router-view>
    </main>

    <footer class="text-white bg-blue-900">
      <AppFooter />
    </footer>
  </div>
</template>

<style lang="scss">
.header {
  padding: 0.15rem;
}
</style>
