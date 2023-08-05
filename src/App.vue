<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

// initialize components based on data attribute selectors
// onMounted(() => {
//   initFlowbite();
// });

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div class="template bg-blue-300">
    <header class="header text-white bg-blue-900">
      <AppHeader />
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="text-white bg-blue-800">
      <AppFooter />
    </footer>
  </div>
</template>

<style lang="scss">
.header {
  // height: 4.3rem;
  padding: 0.15rem;
}

// main {
//   height: calc(100% - 10.3rem);
//   overflow-y: scroll;
// }

// footer {
//   height: 6rem;
// }
</style>
