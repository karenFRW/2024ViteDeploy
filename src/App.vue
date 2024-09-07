<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> | <RouterLink to="/week1">Week1</RouterLink> |
        <RouterLink to="/week2">Week2</RouterLink> | <RouterLink to="/week3">Week3</RouterLink> |
        <RouterLink to="/week4">Week4</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
