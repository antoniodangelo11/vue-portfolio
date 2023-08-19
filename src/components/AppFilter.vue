<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      typeId: null,
      searchStr: "",
    };
  },
  props: {
    typs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    executeSearch() {
      this.store.search = this.searchStr;
      this.$router.push({
        name: "index",
        query: { q: this.searchStr },
      });
    },
  },
  //   watch: {
  //     typs() {
  //       this.typeId = this.typs.length ? this.typs[0].id : null;
  //     },
  //   },
};
</script>

<template>
  <div class="filter_results py-8 px-2">
    <!-- SEARCHBAR  -->
    <form @submit.prevent="executeSearch" @submit="$emit('changeType', typeId)">
      <div class="grid grid-cols-12 gap-4">
        <div
          class="searchbar col-span-12 lg:order-2 lg:col-start-4 lg:col-end-10 lg:gap-0"
        >
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search a Project"
            v-model="searchStr"
          />
        </div>

        <select
          id="countries"
          class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 col-span-6 md:col-span-4 lg:order-1 lg:col-span-2"
          v-model="typeId"
        >
          <option :value="null" selected>Choose a type</option>
          <option v-for="typ in typs" :value="typ.id">
            {{ typ.name }}
          </option>
        </select>

        <!-- SUBMIT  -->
        <button
          type="submit"
          class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 col-end-13 col-span-2 lg:order-3"
        >
          <span class="md:hidden"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></span>
          <span class="hidden md:inline-block">Search</span>
        </button>
      </div>
    </form>

    <!-- <router-link
      class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
      :to="{ name: 'index' }"
      aria-current="page"
    >
      refresh
    </router-link> -->
  </div>
</template>

<script lang="scss" scoped></script>
