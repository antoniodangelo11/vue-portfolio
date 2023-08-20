<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      project: {},
    };
  },
  methods: {
    getProject() {
      this.loader = true;
      axios
        .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
        .then((response) => (this.project = response.data.results));
    },
  },
  created() {
    this.getProject();
  },
};
</script>

<template>
  <h1 class="text-white text-2xl md:text-4xl font-bold text-center py-10">
    {{ project.title }}
  </h1>
  <div class="grid grid-cols-1 gap-y-16">
    <!-- video  -->
    <video
      v-if="project.video"
      ref="videoRef"
      class="w-full h-[210px] sm:h-[300px] md:h-[450px] lg:h-[600px] object-fill border-8 lg:border-[20px] border-blue-900"
      loop
      muted
      controls
    >
      <source
        :src="store.baseUrl + `storage/uploads` + project.video"
        type="video/mp4"
      />
      <source
        :src="store.baseUrl + `storage/uploads` + project.video"
        type="video/webm"
      />
      <source
        :src="store.baseUrl + `storage/uploads` + project.video"
        type="video/mkv"
      />
    </video>

    <!-- descrizione  -->
    <div class="container mx-auto text-white lg:text-lg px-3">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quis
        nihil consequatur labore rerum ipsa ullam architecto ex id! Alias
        placeat sit dignissimos cumque repudiandae ducimus debitis. Adipisci,
        omnis ratione!
      </p>
    </div>

    <!-- carosello  -->
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-52 lg:h-[35rem] overflow-hidden rounded-lg">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            :src="store.baseUrl + `storage/uploads` + project.image1"
            class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            :alt="project.image1"
          />
        </div>
        <!-- Item 2 -->
        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item
          v-if="project.image2"
        >
          <img
            :src="store.baseUrl + `storage/uploads` + project.image2"
            class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            :alt="project.image1"
          />
        </div>
        <!-- Item 3 -->
        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item
          v-if="project.image3"
        >
          <img
            :src="store.baseUrl + `storage/uploads` + project.image3"
            class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            :alt="project.image1"
          />
        </div>
        <!-- Item 4 -->
        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item
          v-if="project.image4"
        >
          <img
            :src="store.baseUrl + `storage/uploads` + project.image4"
            class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            :alt="project.image1"
          />
        </div>
        <!-- Item 5 -->
        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item
          v-if="project.image5"
        >
          <img
            :src="store.baseUrl + `storage/uploads` + project.image5"
            class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            :alt="project.image1"
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800"
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
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800"
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
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
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
