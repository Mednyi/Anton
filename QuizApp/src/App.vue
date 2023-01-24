<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" placeholder="Search....">
    </header>
    <div class="options-container">
      <div class="card">
        <img src="https://gplah.com/wp-content/uploads/2020/04/2352701.jpg" alt="Math">
        <div class="card-text">
          <h2>Math</h2>
          <p>15 questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import q from './data/quizes.json'
import { ref } from 'vue';

const quizes = ref(q);

console.log(quizes);


</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

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

/* Card styling */

.card {
  width: 310px;
  margin-right: 20px;
  margin-bottom: 35px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>
