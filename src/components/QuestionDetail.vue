<template>
  <div class="w-full">
    <div class="w-full flex items-center justify-between">
      <div class="w-[120px] h-full bg-white rounded-full overflow-hidden p-4">
        <img
          class="w-full object-cover"
          :src="info.iconUrl"
          alt="question-icon"
        />
      </div>
      <div>
        <div class="flex items-center justify-end text-white text-xl font-bold">
          {{ info.id }}
        </div>
        <div class="text-white font-bold text-xl max-w-[180px]">
          {{ info.question }}
        </div>
      </div>
    </div>
    <div
      :class="`w-full flex items-center justify-end ${
        info.id !== 'Q3' ? 'border-b border-solid border-white' : ''
      } pb-8 mb-8`"
    >
      <ul>
        <li class="w-full flex items-center justify-center mb-4">
          <input
            type="radio"
            :name="info.id"
            :id="info.optionA"
            @change="handleOptionChosen(info.id, info.optionA)"
          />
          <label
            :for="info.optionA"
            class="text-white text-xl font-bold ml-4"
            >{{ info.optionA }}</label
          >
        </li>
        <li class="w-full flex items-center justify-center mb-4">
          <input
            type="radio"
            :name="info.id"
            :id="info.optionB"
            @change="handleOptionChosen(info.id, info.optionB)"
          />
          <label
            :for="info.optionB"
            class="text-white text-xl font-bold ml-4"
            >{{ info.optionB }}</label
          >
        </li>
        <li class="w-full flex items-center justify-center">
          <input
            type="radio"
            :name="info.id"
            :id="info.optionC"
            @change="handleOptionChosen(info.id, info.optionC)"
          />
          <label
            :for="info.optionC"
            class="text-white text-xl font-bold ml-4"
            >{{ info.optionC }}</label
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IQuestionDetail } from "../interface/IQuestion";

defineProps<{
  info: IQuestionDetail;
}>();

const emit = defineEmits<{
  (e: "optionChosen", id: string, option: string): void;
}>();

const handleOptionChosen = (infoId: string, option: string) => {
  emit("optionChosen", infoId, option);
};
</script>
