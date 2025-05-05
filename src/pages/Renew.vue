<template>
    <section class="py-16 px-4 max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold mb-6 text-center text-blue-600">Gia Hạn Domain</h1>
      <p class="text-lg text-gray-600 text-center mb-8">
        Gia hạn domain của bạn dễ dàng để tránh mất quyền sở hữu.
      </p>
  
      <form @submit.prevent="submitRenew" class="grid gap-4">
        <input
          v-model="renewDomain"
          type="text"
          placeholder="Nhập tên domain cần gia hạn"
          required
          class="p-3 border rounded focus:outline-none"
        />
        <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Yêu cầu gia hạn
        </button>
      </form>
  
      <p v-if="renewResult" class="mt-4 text-green-600 text-center">{{ renewResult }}</p>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const renewDomain = ref('')
  const renewResult = ref('')
  
  function submitRenew() {
    renewResult.value = `Yêu cầu gia hạn domain "${renewDomain.value}" đã được ghi nhận!`
    renewDomain.value = ''
  }
  </script>
  
  <style scoped>
  </style>
  