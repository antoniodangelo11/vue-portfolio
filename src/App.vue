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
  <div class="template">
    <header class="header text-white bg-blue-900">
      <AppHeader />
    </header>

    <main class="mb-40">
      <router-view></router-view>
    </main>

    <footer class="text-white bg-blue-800 fixed bottom-0 left-0 right-0">
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
