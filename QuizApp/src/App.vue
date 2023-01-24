<template>
  <div class="container">
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>