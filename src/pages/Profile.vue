<template>
  <div class="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-semibold text-center mb-8">Thông tin hồ sơ</h1>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Loại khách hàng -->
      <div>
        <label class="block text-lg font-medium mb-1">Loại khách hàng</label>
        <input
          type="text"
          :value="type"
          class="w-full p-3 border rounded-md bg-gray-100 cursor-not-allowed"
          disabled
        />
      </div>

      <!-- Họ và tên -->
      <div>
        <label for="name" class="block text-lg font-medium mb-1">Tên người dùng</label>
        <input
          v-model="name"
          type="text"
          id="name"
          class="w-full p-3 border rounded-md"
          :readonly="!isEditing"
          :class="isEditing ? 'bg-white' : 'bg-gray-100 cursor-not-allowed'"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-lg font-medium mb-1">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="w-full p-3 border rounded-md"
          :readonly="!isEditing"
          :class="isEditing ? 'bg-white' : 'bg-gray-100 cursor-not-allowed'"
        />
      </div>

      <!-- Số điện thoại -->
      <div>
        <label for="phone" class="block text-lg font-medium mb-1">Số điện thoại</label>
        <input
          v-model="phone"
          type="text"
          id="phone"
          class="w-full p-3 border rounded-md"
          :readonly="!isEditing"
          :class="isEditing ? 'bg-white' : 'bg-gray-100 cursor-not-allowed'"
        />
      </div>

      <!-- Địa chỉ -->
      <div>
        <label for="address" class="block text-lg font-medium mb-1">Địa chỉ</label>
        <input
          v-model="address"
          type="text"
          id="address"
          class="w-full p-3 border rounded-md"
          :readonly="!isEditing"
          :class="isEditing ? 'bg-white' : 'bg-gray-100 cursor-not-allowed'"
        />
      </div>

      <!-- <div class="text-center">
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          {{ isEditing ? 'Cập nhật hồ sơ' : 'Chỉnh sửa hồ sơ' }}
        </button>
      </div> -->
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const isEditing = ref(false)
const id = ref('')
const type = ref('')
const name = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')

onMounted(async () => {
  const token = localStorage.getItem('token')
  if (!token) return

  try {
    const response = await axios.get('http://localhost:5246/api/customer/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = response.data
    id.value = data.id
    name.value = data.name
    email.value = data.email
    phone.value = data.phoneNumber
    address.value = data.address
    type.value = data.hasType
  } catch (error) {
    console.error('Lỗi khi tải thông tin hồ sơ:', error)
    alert('Không thể tải thông tin hồ sơ. Vui lòng thử lại sau.')
  }
})

// const handleSubmit = async () => {
//   if (isEditing.value) {
//     const token = localStorage.getItem('token')
//     if (!token || !id.value) return

//     try {
//       await axios.put(`http://localhost:5246/api/customer/${id.value}`,
//         {
//           name: name.value,
//           email: email.value,
//           phoneNumber: phone.value,
//           address: address.value

//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       )

//       alert('Hồ sơ đã được cập nhật thành công!')
//     } catch (error) {
//       console.error('Lỗi khi cập nhật hồ sơ:', error)
//       alert('Cập nhật thất bại. Vui lòng thử lại.')
//     }
//   }

//   isEditing.value = !isEditing.value
// }

</script>
