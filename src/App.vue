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
  <div class="template bg-slate-500">
    <header class="header bg-blue-900">
      <AppHeader />
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="bg-slate-400">
      <AppFooter />
    </footer>
  </div>
</template>

<style lang="scss">
.header {
  padding: 0.15rem;
}
</style>
