<template>
  <nav class="bg-blue-600 text-white shadow border-b border-blue-500">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
      <div class="flex items-center gap-8">
        <router-link to="/" class="text-2xl font-bold hover:text-gray-200 transition-all duration-200">
          DomainStore
        </router-link>

      
        <div class="relative">
          <button @click="toggleDomainDropdown"
            class="flex items-center gap-1 hover:text-gray-200 transition duration-200">
            <span class="text-lg">Dịch vụ tên miền</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-200"
              :class="domainDropdownOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <transition name="fade">
            <div v-if="domainDropdownOpen"
              class="absolute left-0 mt-3 w-60 bg-white text-gray-800 rounded-xl shadow-lg z-50 overflow-hidden">
              <router-link to="/domains" @click="closeDropdowns"
                class="block px-5 py-3 hover:bg-gray-100 transition">Các gói domain</router-link>
              <router-link to="/renew" @click="closeDropdowns"
                class="block px-5 py-3 hover:bg-gray-100 transition">Gia hạn domain</router-link>
            </div>
          </transition>
        </div>
      </div>

  
      <div class="flex items-center gap-6">
        <router-link to="/contact"
          class="text-lg hover:text-gray-200 transition duration-200">Liên hệ</router-link>

      
        <div class="relative">
          <button @click="toggleProfileDropdown" class="flex items-center gap-2 hover:text-gray-200 transition">
            <span class="text-lg">{{ customerName }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-200"
              :class="profileDropdownOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <transition name="fade">
            <div v-if="profileDropdownOpen"
              class="absolute right-0 mt-3 w-60 bg-white text-gray-800 rounded-xl shadow-lg z-50 overflow-hidden">
              <router-link to="/profile" @click="closeDropdowns"
                class="block px-5 py-3 hover:bg-gray-100 transition">Hồ sơ</router-link>
              <router-link to="/profile/userservices" @click="closeDropdowns"
                class="block px-5 py-3 hover:bg-gray-100 transition">Dịch vụ đã đăng ký</router-link>
              <button @click="logout"
                class="block w-full text-left px-5 py-3 hover:bg-red-100 text-red-600 border-t transition">Đăng xuất</button>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const domainDropdownOpen = ref(false)
const profileDropdownOpen = ref(false)
const customerName = ref('')

const toggleDomainDropdown = () => {
  domainDropdownOpen.value = !domainDropdownOpen.value
  profileDropdownOpen.value = false
}

const toggleProfileDropdown = () => {
  profileDropdownOpen.value = !profileDropdownOpen.value
  domainDropdownOpen.value = false
}

const closeDropdowns = () => {
  domainDropdownOpen.value = false
  profileDropdownOpen.value = false
}

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('customerName')
  router.push('/login')
}
onMounted(() => {
  customerName.value = localStorage.getItem('customerName') || 'Tên người dùng'
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
