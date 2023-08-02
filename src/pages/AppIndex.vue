<script>
import axios from "axios";
import AppCardProject from "../components/AppCardProject.vue";

export default {
  data() {
    return {
      arrProjects: [],
      arrTypes: [],
      currentPage: 1,
      nPages: 0,
      firstPage: false,
      lastPage: false,
      // loader: true,
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      // this.getProjects();
      this.firstPage = !this.firstPage;
      this.lastPage = !this.lastPage;
    },
    nextPage() {
      this.currentPage++;
      // this.getProjects();
      if (this.currentPage >= this.nPages) {
        this.lastPage = true;
      }
      this.firstPage = false;
    },
    previousPage() {
      this.currentPage--;
      // this.getProjects();
      if (this.currentPage <= 1) {
        this.firstPage = true;
      }
      this.lastPage = false;
    },
    getProjects() {
      // this.loader = true;
      axios
        .get("http://localhost:8000/api/projects", {
          params: {
            page: this.currentPage,
            // se sto già in prjects.index non esegue il craeated e non aggiorna la pagina
            // q: new URLSearchParams(window.location.search).get("q"),
          },
        })
        .then((response) => {
          this.arrProjects = response.data.results.data;
          this.nPages = response.data.results.last_page;
          // this.loader = false;
        });
    },
  },
  created() {
    this.getProjects();
  },
  watch: {
    currentPage() {
      this.getProjects();
    },
  },
  components: { AppCardProject },
};
</script>
<template>
  <div
    class="lg:container lg:mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 md:px-6 lg:px-4 gap-10 py-4"
  >
    <AppCardProject
      v-for="project in arrProjects"
      :key="project.id"
      :dataCard="project"
    />

    <nav aria-label="Page navigation example">
      <ul class="flex items-center -space-x-px h-10 text-base">
        <li>
          <button
            class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="changePage(page)"
          >
            {{ page }}
          </button>
        </li>
        <li @click="nextPage()">
          <button
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
<style lang="scss" scoped></style>
