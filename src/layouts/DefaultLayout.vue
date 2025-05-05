<!-- src/layouts/DefaultLayout.vue -->
<template>
    <div>
      <Navbar />
      <main class="p-4">
        <RouterView />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  </script>
  