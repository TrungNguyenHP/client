<template>
  <div class="select-none ">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold text-yellow-700">Đặt lại mật khẩu</h1>
        <p class="text-gray-600 mt-2">Vui lòng nhập mật khẩu mới của bạn</p>
      </div>
      <form @submit.prevent="resetPassword" class="space-y-5">
        <input
          type="password"
          v-model="newPassword"
          placeholder="Mật khẩu mới"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Xác nhận mật khẩu mới"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <button
          type="submit"
          class="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-200"
        >
          Xác nhận
        </button>
      </form>
      <p class="text-center text-sm text-gray-600 mt-6">
        <RouterLink to="/login" class="text-yellow-600 hover:underline font-medium">Quay lại đăng nhập</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const newPassword = ref('')
const confirmPassword = ref('')

const email = route.query.email as string || ''
const token = route.query.token as string || ''

const resetPassword = async () => {
  if (!email || !token) {
    alert('Liên kết không hợp lệ hoặc thiếu thông tin.')
    return
  }

  if (newPassword.value !== confirmPassword.value) {
    alert('Mật khẩu không khớp.')
    return
  }

  try {
    const response = await axios.post('http://localhost:5246/api/customer/reset_password', {
      email,
      token,
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value
    })

    alert(response.data || 'Đặt lại mật khẩu thành công!')
    router.push('/login')
  } catch (error: any) {
    alert(error.response?.data || 'Có lỗi xảy ra. Vui lòng thử lại.')
  }
}
</script>
