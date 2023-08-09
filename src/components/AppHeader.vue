<script>
export default {};
</script>

<template>
  <!-- <div class="container flex justify-between h-16 mx-auto dark:text-white">
    <ul class="items-stretch hidden space-x-3 lg:flex">
      <li class="flex decoration-white">
        <router-link
          :to="{ name: 'home' }"
          class="nav-link active flex items-center px-4 -mb-1 border-b-2 dark:border-transparent decoration-white"
          aria-current="page"
        >
          <span class="decoration-white">Home</span>
        </router-link>
      </li>
      <li class="flex">
        <router-link
          :to="{ name: 'about-us' }"
          class="nav-link active flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
          aria-current="page"
        >
          About Us
        </router-link>
      </li>
      <li class="flex">
        <router-link
          :to="{ name: 'contacts' }"
          class="nav-link active flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
          aria-current="page"
        >
          Contacts
        </router-link>
      </li>
    </ul>
  </div> -->
  <nav class="bg-blue-800 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <div class="flex items-center">
        <img src="../../public/favicon.ico" class="h-8 mr-3" alt="Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >Portfolios</span
        >
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5 text-white hover:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full lg:block lg:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 lg:p-0 mt-4 border text-black lg:text-white border-gray-100 rounded-lg bg-blue-300 lg:bg-blue-800 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              :to="{ name: 'home' }"
              class="nav-link active flex items-center px-4 mb-2 dark:border-transparent decoration-white"
              aria-current="page"
            >
              <span class="">Home</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'about-us' }"
              class="nav-link active flex items-center px-4 mb-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              aria-current="page"
            >
              About Us
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'contacts' }"
              class="nav-link active flex items-center px-4 mb-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              aria-current="page"
            >
              Contacts
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss"></style>
