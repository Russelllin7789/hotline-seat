<template>
  <section class="flex items-center justify-center">
    <div class="w-[30vw] max-w-[200px] wave relative">
      <img :src="Wave" alt="wave-icon" />
      <div
        class="w-[30vw] max-w-[250px] absolute bottom-2 left-[30px] opacity-50"
      >
        <img :src="Wave" alt="wave-icon" />
      </div>
    </div>
    <h2 class="title text-gradient drop-shadow-xl mx-4 z-10">
      {{ sectionTitle }}
    </h2>
    <div class="w-[30vw] max-w-[200px] wave-reverse relative">
      <img :src="Wave" alt="wave-icon" class="-scale-x-100" />
      <div
        class="w-[30vw] max-w-[250px] absolute bottom-2 right-[30px] opacity-50"
      >
        <img :src="Wave" alt="wave-icon" class="-scale-x-100" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Wave from "../assets/wave.svg";

defineProps<{ sectionTitle: string }>();
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
