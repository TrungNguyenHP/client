<template>
    <section class="py-16 px-4 max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold mb-6 text-center text-blue-600">Chuyển Domain về DomainStore</h1>
      <p class="text-lg text-gray-600 text-center mb-8">
        Chuyển domain về với chúng tôi để được quản lý tập trung, bảo mật và hỗ trợ tốt nhất.
      </p>
  
      <form @submit.prevent="submitTransfer" class="grid gap-4">
        <input
          v-model="domainName"
          type="text"
          placeholder="Nhập tên domain cần chuyển"
          required
          class="p-3 border rounded focus:outline-none"
        />
        <input
          v-model="authCode"
          type="text"
          placeholder="Nhập mã Auth Code"
          required
          class="p-3 border rounded focus:outline-none"
        />
        <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Yêu cầu chuyển domain
        </button>
      </form>
  
      <p v-if="transferResult" class="mt-4 text-green-600 text-center">{{ transferResult }}</p>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const domainName = ref('')
  const authCode = ref('')
  const transferResult = ref('')
  
  function submitTransfer() {
    transferResult.value = `Yêu cầu chuyển domain "${domainName.value}" đã được ghi nhận!`
    domainName.value = ''
    authCode.value = ''
  }
  </script>
  
  <style scoped>
  </style>
  