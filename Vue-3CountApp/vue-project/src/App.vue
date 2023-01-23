<template>
  <main>
    <div>
      <h4>The current count...</h4>
      <p>{{ count }}</p>
      <button @click="countMinus">-</button>
      <button @click="countPlus">+</button>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

let count = ref(0);

const countMinus = () => {
  if (count.value === 0) return;

  count.value--;
}

const countPlus = () => {
  if (count.value >= 11) return;

  count.value++;
}

console.log(count.value);
</script>

<style scoped>
main {
  display: flex;
  align-items:center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
}
div {
  padding: 6rem;
  text-align: center;
  background-color: tomato;
  border-radius: 6px;
  color: white;
}

h4 {
  margin: 0;
  font-family: inherit;
  font-size: 1.4rem;
}

p {
  margin: 0;
  font-family: inherit;
  font-size: 3rem;
}
</style>