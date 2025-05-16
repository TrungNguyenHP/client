<template>
  <div class="select-none">
    <div class="w-full max-w-md bg-white rounded-xl shadow-xl p-8 mx-auto mt-10">
      <div class="text-center mb-6">
        <h1 class="text-2xl font-bold text-indigo-600">Đổi mật khẩu</h1>
        <p class="text-sm text-gray-500 mt-1">Nhập mật khẩu mới cho tài khoản của bạn</p>
      </div>

      <form @submit.prevent="changePassword" class="space-y-5">
        <input
          type="password"
          v-model="oldPassword"
          placeholder="Nhập mật khẩu cũ"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          type="password"
          v-model="newPassword"
          placeholder="Mật khẩu mới"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Nhập lại mật khẩu mới"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
        >
          Cập nhật mật khẩu
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
