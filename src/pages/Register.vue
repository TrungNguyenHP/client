
<template>
  <div>
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-3xl font-bold text-center text-pink-600 mb-6">Đăng ký</h2>
      <form @submit.prevent="register" class="space-y-4">
        <input
          type="text"
          v-model="name"
          placeholder="Tên đăng nhập"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <input
          type="text"
          v-model="phone"
          placeholder="Số điện thoại"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Mật khẩu"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Nhập lại mật khẩu"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <p v-if="passwordMismatch" class="text-red-500 text-sm">Mật khẩu không khớp</p>
        <input
          type="text"
          v-model="address"
          placeholder="Địa chỉ"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <button
          type="submit"
          class="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-200"
        >
          Đăng ký
        </button>
      </form>
      <p class="text-center text-sm text-gray-600 mt-4">
        Đã có tài khoản?
        <RouterLink to="/login" class="text-pink-500 hover:underline">Đăng nhập</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const name = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const address = ref('')
const router = useRouter()

const passwordMismatch = computed(() => password.value !== confirmPassword.value)

async function register() {
  if (passwordMismatch.value) {
    alert('Mật khẩu không khớp!')
    return
  }

  try {
    const response = await axios.post('http://localhost:5246/api/customer/register', {
      name: name.value,
      email: email.value,
      phoneNumber: phone.value,
      password: password.value,
      customerTypeId: 1,
      address: address.value
    })
    const { token, name: customerName, hasType} = response.data

    localStorage.setItem('token', token)
    localStorage.setItem('loggedIn', 'true')
    localStorage.setItem('customerName', customerName)
    localStorage.setItem('customerRole', hasType)
    router.push('/')
  } catch (error: any) {
    alert(error.response?.data || 'Đăng ký thất bại. Vui lòng thử lại.')
    console.error('Lỗi đăng ký:', error)
  }
}
</script>
