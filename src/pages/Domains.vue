<template>
  <section class="p-8 max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-700">Bảng Giá Tên Miền</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DomainCard
        v-for="d in domains"
        :key="d.id"
        :domain="{ name: d.domainName, price: d.price }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import DomainCard from '@/components/DomainCard.vue'

const domains = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:5246/api/domain_product')
    domains.value = res.data
  } catch (err) {
    console.error('Lỗi tải domain:', err)
    alert('Không thể tải tên miền.')
  }
})
</script>
