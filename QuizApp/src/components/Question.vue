<template>
  <div class="question-container">
    <h1 class="question">
      {{ question.text }}
    </h1>
  </div>
  <div class="options-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const { question } = defineProps(['question']);

const emit = defineEmits(['selectOption']);

const emitSelectedOption = (isCorrect) => {
  emit('selectOption', isCorrect);
};

</script>

<style scoped>
.question-container {
  margin-top: 20px;
}

.question {
  margin-bottom: 20px;
  font-size: 40px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  background-color: bisque;
}

.option-value {
  width: 100%;
  padding: 0 20px;
  font-size: 30px;
  background-color: rgb(244, 239, 239);
}
</style>