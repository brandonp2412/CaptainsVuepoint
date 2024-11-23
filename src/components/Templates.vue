<script setup>
// Change this to use a different image.
import dogImage from "../assets/dog.jpg";

let lessonText = "Customizing pages can be done using templates";
let favoriteWebsite = "https://codesail.co.nz";
</script>

<template>
  <h1>Templates lesson</h1>
  <p>{{ lessonText }}</p>
  <p>
    When we use double squiggly braces, any valid javascript variable will be
    substituted in
  </p>

  <!-- To bind attributes, use the colon like below -->
  <img :src="dogImage" height="200px" />

  <!-- Change this link to your favorite website -->
  <br />
  <a :href="favoriteWebsite">My favorite site</a>

  <br />
  <br />
  <RouterLink to="/elements">Go back</RouterLink>
  <RouterLink to="/conditions">Next lesson</RouterLink>
</template>
