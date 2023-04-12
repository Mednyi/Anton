<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model="search" type="text" placeholder="Search....">
    </header>
    <div class="options-container">
      <Card
        v-for="quiz in quizes"
        :key="quiz.id"
        :quiz="quiz"
      />
    </div>
  </div>
</template>

<script setup>
  import q from '../data/quizes.json'
  import Card from '../components/Card.vue'
  import { ref, watch } from 'vue';

  const quizes = ref(q);
  const search = ref('');

  watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
  });

</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;
}

header h1 {
  margin-right: 30px;
  font-weight: bold;
}

header input {
  padding: 10px;
  background-color: rgba(128, 128, 128, 0.1);
  border: none;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>
