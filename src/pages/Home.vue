<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    setUserId(index) {
      store.setUserId(index);
    },
  },
};
</script>

<template>
  <div class="container mx-auto py-12">
    <h1 class="text-center text-3xl font-extrabold mb-7">
      Welcome in our Portfolios
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 md:p-0 lg:p-0"
    >
      <a v-for="index in 6" href="#" @click.prevent="setUserId(index)">
        <div class="card group">
          <img
            class="group-hover:object-none"
            src="../../public/img/web-developer-portfolio.png"
            alt="img"
          />
          <div class="title text-lg font-bold text-center">
            Developer N° {{ index }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
