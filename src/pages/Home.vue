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
      sessionStorage.removeItem("userId");
      sessionStorage.setItem("user_id", index);
      // console.log(sessionStorage.getItem("user_id"));
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
  <!-- loader  -->
  <div
    class="lg:container lg:mx-auto flex justify-center items-center h-screen"
    v-if="loader"
  >
    <div class="loader">
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
      <div class="loader-square"></div>
    </div>
  </div>

  <!-- pagina caricata  -->
  <div class="container mx-auto py-12" v-else>
    <h1 class="text-center text-3xl font-extrabold mb-10 text-white">
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
            <div class="title text-lg font-bold text-center text-white mt-2">
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
  --accent: #2563eb;
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

// loader
@keyframes square-animation {
  0% {
    left: 0;
    top: 0;
  }

  10.5% {
    left: 0;
    top: 0;
  }

  12.5% {
    left: 32px;
    top: 0;
  }

  23% {
    left: 32px;
    top: 0;
  }

  25% {
    left: 64px;
    top: 0;
  }

  35.5% {
    left: 64px;
    top: 0;
  }

  37.5% {
    left: 64px;
    top: 32px;
  }

  48% {
    left: 64px;
    top: 32px;
  }

  50% {
    left: 32px;
    top: 32px;
  }

  60.5% {
    left: 32px;
    top: 32px;
  }

  62.5% {
    left: 32px;
    top: 64px;
  }

  73% {
    left: 32px;
    top: 64px;
  }

  75% {
    left: 0;
    top: 64px;
  }

  85.5% {
    left: 0;
    top: 64px;
  }

  87.5% {
    left: 0;
    top: 32px;
  }

  98% {
    left: 0;
    top: 32px;
  }

  100% {
    left: 0;
    top: 0;
  }
}

.loader {
  position: relative;
  width: 96px;
  height: 96px;
  transform: rotate(45deg);
}

.loader-square {
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  margin: 2px;
  border-radius: 0px;
  background: white;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  animation: square-animation 10s ease-in-out infinite both;
}

.loader-square:nth-of-type(0) {
  animation-delay: 0s;
}

.loader-square:nth-of-type(1) {
  animation-delay: -1.4285714286s;
}

.loader-square:nth-of-type(2) {
  animation-delay: -2.8571428571s;
}

.loader-square:nth-of-type(3) {
  animation-delay: -4.2857142857s;
}

.loader-square:nth-of-type(4) {
  animation-delay: -5.7142857143s;
}

.loader-square:nth-of-type(5) {
  animation-delay: -7.1428571429s;
}

.loader-square:nth-of-type(6) {
  animation-delay: -8.5714285714s;
}

.loader-square:nth-of-type(7) {
  animation-delay: -10s;
}
</style>
