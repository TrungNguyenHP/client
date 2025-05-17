<template>
  <nav class="bg-blue-600 text-white shadow border-b border-blue-500 select-none">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Bên trái: Logo và menu -->
      <div class="flex items-center gap-8">
        <router-link
          to="/"
          class="text-2xl font-bold hover:text-gray-300 transition"
        >
          DomainStore
        </router-link>

        <router-link
          to="/domains"
          class="text-lg hover:text-gray-300 transition"
          active-class="font-semibold text-white border-b-2 border-white"
        >
          Các gói domain
        </router-link>
        <router-link
          to="/renew"
          class="text-lg hover:text-gray-300 transition"
          active-class="font-semibold text-white border-b-2 border-white"
        >
          Dịch vụ của bạn
        </router-link>
        <router-link
          to="/news"
          class="text-lg hover:text-gray-300 transition"
          active-class="font-semibold text-white border-b-2 border-white"
        >
          Tin tức
        </router-link>
      </div>

      <!-- Bên phải: Liên hệ và user menu -->
      <div class="flex items-center gap-6">
        <div class="hidden md:flex flex-col text-sm text-right leading-5">
          <div>📞 0916070437</div>
        </div>

        <div v-if="isLoggedIn" class="relative">
          <button
            @click="toggleProfileDropdown"
            class="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <span class="text-lg">{{ customerName }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 transition-transform duration-200"
              :class="{ 'rotate-180': profileDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <transition name="fade">
            <div
              v-if="profileDropdownOpen"
              class="absolute right-0 mt-3 w-60 bg-white text-gray-800 rounded-xl shadow-lg z-50 overflow-hidden"
            >
              <router-link
                to="/profile"
                @click="closeDropdowns"
                class="block px-5 py-3 hover:bg-gray-100 transition"
              >
                Hồ sơ
              </router-link>
              <router-link
                to="/profile/userservices"
                @click="closeDropdowns"
                class="block px-5 py-3 hover:bg-gray-100 transition"
              >
                Đơn đặt hàng của bạn
              </router-link>
              <router-link
                to="/profile/cancelled"
                @click="closeDropdowns"
                class="block px-5 py-3 hover:bg-gray-100 transition"
              >
                Domain đã hủy
              </router-link>
              <router-link
                to="/change-password"
                @click="closeDropdowns"
                class="block px-5 py-3 hover:bg-gray-100 transition"
              >
                Đổi mật khẩu
              </router-link>
              <button
                @click="logout"
                class="block w-full text-left px-5 py-3 hover:bg-red-100 text-red-600 border-t transition"
              >
                Đăng xuất
              </button>
            </div>
          </transition>
        </div>

        <router-link
          v-else
          to="/login"
          class="text-lg font-semibold hover:text-gray-200 transition"
        >
          Đăng nhập
        </router-link>
      </div>
    </div>
  </nav>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const profileDropdownOpen = ref(false)

const customerName = ref('')
const isLoggedIn = ref(false)

const toggleProfileDropdown = () => {
  profileDropdownOpen.value = !profileDropdownOpen.value
}

const closeDropdowns = () => {
  profileDropdownOpen.value = false
}

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('customerName')
  isLoggedIn.value = false
  customerName.value = ''
  router.push('/login')
}

onMounted(() => {
  const token = localStorage.getItem('token')
  const name = localStorage.getItem('customerName')
  if (token && name) {
    isLoggedIn.value = true
    customerName.value = name
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
