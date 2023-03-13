<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote">Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>

      <div class="card-container">
        <div
          v-for="note in notes"
          :key="note.id"
          :style="{backgroundColor: note.backgroundColor}"
          class="card"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString('en-US') }}</p>
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const newNote = ref('');
const errorMessage = ref('');
const notes = ref([]);

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const addNote = () => {
  if (newNote.value.length < 10) {
    return errorMessage.value = 'Note needs to be 10 character or more';
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor()
  });

  showModal.value = false;
  newNote.value = '';
  errorMessage.value = '';
};
</script>


<style scoped>
main {
  width: 100vw;
  height: 100vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 75px;
}

header button {
  width: 50px;
  height: 50px;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 225px;
  min-height: 225px;
  height: auto;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 15px;
  background-color: rgb(237, 182, 44);
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
}

.modal {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 750px;
  padding: 30px;
  background-color: white;
  border-radius: 15px;
}

.modal button {
  width: 100%;
  margin-top: 15px;
  padding: 10 20px;
  font-size: 20px;
  background-color: blueviolet;
  color: white;
  border: none;
  cursor: pointer;
}

.modal .close {
  background-color: rgb(183, 16, 16);
}

.modal p {
  color: rgb(183, 16, 16);
}
</style>