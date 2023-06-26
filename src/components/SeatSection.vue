<template>
  <div class="my-16">
    <section class="flex items-center justify-center">
      <div class="w-[30vw] max-w-[200px] wave">
        <img :src="Wave" alt="wave-icon" />
      </div>
      <h1 class="text-3xl font-bold hover:text-[#000dff] mx-4">內場組</h1>
      <div class="w-[30vw] max-w-[200px] wave-reverse">
        <img :src="Wave" alt="wave-icon" class="-scale-x-100" />
      </div>
    </section>
    <Swiper
      class="flex w-full md:w-[60vw] md:max-w-[800px]"
      navigation
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="intro in seatIntros" :key="intro.id" class="pb-6">
        <div
          class="m-8 mx-12 px-8 py-16 border border-solid border-white rounded-lg flex flex-col bg-white"
        >
          <div class="flex items-center justify-between">
            <div class="w-[60px] h-[60px]">
              <img :src="intro.iconUrl" alt="intro-icon" />
            </div>
            <div class="text-2xl text-black font-bold my-4">
              {{ intro.title }}
            </div>
          </div>

          <div class="text-base text-black font-bold mb-4">
            {{ intro.description }}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Wave from "../assets/wave.svg";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ISeatIntro } from "../interface/ISeatIntro";

const modules = [Pagination, Navigation];
const seatIntros = ref<ISeatIntro[]>([
  {
    iconUrl: "https://img.icons8.com/?size=512&id=34961&format=png",
    id: "set-seats",
    title: "場佈",
    description: "在觀眾入場前排好座位，並完成場復。",
  },
  {
    iconUrl: "",
    id: "guidance",
    title: "帶位",
    description: "儘速將觀眾引導至正確的位號，避免在走道逗留。",
  },
  {
    iconUrl: "",
    id: "keep-orders",
    title: "管秩序",
    description: "確保表演品質，讓大家都有好的體驗。",
  },
  {
    iconUrl: "",
    id: "others",
    title: "機動",
    description: "場內什麼都有可能發生，看表演不要太專心。",
  },
]);
</script>

<style scoped>
.wave {
  animation-name: wavy;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 1.5s;
}

.wave-reverse {
  animation-name: reverse;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 1.5s;
}

@keyframes wavy {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(-10%);
  }
}

@keyframes reverse {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(10%);
  }
}
</style>
