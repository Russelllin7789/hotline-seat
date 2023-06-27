<template>
  <div class="pb-20 flex flex-col items-center">
    <SectionTitle section-title="分類帽" />
    <div v-if="!isResultShow" class="flex w-full flex-col items-center">
      <div
        class="flex w-full flex-col items-center justify-center max-w-[600px] m-8 mx-12 px-8"
      >
        <QuestionDetail
          v-for="question in questions"
          :key="question.id"
          :info="question"
          @option-chosen="handleAnswers"
        />
      </div>
      <div>
        <button
          class="text-xl bg-[#000dff] text-white disabled:text-[#c8c8c8] disabled:bg-white hover:scale-110 disabled:hover:scale-100"
          :disabled="!isFormFulfilled"
          @click="handleFormSubmit"
        >
          看分類結果
        </button>
      </div>
    </div>
    <div v-else>
      <AnswerCard :total-score="totalScore" @test-again="handleReTest" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import SectionTitle from "./SectionTitle.vue";
import { IQuestionDetail } from "../interface/IQuestion";
import QuestionDetail from "./QuestionDetail.vue";
import AnswerCard from "./AnswerCard.vue";

interface IAnswer {
  QOne: string;
  QTwo: string;
  QThree: string;
}

const isFormFulfilled = ref(false);
const isSubmittedBefore = ref(false);
const isResultShow = ref(false);
const totalScore = ref(0);

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

const userAnswer = ref<IAnswer>({
  QOne: "",
  QTwo: "",
  QThree: "",
});

const handleAnswers = (id: string, answer: string) => {
  if (id === "Q1") {
    userAnswer.value.QOne = answer;
  } else if (id === "Q2") {
    userAnswer.value.QTwo = answer;
  } else {
    userAnswer.value.QThree = answer;
  }
};

const handleFormSubmit = () => {
  if (!isSubmittedBefore.value) {
    totalScore.value = 0;
    isResultShow.value = true;
    isSubmittedBefore.value = true;
    return;
  }

  if (userAnswer.value.QOne === "熱情活潑") {
    totalScore.value += 20;
  } else if (userAnswer.value.QOne === "與眾不同") {
    totalScore.value += 10;
  } else if (userAnswer.value.QOne === "內斂沉穩") {
    totalScore.value += 0;
  }

  if (userAnswer.value.QTwo === "好友相聚") {
    totalScore.value += 10;
  } else if (userAnswer.value.QTwo === "酒吧破浪") {
    totalScore.value += 20;
  } else if (userAnswer.value.QTwo === "冥想靜坐") {
    totalScore.value += 0;
  }

  if (userAnswer.value.QThree === "泰式酸辣河粉") {
    totalScore.value += 20;
  } else if (userAnswer.value.QThree === "超商折扣品項") {
    totalScore.value += 10;
  } else if (userAnswer.value.QThree === "少油鹽健康餐") {
    totalScore.value += 0;
  }

  isResultShow.value = true;
};

const handleReTest = () => {
  userAnswer.value.QOne = "";
  userAnswer.value.QTwo = "";
  userAnswer.value.QThree = "";
  isResultShow.value = false;
  isFormFulfilled.value = false;
  totalScore.value = 0;
};

watch(
  userAnswer.value,
  (newVal) => {
    if (newVal.QOne !== "" && newVal.QTwo !== "" && newVal.QThree !== "") {
      isFormFulfilled.value = true;
    }
  },
  {
    deep: true,
  }
);
</script>
