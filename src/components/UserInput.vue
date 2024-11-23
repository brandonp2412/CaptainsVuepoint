<script setup>
import { ref } from "vue";

const name = ref("Squiddy");
const url = ref(
  "https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_640.jpg"
);

function addName() {
  name.value += " 2";
}
</script>

<template>
  <h1>User input lesson</h1>
  <input v-model="name" type="text" />
  <br />
  <p>Welcome {{ name }}</p>
  <h1>Here's your image url</h1>
  <input v-model="url" type="text" />
  <img :src="url" height="200px" />

  <br />
  <button @click="addName">Add to name</button>

  <br />
  <br />
  <RouterLink to="/conditions">Go back</RouterLink>
  <RouterLink to="/routing">Next lesson</RouterLink>
</template>
