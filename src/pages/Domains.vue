<template>
  <section class="p-8 max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-700">Bảng Giá Tên Miền Phổ Biến</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DomainCard v-for="domain in domains" :key="domain.name" :domain="domain" />
    </div>
  </section>
</template>

<script setup lang="ts">
import DomainCard from '@/components/DomainCard.vue'

const domains = [
  { name: ".com", price: 290000},
  { name: ".net", price: 320000},
  { name: ".org", price: 300000},
  { name: ".info", price: 370000},
  { name: ".co", price: 700000},
  { name: ".vn", price: 850000},
  { name: ".com.vn", price: 700000},
  { name: ".xyz", price: 50000},
  { name: ".tech", price: 250000},
]
</script>
