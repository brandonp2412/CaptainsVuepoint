<script setup>
import { ref } from "vue";
import ollama from "ollama";

const messages = ref([]);
const question = ref("");
const loading = ref(false);

// TODO: Clear the question text after enter
async function submit() {
  loading.value = true;
  messages.value.unshift(question.value);

  const response = await ollama.chat({
    model: "llama3.2",
    messages: [{ role: "user", content: question.value }],
  });

  messages.value.unshift(response.message.content);
  loading.value = false;
}
</script>

<template>
  <h1>Libraries lesson</h1>
  <p>Using other peoples code lets us write as little as possible</p>

  <br />
  <div class="flex">
    <img height="50px" src="../assets/ollama.png" alt="" />
    <input
      @keyup.enter="submit"
      v-model="question"
      type="text"
      placeholder="Ask me anything..."
    />
  </div>

  <br />
  <!-- TODO: Indicate if messages are from the user, or ollama -->
  <ul class="swanky-list">
    <li v-if="loading" class="rays"></li>

    <li v-for="message in messages">
      {{ message }}
    </li>
  </ul>

  <!-- TODO: Add a clear button to remove all messages -->

  <br />
  <br />
  <RouterLink to="/">End of the line...</RouterLink>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 1em;
}
</style>
