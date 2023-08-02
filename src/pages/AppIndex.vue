<script>
import AppCardProject from "../components/AppCardProject.vue";

export default { components: { AppCardProject } };
</script>
<template>
  <div
    class="lg:container lg:mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 md:px-6 lg:px-4 gap-10 py-4"
  >
    <AppCardProject v-for="index in 6" :key="index" :dataCard="index" />
  </div>
</template>
<style lang="scss" scoped></style>
