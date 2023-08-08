<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div class="template">
    <header class="header text-white bg-blue-900">
      <AppHeader />
    </header>

    <main class="mb-20">
      <router-view></router-view>
    </main>

    <footer class="text-white bg-blue-800">
      <AppFooter />
    </footer>
  </div>
</template>

<style lang="scss">
.header {
  padding: 0.15rem;
}
</style>
