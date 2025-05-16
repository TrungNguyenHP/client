<template>
  <div class="select-none">
    <div class="w-full max-w-md bg-white rounded-xl shadow-xl p-8 mx-auto mt-10">
      <div class="text-center mb-6">
        <h1 class="text-2xl font-bold text-indigo-600">Khôi phục mật khẩu</h1>
        <p class="text-sm text-gray-500 mt-1">Nhập email để nhận hướng dẫn đặt lại mật khẩu</p>
      </div>

      <form @submit.prevent="submitEmail" class="space-y-5">
        <input
          type="email"
          v-model="email"
          placeholder="Email của bạn"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
        >
          Gửi hướng dẫn
        </button>
      </form>

      <p v-if="message" class="text-center text-green-600 mt-4">{{ message }}</p>
      <p v-if="error" class="text-center text-red-500 mt-4">{{ error }}</p>

      <p class="text-center text-sm text-gray-600 mt-5">
        <RouterLink to="/login" class="text-indigo-500 hover:underline font-medium">Quay lại đăng nhập</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const message = ref('')
const error = ref('')

async function submitEmail() {
  message.value = ''
  error.value = ''

  try {
    await axios.post('http://localhost:5246/api/customer/forgot-password', { email: email.value })
    message.value = '✅ Đã gửi email hướng dẫn đặt lại mật khẩu. Vui lòng kiểm tra hộp thư của bạn.'
  } catch (err: any) {
    console.error('Lỗi gửi email:', err)
    error.value = err.response?.data || '❌ Gửi email thất bại. Vui lòng thử lại.'
  }
}
</script>
