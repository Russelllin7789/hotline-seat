<template>
  <div class="my-16">
    <SectionTitle section-title="內場組" />
    <Swiper
      class="flex w-full md:w-[60vw] md:max-w-[800px]"
      navigation
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="intro in seatIntros" :key="intro.id" class="pb-6">
        <SeatDetail :intro="intro" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ISeatIntro } from "../interface/ISeatIntro";
import SectionTitle from "./SectionTitle.vue";
import SeatDetail from "./SeatDetail.vue";

const modules = [Pagination, Navigation];
const seatIntros = ref<ISeatIntro[]>([
  {
    iconUrl: "https://img.icons8.com/?size=512&id=34961&format=png",
    id: "set-seats",
    title: "場佈",
    description: "在觀眾入場前排好座位，並完成場復。",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/93/93938.png",
    id: "guidance",
    title: "帶位",
    description: "儘速將觀眾引導至正確的位號，避免在走道逗留。",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5110/5110955.png",
    id: "keep-orders",
    title: "管秩序",
    description: "確保表演品質，讓大家都有好的體驗。",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5896/5896724.png",
    id: "others",
    title: "機動",
    description: "場內什麼都有可能發生，看表演不要太專心。",
  },
]);
</script>
