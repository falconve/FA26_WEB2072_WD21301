<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <!-- Tạo 1 đường dẫn /student-list -->
  <Header />

  <div class="container">
    <!-- Dùng để điều hướng (phân luồng) đường dẫn của website -->
    <RouterView />
  </div>
</template>

<style scoped></style>
