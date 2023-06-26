<template>
  <div class="my-16">
    <section class="flex items-center justify-center">
      <div class="w-[30vw] max-w-[200px] wave relative">
        <img :src="Wave" alt="wave-icon" />
      </div>
      <h1 class="text-3xl font-bold hover:text-[#000dff] mx-6">內場組</h1>
      <div class="w-[30vw] max-w-[200px] wave-reverse relative">
        <img :src="Wave" alt="wave-icon" class="-scale-x-100" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Wave from "../assets/wave.svg";
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
