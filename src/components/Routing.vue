<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const isAnimating = ref(false);

function go() {
  isAnimating.value = true;
  setTimeout(() => {
    router.push("/internet");
  }, 1000); // Wait for animation to complete before navigating
}
</script>

<template>
  <h1>Routing lesson</h1>
  <p>Routes allow us to separate things in websites</p>

  <img
    src="../assets/scared-cat.jpeg"
    height="200px"
    :class="{ 'fly-by': isAnimating }"
  />
  <br />

  <button @click="go">Next Lesson</button>

  <br /><br />
  <RouterLink to="/user-input">Go back</RouterLink>
  <RouterLink to="/internet">Next lesson</RouterLink>

  <!-- Create your own route, and link it below -->
</template>
