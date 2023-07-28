<script>
  import { onMounted } from "vue";
  import { initFlowbite } from "flowbite";

  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
  });
  
  export default {};
</script>

<template>
  <h1 class="text-3xl font-bold underline text-red-500">
    Hello world!
  </h1>
  <i class="fa-brands fa-facebook"></i>
</template>

<style lang="scss">
</style>
