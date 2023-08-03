<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      arrUsers: [],
      // loader: true,
    };
  },
  methods: {
    setUserId(index) {
      store.setUserId(index);
    },
    getUsers() {
      // this.loader = true;
      axios.get("http://localhost:8000/api/users").then((response) => {
        this.arrUsers = response.data.results;
        // this.loader = false;
      });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<template>
  <!-- <div class="lg:container lg:mx-auto" v-if="loader">
    <h1 class="text-center text-3xl font-bold text-red-600">CARICAMENTO</h1>
  </div> -->
  <div class="container mx-auto py-12">
    <h1 class="text-center text-3xl font-extrabold mb-7">
      Welcome in our Portfolios
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 md:p-0 lg:p-0"
    >
      <template v-for="user in arrUsers" :key="user.id">
        <router-link
          :to="{ name: 'index' }"
          @click.prevent="setUserId(user.id)"
        >
          <div class="card group">
            <img
              class="group-hover:object-none"
              :src="store.baseUrl + `storage/` + user.image"
              :alt="user.name"
            />
            <div class="title text-lg font-bold text-center">
              {{ user.name }}
            </div>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
