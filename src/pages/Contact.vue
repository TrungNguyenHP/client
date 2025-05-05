<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 space-y-6">
      <h1 class="text-3xl font-bold text-blue-700 text-center">Liên hệ với chúng tôi</h1>
      <p class="text-gray-600 text-center">Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất</p>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Tên của bạn</label>
          <input
            v-model="name"
            type="text"
            placeholder="Nhập họ tên"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Email liên hệ"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nội dung</label>
          <textarea
            v-model="message"
            rows="4"
            placeholder="Nhập nội dung bạn cần hỗ trợ..."
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Gửi liên hệ
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  if (!name.value || !email.value || !message.value) {
    alert('Vui lòng điền đầy đủ thông tin.')
    return
  }


  alert(`Cảm ơn ${name.value}, chúng tôi đã nhận được liên hệ của bạn!`)

  name.value = ''
  email.value = ''
  message.value = ''
}
</script>
