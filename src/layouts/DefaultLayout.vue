
<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <main class="flex-grow p-4">
        <RouterView />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  </script>
  