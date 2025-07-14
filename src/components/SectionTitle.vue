<template>
  <section class="flex items-center justify-center px-4 py-8">
    <div class="w-[15vw] sm:w-[20vw] md:w-[25vw] max-w-[80px] sm:max-w-[100px] md:max-w-[120px] heart-left relative">
      <img :src="Heart" alt="heart-icon" class="w-full h-auto" />
      <div
        class="w-[12vw] sm:w-[16vw] md:w-[20vw] max-w-[60px] sm:max-w-[80px] md:max-w-[100px] absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 opacity-60"
      >
        <img :src="Heart" alt="heart-icon" class="w-full h-auto" />
      </div>
    </div>
    <h2
      class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gradient drop-shadow-xl mx-4 sm:mx-6 md:mx-8 z-10 font-mantou text-center"
    >
      {{ sectionTitle }}
    </h2>
    <div class="w-[15vw] sm:w-[20vw] md:w-[25vw] max-w-[80px] sm:max-w-[100px] md:max-w-[120px] heart-right relative">
      <img :src="Heart" alt="heart-icon" class="w-full h-auto" />
      <div
        class="w-[12vw] sm:w-[16vw] md:w-[20vw] max-w-[60px] sm:max-w-[80px] md:max-w-[100px] absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 opacity-60"
      >
        <img :src="Heart" alt="heart-icon" class="w-full h-auto" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heart from "../assets/heart.svg";

defineProps<{ sectionTitle: string }>();
</script>

<style scoped>
.heart-left {
  animation-name: heartbeat-left;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
}

.heart-right {
  animation-name: heartbeat-right;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
  animation-delay: 0.3s;
}

@keyframes heartbeat-left {
  0%, 100% {
    transform: scale(1) rotate(-5deg);
  }
  25% {
    transform: scale(1.1) rotate(-8deg);
  }
  50% {
    transform: scale(1.05) rotate(-3deg);
  }
  75% {
    transform: scale(1.15) rotate(-10deg);
  }
}

@keyframes heartbeat-right {
  0%, 100% {
    transform: scale(1) rotate(5deg);
  }
  25% {
    transform: scale(1.1) rotate(8deg);
  }
  50% {
    transform: scale(1.05) rotate(3deg);
  }
  75% {
    transform: scale(1.15) rotate(10deg);
  }
}
</style>
