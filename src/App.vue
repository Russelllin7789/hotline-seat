<script setup lang="ts">
import IntroSection from "./components/IntroSection.vue";
import SeatIntro from "./components/SeatSection.vue";
import QuestionSection from "./components/QuestionSection.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="w-full min-h-screen">
    <NavBar />

    <!-- Bottom marquee with responsive text -->
    <div class="w-full bg-black fixed bottom-0 py-2 px-2 z-[999]">
      <Vue3Marquee>
        <p class="text-lg sm:text-xl md:text-2xl text-white whitespace-nowrap">
          內場組需要你／妳！零經驗可，初心者の首選！
        </p>
      </Vue3Marquee>
    </div>

    <!-- Main content with proper spacing -->
    <main class="w-full">
      <section id="intro" class="pt-24 md:pt-0 pb-8 md:pb-16">
        <IntroSection />
      </section>

      <section id="seat" class="py-8 md:py-16">
        <SeatIntro />
      </section>

      <section id="question" class="py-8 md:py-16 pb-20">
        <QuestionSection />
      </section>
    </main>
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
