<script>
export default {
  props: {
    dataCard: Object,
  },
  data() {
    return {
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
      <video ref="videoRef" class="w-full h-full object-cover" loop muted>
        <source
          src="../../public/img/spotify-responsive.mp4"
          type="video/mp4"
        />
      </video>
      <div
        v-if="!isPlaying"
        class="absolute inset-0 flex items-center justify-center"
      ></div>
    </div>
    <div
      class="text bg-blue-500 border-b-2 border-l-2 border-r-2 border-blue-500 p-4"
    >
      <!-- testo della card -->
      <div class="flex justify-between">
        <div
          class="title text-3xl font-bold mb-4 hover:cursor-pointer hover:underline inline-block"
        >
          {{ dataCard.title }}
        </div>
        <div class="author inline-block">
          <div
            class="bg-blue-700 text-white border border-blue-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group inline-block"
          >
            <span
              class="bg-blue-300 shadow-blue-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"
            ></span>
            {{ dataCard.user.name }}
          </div>
        </div>
      </div>
      <div class="technologies py-2">
        <span
          v-for="technology in dataCard.technologies"
          class="text-slate-700 hover:cursor-pointer hover:text-black mr-2"
          >{{ technology.name }}</span
        >
      </div>
      <div class="types">
        <span
          class="text-slate-700 hover:cursor-pointer hover:text-black mr-2"
          >{{ dataCard.type.name }}</span
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
