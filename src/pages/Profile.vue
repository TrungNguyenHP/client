<template>
    <div class="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 class="text-3xl font-semibold text-center mb-8">Thông tin hồ sơ</h1>
  
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Họ và tên -->
        <div>
          <label for="name" class="block text-lg font-medium mb-1">Họ và Tên</label>
          <input
            v-model="user.name"
            type="text"
            id="name"
            class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập họ và tên"
            required
          />
        </div>
  
        <!-- Email -->
        <div>
          <label for="email" class="block text-lg font-medium mb-1">Email</label>
          <input
            v-model="user.email"
            type="email"
            id="email"
            class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập email"
            required
          />
        </div>
  
        <!-- Số điện thoại -->
        <div>
          <label for="phone" class="block text-lg font-medium mb-1">Số điện thoại</label>
          <input
            v-model="user.phone"
            type="text"
            id="phone"
            class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập số điện thoại"
          />
        </div>
  
        <!-- Địa chỉ -->
        <div>
          <label for="address" class="block text-lg font-medium mb-1">Địa chỉ</label>
          <input
            v-model="user.address"
            type="text"
            id="address"
            class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập địa chỉ"
          />
        </div>
  
        <!-- Nút cập nhật -->
        <div class="text-center">
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Cập nhật hồ sơ
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  // Giả lập dữ liệu người dùng (có thể thay bằng API hoặc từ localStorage)
  const user = ref({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  
  onMounted(() => {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}')
    if (savedUser) {
      user.value = savedUser
    }
  })
  
  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify(user.value))
    alert('Hồ sơ đã được cập nhật thành công!')
  }
  </script>
  