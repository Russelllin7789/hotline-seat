<template>
  <div
    class="m-8 mx-12 px-8 py-16 border border-solid border-white rounded-lg flex flex-col bg-white"
  >
    <div class="flex items-center justify-between mb-4">
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
</template>

<script setup lang="ts">
import { ISeatIntro } from "../interface/ISeatIntro";

defineProps<{
  intro: ISeatIntro;
}>();
</script>
