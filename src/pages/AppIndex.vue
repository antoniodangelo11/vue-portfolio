<script>
import axios from "axios";
import AppCardProject from "../components/AppCardProject.vue";
import { store } from "../store";
import AppFilter from "../components/AppFilter.vue";

export default {
  data() {
    return {
      store,
      userProjects: [],
      arrTypes: [],
      typeId: null,
      searchStr: "",

      currentPage: 1,
      nPages: 0,
      loader: true,
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    nextPage() {
      if (this.currentPage >= this.nPages) {
        this.currentPage = page;
      }
      this.currentPage++;
    },
    previousPage() {
      if (this.currentPage <= 1) {
        this.currentPage = page;
      }
      this.currentPage--;
    },
    getProjects() {
      let userId = sessionStorage.getItem("user_id");
      this.loader = true;
      axios
        .get(store.baseUrl + "api/projects", {
          params: {
            page: this.currentPage,
            // se sto già in prjects.index non esegue il craeated e non aggiorna la pagina
            // q: new URLSearchParams(window.location.search).get("q"),
            user_id: userId,
            q: this.searchStr,
            type: this.typeId,
          },
        })
        .then((response) => {
          this.userProjects = response.data.results.data;
          this.nPages = response.data.results.last_page;
          this.loader = false;
        });
    },
    getTypes() {
      axios.get(this.store.baseUrl + "api/types").then((response) => {
        this.arrTypes = response.data.results;
      });
    },
    manageChangeType(typeId) {
      this.typeId = typeId;
      console.log(this.typeId);
      this.getProjects();
    },
  },
  created() {
    this.getProjects();
    this.getTypes();
  },
  watch: {
    currentPage() {
      this.getProjects();
    },
  },
  components: { AppCardProject, AppFilter },
};
</script>
<template>
  <div
    class="lg:container lg:mx-auto flex justify-center items-center h-screen"
    v-if="loader"
  >
    <!-- <h1 class="text-center text-3xl font-bold text-white">CARICAMENTO</h1> -->
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
  <div class="lg:container lg:mx-auto" v-else>
    <AppFilter :typs="arrTypes" @changeType="manageChangeType($event)" />
    <h1 class="text-3xl font-extrabold text-center py-3 text-white">
      {{ this.userProjects[0].user.name }}'s Projects
    </h1>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-6 lg:px-4 gap-10 py-4"
    >
      <AppCardProject
        v-for="project in userProjects"
        :key="project.id"
        :dataCard="project"
      />
    </div>

    <!-- paginator  -->
    <nav
      class="pl-4 md:pl-6 lg:pl-4 mb-3 py-3"
      aria-label="Page navigation example"
    >
      <ul class="flex items-center -space-x-px h-10 text-base">
        <li>
          <button
            class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-white bg-blue-800 border border-blue-800 rounded-l-lg hover:bg-blue-500 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="previousPage()"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        <li v-for="page in nPages" :key="page">
          <button
            class="flex items-center justify-center px-4 h-10 leading-tight text-white border border-blue-800 hover:bg-blue-500 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            :class="{
              'bg-blue-500': page == currentPage,
              'bg-blue-800': page !== currentPage,
            }"
            @click="changePage(page)"
          >
            {{ page }}
          </button>
        </li>
        <li @click="nextPage()">
          <button
            class="flex items-center justify-center px-4 h-10 leading-tight text-white bg-blue-800 border border-blue-800 rounded-r-lg hover:bg-blue-500 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
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
