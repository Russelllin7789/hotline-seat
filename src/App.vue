<script setup lang="ts">
import IntroSection from "./components/IntroSection.vue";
import SeatIntro from "./components/SeatSection.vue";
import QuestionSection from "./components/QuestionSection.vue";
</script>

<template>
  <div class="w-full h-full">
    <div
      class="fixed bottom-20 left-[200px] w-[100px] h-[100px] cursor-pointer animate-bounce"
    >
      <img
        src="/src/assets/clock.svg"
        alt="clock-icon"
        class="w-full h-full z-10"
      />
    </div>
    <div class="w-full bg-black fixed bottom-0 py-2 z-[999]">
      <Vue3Marquee>
        <p class="text-2xl">內場組需要你／妳！內場組是初心者の首選！</p>
      </Vue3Marquee>
    </div>
    <IntroSection />
    <SeatIntro />
    <QuestionSection />
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
