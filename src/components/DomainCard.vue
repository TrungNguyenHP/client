<template>
    <div class="border p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 class="text-2xl font-bold mb-2">{{ domain.name }}</h2>
      <p class="text-gray-600 mb-4">{{ formatVND(domain.price) }}/năm</p>
      <router-link :to="`/registerdomain/${domain.name}`" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Đăng ký ngay
      </router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    domain: {
      name: string
      price: number
    }
  }>();
  const formatVND = (price: number) =>
  price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
  </script>
  