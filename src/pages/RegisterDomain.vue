<template>
  <div class="p-8 max-w-lg mx-auto select-none">
    <h1 class="text-2xl font-semibold mb-4">Đăng ký {{ domainName }}</h1>
    <form @submit.prevent="submit" class="flex flex-col gap-3">
      <input v-model="keyword" type="text" placeholder="Tên miền" class="border p-2 rounded" />
      <button class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Đăng ký</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const domainName = route.params.domain as string
const keyword = ref('')
const price = ref(0)
const productId = ref<number | null>(null)
onMounted(async () => {
  const res = await axios.get('http://localhost:5246/api/domain_product')
  const item = res.data.find((d: any) => d.domainName === domainName)
  if (item){
    price.value = item.price
    productId.value = item.id
  } 
})

const submit = () => {
  if (!keyword.value || !price.value || !productId.value) return alert('Vui lòng nhập tên miền.')
  const fullDomain = `${keyword.value}.${domainName.replace(/^\./, '')}`
  router.push({ name: 'Checkout', query: { domain: fullDomain, price: price.value.toString(),domainProductId: productId.value.toString() } })
}
</script>
