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
      class="text bg-blue-500 border-b-2 border-l-2 border-r-2 border-blue-500 py-3 px-4"
    >
      <div
        class="title text-3xl font-bold mb-6 hover:cursor-pointer hover:underline inline-block"
      >
        {{ dataCard.title }}
      </div>
      <div class="author mb-2">
        <!-- <span class="detail bg-slate-500">{{ dataCard.user.name }}</span> -->
        <!-- <div
          class="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group inline-block"
        >
          <span
            class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"
          ></span>
          {{ dataCard.user.name }}
        </div> -->
        <div
          class="bg-blue-500 text-white border border-blue-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group inline-block"
        >
          <span
            class="bg-blue-300 shadow-blue-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"
          ></span>
          {{ dataCard.user.name }}
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
<style lang="scss" scoped>
.detail {
  font-size: 1rem;
  padding: 0.3em 1.7em;
  background-color: #000;
  border: 3px solid slategrey;
  border-radius: 1em;
  color: #fff;
  font-weight: bolder;
  transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s;
  box-shadow: -5px 5px 0px 0px slategrey;
}

.detail:hover {
  transform: translate(5px, -5px);
}
</style>
