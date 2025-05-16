<template>
  <div class="select-none min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8 mx-auto">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold text-blue-700">Khôi phục mật khẩu</h1>
        <p class="text-gray-600 mt-2">Nhập email để nhận hướng dẫn đặt lại mật khẩu</p>
      </div>
      <form @submit.prevent="submitEmail" class="space-y-5">
        <input
          type="email"
          v-model="email"
          placeholder="Email của bạn"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Gửi hướng dẫn
        </button>
      </form>
      <p class="text-center text-sm text-gray-600 mt-6">
        <RouterLink to="/login" class="text-blue-600 hover:underline font-medium">Quay lại đăng nhập</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
