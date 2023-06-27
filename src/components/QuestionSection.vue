<template>
  <div class="pb-20 flex flex-col items-center">
    <SectionTitle section-title="分類帽" />
    <div
      class="flex w-full flex-col items-center justify-center max-w-[600px] m-8 mx-12 px-8"
    >
      <QuestionDetail
        v-for="question in questions"
        :key="question.id"
        :info="question"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "./SectionTitle.vue";
import { IQuestionDetail } from "../interface/IQuestion";
import QuestionDetail from "./QuestionDetail.vue";

const questions = ref<IQuestionDetail[]>([
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1945/1945639.png",
    id: "Q1",
    question: "覺得朋友會怎麼形容你／妳？",
    optionA: "熱情活潑",
    optionB: "內斂沉穩",
    optionC: "與眾不同",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/9999/9999838.png",
    id: "Q2",
    question: "下列哪一個活動最能讓自己放鬆？",
    optionA: "好友相聚",
    optionB: "酒吧破浪",
    optionC: "冥想靜坐",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3280/3280084.png",
    id: "Q3",
    question: "最可能把下列哪一個當午餐？",
    optionA: "少油鹽健康餐",
    optionB: "超商折扣品項",
    optionC: "泰式酸辣河粉",
  },
]);
</script>
