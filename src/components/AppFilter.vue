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
  <div class="grid grid-cols-3">
    <!-- SEARCHBAR  -->
    <form class="" @submit.prevent="executeSearch">
      <div>
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
        <!-- SUBMIT  -->
        <button
          type="submit"
          class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>

      <!-- TECHNOLOGIES  -->
      <!-- <button
      id="dropdownCheckboxButton"
      data-dropdown-toggle="dropdownDefaultCheckbox"
      class="text-white text-xs lg:text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center col-span-2"
      type="button"
    >
      Technologies
      <svg
        class="w-2.5 h-2.5 ml-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button> -->
      <!-- Dropdown menu -->
      <!-- <div
      id="dropdownDefaultCheckbox"
      class="z-10 hidden w-48 bg-blue-800 divide-y divide-gray-100 rounded-lg shadow"
    >
      <ul
        class="p-3 space-y-3 text-sm text-white"
        aria-labelledby="dropdownCheckboxButton"
      >
        <li>
          <div v-for="technology in technologies" class="flex items-center">
            <input
              :id="'checkbox-item-' + technology.id"
              type="checkbox"
              :value="technology.id"
              :checked="technology.selected"
              @change="technology.selected = !technology.selected"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer focus:ring-blue-500"
            />

            <label
              :for="'checkbox-item-' + technology.id"
              class="ml-2 text-sm font-medium text-white my-1"
              >{{ technology.name }}</label
            >
          </div>
        </li>
      </ul>
    </div> -->
    </form>
    <!-- TYPES  -->
    <form>
      <select
        id="countries"
        class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        v-model="typeId"
        @change="$emit('changeType', typeId)"
      >
        <option :value="null" selected>Choose a type</option>
        <option v-for="typ in typs" :value="typ.id">
          {{ typ.name }}
        </option>
      </select>
    </form>
  </div>
</template>

<script lang="scss" scoped></script>
