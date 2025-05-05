<template>
  <div class="p-8 max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-6 text-blue-700 text-center">Xác nhận Thanh Toán</h1>

    <div class="bg-white shadow rounded p-6 space-y-4 border">
      <p class="text-lg">
        <strong>Tên miền:</strong> {{ domain }}
      </p>
      <p class="text-lg">
        <strong>Giá:</strong> {{ formatVND(price) }}
      </p>

      <button
        class="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Tiến hành thanh toán
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const domain = route.query.domain as string || 'Không xác định'
const price = parseInt(route.query.price as string) || 0

const formatVND = (amount: number) =>
  amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })


</script>
