<template>
  <div class="p-8 max-w-xl mx-auto text-center">
    <h1 class="text-3xl font-bold text-green-600 mb-4">🎉 Cảm ơn bạn đã đặt hàng!</h1>
    
    <p class="text-lg mb-2">
      Thông tin đơn hàng của bạn đã được gửi đến email đã đăng ký.
    </p>

    <p class="text-lg mb-6">
      Vui lòng thanh toán hóa đơn để chúng tôi tiến hành kích hoạt dịch vụ.
    </p>

    <RouterLink to="/" class="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
      Quay lại trang chủ
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
