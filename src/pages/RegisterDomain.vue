<template>
  <div class="p-8 max-w-lg mx-auto">
    <h1 class="text-3xl font-bold mb-6">Đăng ký Domain: {{ domainName }}</h1>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <input v-model="keyword" type="text" placeholder="Nhập tên miền" class="border p-2 rounded" />
      <button type="submit" class="bg-green-500 text-white py-2 rounded hover:bg-green-600">Đăng ký</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()

const domainName = route.params.domain
const keyword = ref('')

const domainPrices: Record<string, number> = {
  com: 290000,
  net: 320000,
  org: 300000,
  vn: 850000,
  tech: 250000,
  info: 370000,
  co: 700000,
  xyz: 50000,
  'com.vn': 700000,
}

const handleSubmit = () => {
  if (!keyword.value) {
    alert("Vui lòng nhập tên miền.")
    return
  }
const domainKey = domainName.replace(".", "")
const fullDomain = `${keyword.value}.${domainKey}`
const price = domainPrices[domainKey] || 300000
  console.log('Redirecting to checkout with:', fullDomain, price)
  router.push({
    name: 'Checkout',
    query: {
      domain: fullDomain,
      price: price.toString(),
    },
  })
}
</script>
