
<template>
  <div>
    <div class="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
      
      <div class="text-center mb-6">
        <h1 class="text-3xl font-extrabold text-indigo-600">DomainStore</h1>
        <p class="text-sm text-gray-500 mt-1">Đăng nhập để quản lý dịch vụ domain của bạn</p>
      </div>

      <form @submit.prevent="login" class="space-y-5">
      <input
        type="text"
        v-model="name"
        placeholder="Tên đăng nhập"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <input
        type="password"
        v-model="password"
        placeholder="Mật khẩu"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
      >
        Đăng nhập
      </button>
    </form>

      <p class="text-center text-sm text-gray-600 mt-5">
        Chưa có tài khoản?
        <RouterLink to="/register" class="text-indigo-500 hover:underline font-medium">Đăng ký ngay</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref  } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const name = ref('')
const password = ref('')
const router = useRouter()

async function login() {
  try {
    const response = await axios.post('http://localhost:5246/api/customer/login', {
    name: name.value,
    password: password.value
  })
    const { token, name: customerName, hasType,} = response.data
    localStorage.setItem('token', token)
    localStorage.setItem('loggedIn', 'true')
    localStorage.setItem('customerName', customerName)
    localStorage.setItem('customerRole', hasType)
    router.push('/')
  } catch (error: any) {
    alert(error.response?.data || 'Đăng nhập thất bại. Vui lòng kiểm tra lại.')
    console.error('Lỗi đăng nhập:', error)
  }
}
</script>

