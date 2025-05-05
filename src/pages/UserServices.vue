<template>
    <div class="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 class="text-3xl font-semibold text-center mb-8">Dịch vụ đã đăng ký</h1>
      <div v-if="services.length === 0" class="text-center text-gray-500">
        <p>Chưa có dịch vụ nào được đăng ký.</p>
      </div>
      <div v-else>
        <div v-for="service in services" :key="service.id" class="mb-6">
          <div class="p-6 bg-gray-100 rounded-md shadow-sm flex justify-between items-center">
            <div>
              <h2 class="text-xl font-semibold">{{ service.name }}</h2>
              <p class="text-gray-500">{{ service.description }}</p>
            </div>
            <div class="flex flex-col items-end">
              <p class="text-lg font-semibold">{{ formatVND(service.price) }}</p>
              <p class="text-sm text-gray-400">Ngày đăng ký: {{ service.registrationDate }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const services = ref([
    { id: 1, name: 'Domain .com', description: 'Đăng ký tên miền .com', price: 290000, registrationDate: '01/01/2023' },
    { id: 2, name: 'Domain .net', description: 'Đăng ký tên miền .net', price: 320000, registrationDate: '15/02/2023' },
    { id: 3, name: 'Hosting Standard', description: 'Dịch vụ hosting cơ bản', price: 500000, registrationDate: '10/03/2023' }
  ])
  
  const formatVND = (amount: number) => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
  }
  </script>
  
  <style scoped>
  /* Custom styles */
  </style>
  