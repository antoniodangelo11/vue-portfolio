<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      arrUsers: [],
      loader: true,
    };
  },
  methods: {
    setUserId(index) {
      store.setUserId(index);
    },
    getUsers() {
      this.loader = true;
      axios.get(store.baseUrl + "api/users").then((response) => {
        this.arrUsers = response.data.results;
        this.loader = false;
      });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<template>
  <div
    class="lg:container lg:mx-auto flex justify-center items-center h-full"
    v-if="loader"
  >
    <h1 class="text-center text-3xl font-bold text-red-600">CARICAMENTO</h1>
  </div>
  <div class="container mx-auto py-12" v-else>
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
          <div class="card relative rounded-3xl overflow-hidden">
            <img
              class="group-hover:object-none w-2/5 absolute left-1/4"
              :src="store.baseUrl + `storage/uploads/` + user.image"
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

<style lang="scss" scoped>
.card {
  aspect-ratio: 8 / 5;
  --bg: hsl(330 10% calc(1% - (var(--hover) * 10%)));
  --accent: #93c5fd;
  transition: background 0.2s;
  background: radial-gradient(
      circle at top left,
      var(--accent),
      transparent 100%
    ),
    var(--bg);
}

img {
  top: 20%;
  transform: translateX(calc(var(--hover) * -15%))
    scale(calc(1 + (var(--hover) * 0.2)));
  transition: transform 0.2s;
}

.card {
  --hover: 0;
}

.card:hover {
  --hover: 1;
}
</style>
