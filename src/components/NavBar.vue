<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-lg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-14 sm:h-16">
        <ul class="flex space-x-4 sm:space-x-6 md:space-x-8">
          <li>
            <a
              href="#intro"
              @click="scrollToSection('intro')"
              class="nav-link font-mantou text-sm sm:text-base md:text-lg font-medium text-gray-800 hover:text-[#ff98b3] transition-colors duration-300 cursor-pointer"
            >
              活動資訊
            </a>
          </li>
          <li>
            <a
              href="#seat"
              @click="scrollToSection('seat')"
              class="nav-link font-mantou text-sm sm:text-base md:text-lg font-medium text-gray-800 hover:text-[#ff98b3] transition-colors duration-300 cursor-pointer"
            >
              工作簡介
            </a>
          </li>
          <li>
            <a
              href="#question"
              @click="scrollToSection('question')"
              class="nav-link font-mantou text-sm sm:text-base md:text-lg font-medium text-gray-800 hover:text-[#ff98b3] transition-colors duration-300 cursor-pointer"
            >
              分類帽
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = window.innerWidth < 640 ? 56 : 64; // Responsive navbar height
    const elementPosition = element.offsetTop - navbarHeight - 20; // Extra padding for better positioning
    
    // Custom smooth scroll with faster timing
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = Math.min(800, Math.abs(distance) * 0.5); // Max 800ms, adaptive based on distance
    let startTime: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
};
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 50%;
  background-color: #ff98b3;
  transition: all 0.3s ease-in-out;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}
</style>