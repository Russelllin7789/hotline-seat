<template>
  <div
    class="flex flex-col w-full items-center justify-center max-w-[600px] my-8"
  >
    <div class="flex flex-col items-center justify-center px-8">
      <div class="w-[150px]">
        <img
          v-if="totalScore <= 20"
          src="https://cdn-icons-png.flaticon.com/512/1029/1029183.png"
          alt="heart-icon"
          class="w-full"
        />
        <img
          v-else-if="totalScore > 20 && totalScore <= 40"
          src="https://cdn-icons-png.flaticon.com/512/9671/9671424.png"
          alt="heart-icon"
          class="w-full"
        />
        <img
          v-else
          src="https://cdn-icons-png.flaticon.com/512/2526/2526208.png"
          alt="heart-icon"
          class="w-full"
        />
      </div>
      <div class="mt-8">
        <div class="text-xl text-white font-bold" v-if="totalScore === 0">
          像你／妳這種完人，最適合的就是內場組！
        </div>
        <div class="text-xl text-white font-bold" v-else-if="totalScore <= 20">
          內向務實的你／妳，可以嘗試內場組／前台組／後台組的工作喔～
        </div>
        <div
          class="text-xl text-white font-bold"
          v-else-if="totalScore > 20 && totalScore <= 40"
        >
          可塑性很高的你／妳，想去哪都可以！隨心所欲吧！
        </div>
        <div class="text-xl text-white font-bold" v-else>
          大膽又外向的你／妳，可以去小天使組或義賣組幫忙提振熱線的募款額喔～
        </div>
      </div>
    </div>
    <div>
      <button
        class="text-xl bg-[#000dff] text-white hover:scale-110 my-8"
        @click="$emit('testAgain')"
      >
        再測一次！
      </button>
    </div>
    <div class="text-base text-white font-bold">#結果僅供參考</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  totalScore: number;
}>();
</script>
