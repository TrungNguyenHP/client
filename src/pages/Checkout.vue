<template>
  <div class="p-8 max-w-lg mx-auto select-none">
    <h1 class="text-2xl font-bold text-center text-blue-700 mb-6">Xác nhận Thanh Toán</h1>

    <div class="bg-white p-6 rounded shadow border space-y-4">
      <p><strong>Tên miền:</strong> {{ domain }}</p>

      <input v-model.number="months" type="number" min="1" class="w-full border p-2 rounded" placeholder="Thời gian thuê (tháng)" />
      <input v-model="discountCode" type="text" class="w-full border p-2 rounded" placeholder="Mã giảm giá (nếu có)" />

      <select v-model="selectedPayment" class="w-full border p-2 rounded">
        <option disabled value="">Chọn phương thức thanh toán</option>
        <option v-for="method in paymentMethods" :key="method.id" :value="method.id">
          {{ method.paymentMethodName }}
        </option>
      </select>

      <p><strong>Tổng giá:</strong> {{ formatVND(totalPrice) }}</p>

      <button @click="submitOrder" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Tiến hành thanh toán
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const domain = (route.query.domain as string) || ''
const domainProductId = parseInt(route.query.domainProductId as string) || 0
const basePrice = parseInt(route.query.price as string) || 0

const months = ref(1)
const discountCode = ref('')
const selectedPayment = ref('')
const paymentMethods = ref<{ id: number; paymentMethodName: string }[]>([])

const totalPrice = computed(() => basePrice * months.value)
const formatVND = (n: number) => n.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:5246/api/payment_method')
    paymentMethods.value = res.data
  } catch (err) {
    alert('Không thể tải phương thức thanh toán')
  }
})

const submitOrder = async () => {
  const token = localStorage.getItem('token')
  if (!token) return alert('Bạn cần đăng nhập')
  if (!selectedPayment.value) return alert('Chọn phương thức thanh toán')

  try {
    await axios.post('http://localhost:5246/api/order', {
      domainProductId,
      paymentMethodId: selectedPayment.value,
      discountCode: discountCode.value || null,
      durationByMonth: months.value,
      domainFirstPart: domain.split('.')[0]
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })

    alert('Đơn hàng đã được tạo!')
    router.push('/ordersuccess')
  } catch (err) {
    alert('Tạo đơn hàng thất bại!')
  }
}
</script>
