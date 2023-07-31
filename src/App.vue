<script>
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"

// initialize components based on data attribute selectors
// onMounted(() => {
//   initFlowbite();
// });

export default {
  components: {
    AppHeader,
    AppFooter,
  }
};
</script>

<template>
  <div class="template bg-slate-500">
    <header class="header bg-slate-400">
      <AppHeader />
    </header>

    <router-view></router-view>

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
