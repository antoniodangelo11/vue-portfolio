<script>
import { store } from "../store";

export default {
  props: {
    dataCard: Object,
  },
  data() {
    return {
      store,
      isPlaying: false,
    };
  },
  methods: {
    playVideo() {
      this.$refs.videoRef.play();
      this.isPlaying = true;
    },
    pauseVideo() {
      this.$refs.videoRef.pause();
      this.isPlaying = false;
    },
  },
};
</script>
<template>
  <!-- video della card -->
  <div class="card-project drop-shadow-lg rounded-md overflow-hidden">
    <div @mouseenter="playVideo" @mouseleave="pauseVideo" class="relative">
      <video
        v-if="dataCard.video"
        ref="videoRef"
        class="w-full h-[210px] sm:h-[260px] md:h-[300px] lg:h-[280px] object-fill"
        loop
        muted
      >
        <source
          :src="store.baseUrl + `storage/uploads` + dataCard.video"
          type="video/mp4"
        />
        <source
          :src="store.baseUrl + `storage/uploads` + dataCard.video"
          type="video/webm"
        />
        <source
          :src="store.baseUrl + `storage/uploads` + dataCard.video"
          type="video/mkv"
        />
      </video>
      <div
        v-if="!isPlaying"
        class="absolute inset-0 flex items-center justify-center"
      ></div>
    </div>
    <img
      v-if="!dataCard.video"
      :src="store.baseUrl + `storage/uploads` + dataCard.image1"
      :alt="dataCard.image1"
      class="w-full h-[210px] sm:h-[260px] lg:h-[280px] object-fill"
    />
    <div
      class="text bg-blue-800 border-b-2 border-l-2 border-r-2 border-blue-800 p-4"
    >
      <!-- testo della card -->
      <div class="flex justify-between">
        <router-link :to="{name:'show', params: {slug:dataCard.slug}}"
          class="title text-3xl font-bold mb-3 hover:cursor-pointer hover:text-slate-50 inline-block text-slate-300"
        >
          {{ dataCard.title }}
        </router-link>
        <div class="author inline-block">
          <div
            class="bg-blue-700 text-white border border-blue-300 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group inline-block"
          >
            <span
              class="bg-blue-600 shadow-blue-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"
            ></span>
            {{ dataCard.user.name }}
          </div>
        </div>
      </div>
      <div class="technologies py-2">
        <span
          v-for="technology in dataCard.technologies"
          :key="technology.id"
          class="text-slate-300 hover:cursor-pointer hover:text-slate-50 mr-2"
          >{{ technology.name }}</span
        >
      </div>
      <div class="types">
        <span
          class="text-slate-300 hover:cursor-pointer hover:text-slate-50 mr-2"
          >{{ dataCard.type.name }}</span
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
