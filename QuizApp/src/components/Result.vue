<template>
  <div class="result">
    <p>Your results....</p>
    <h1>
      {{ correctAnswers}}/{{ quizQuestionLength }}
    </h1>
    <RouterLink class="link" to="/">Go Back to Home page</RouterLink>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const {
  quizQuestionLength,
  correctAnswers
} = defineProps(
  ['quizQuestionLength',
   'correctAnswers'
  ]
);


</script>

<style scoped>
.result {
  padding: 100px 0;
  text-align: center;
}

.link {
  display: block;
  text-decoration: none;
  color: lightcoral;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 45px;
}
</style>