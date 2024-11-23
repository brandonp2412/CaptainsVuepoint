<script setup>
let havingFun = false;
let name = "Mr. beast";
</script>

<template>
  <h1>Conditions lesson</h1>

  <p>With conditions, we can show/hide content based on code</p>
  <img v-if="name == 'Mr. beast'" width="200px" src="../assets/mr-beast.jpeg" />
  <img v-else src="../assets/squidward.png" />

  <h2 v-if="havingFun">We be having fun</h2>
  <img v-if="havingFun" src="../assets/ok.gif" width="200px" />
  <h2 v-if="!havingFun">We aint having fun...</h2>
  <img v-if="!havingFun" src="../assets/shocked.gif" width="200px" />

  <br />
  <br />
  <RouterLink to="/templates">Go back</RouterLink>
  <RouterLink to="/user-input">Next lesson</RouterLink>
</template>
