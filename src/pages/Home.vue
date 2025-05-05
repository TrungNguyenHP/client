<template>
  <div>

    <!-- Hero Banner -->
    <section class="bg-blue-700 text-white text-center py-20 px-4">
      <h1 class="text-5xl font-bold mb-4">Sở hữu Domain đẹp chỉ trong vài phút!</h1>
      <p class="text-xl mb-6">Giá cạnh tranh, hỗ trợ tận tâm, đăng ký siêu tốc</p>

      <!-- Search domain -->
      <div class="max-w-2xl mx-auto flex gap-2 mt-8">
        <input
          v-model="searchDomain"
          type="text"
          placeholder="Nhập tên domain (ví dụ: yourbrand.com)"
          class="flex-1 p-3 rounded-l border-2 border-white focus:outline-none text-black"
        />
        <button @click="checkDomain" class="bg-white text-blue-600 px-6 rounded-r font-semibold hover:bg-gray-100">
          Kiểm tra
        </button>
      </div>
      <p v-if="searchResult" class="mt-4 text-lg">{{ searchResult }}</p>
    </section>
    <!-- Vì sao chọn chúng tôi -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8 text-blue-600">Vì sao nên chọn DomainStore?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <div class="text-5xl mb-4">⚡</div>
            <h3 class="font-bold text-xl mb-2">Đăng ký siêu tốc</h3>
            <p class="text-gray-600">Chỉ mất vài phút để hoàn tất domain của bạn.</p>
          </div>
          <div>
            <div class="text-5xl mb-4">💰</div>
            <h3 class="font-bold text-xl mb-2">Giá cả cạnh tranh</h3>
            <p class="text-gray-600">Cam kết mức giá tốt nhất cho khách hàng.</p>
          </div>
          <div>
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="font-bold text-xl mb-2">Hỗ trợ tận tâm</h3>
            <p class="text-gray-600">Đội ngũ kỹ thuật luôn bên bạn 24/7.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bảng giá Domain -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8 text-blue-600">Gói Domain nổi bật</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="border p-6 rounded-lg hover:shadow-lg">
            <h3 class="text-2xl font-bold mb-4">.com</h3>
            <p class="text-3xl font-bold text-blue-500 mb-4">290.000₫/năm</p>
            <router-link to="/domains" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Đăng ký ngay</router-link>
          </div>
          <div class="border p-6 rounded-lg hover:shadow-lg">
            <h3 class="text-2xl font-bold mb-4">.net</h3>
            <p class="text-3xl font-bold text-blue-500 mb-4">320.000₫/năm</p>
            <router-link to="/domains" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Đăng ký ngay</router-link>
          </div>
          <div class="border p-6 rounded-lg hover:shadow-lg">
            <h3 class="text-2xl font-bold mb-4">.vn</h3>
            <p class="text-3xl font-bold text-blue-500 mb-4">850.000₫/năm</p>
            <router-link to="/domains" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Đăng ký ngay</router-link>
          </div>
        </div>
      </div>
    </section>
     <!-- Khách hàng -->
    <section class="mt-20">
      <h2 class="text-3xl font-bold text-center mb-12 text-blue-600">
        Khách hàng nói gì về chúng tôi
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
          <div class="mb-4">
            <img
              src="https://i.pravatar.cc/100?img=1"
              alt="Customer 1"
              class="mx-auto rounded-full w-24 h-24 object-cover"
            />
          </div>
          <p class="text-gray-600 italic mb-4">
            "Dịch vụ đăng ký domain tại DomainStore rất nhanh chóng và dễ dàng. Tôi chỉ mất 5 phút để sở hữu domain cho doanh nghiệp!"
          </p>
          <h4 class="font-bold text-blue-500">Phạm Trung Hiếu</h4>
          <span class="text-sm text-gray-500">Giám đốc Marketing</span>
        </div>

        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
          <div class="mb-4">
            <img
              src="https://i.pravatar.cc/100?img=2"
              alt="Customer 2"
              class="mx-auto rounded-full w-24 h-24 object-cover"
            />
          </div>
          <p class="text-gray-600 italic mb-4">
            "Giá domain ở đây cực kỳ hợp lý, lại còn được tặng kèm SSL miễn phí. Rất hài lòng với sự hỗ trợ 24/7 từ đội ngũ kỹ thuật."
          </p>
          <h4 class="font-bold text-blue-500">Vũ Quý Nghĩa</h4>
          <span class="text-sm text-gray-500">Chủ shop online</span>
        </div>

        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
          <div class="mb-4">
            <img
              src="https://i.pravatar.cc/100?img=3"
              alt="Customer 3"
              class="mx-auto rounded-full w-24 h-24 object-cover"
            />
          </div>
          <p class="text-gray-600 italic mb-4">
            "Website chuyên nghiệp, thao tác đơn giản, mọi thứ rất dễ tìm kiếm. Tôi sẽ tiếp tục sử dụng dịch vụ trong tương lai."
          </p>
          <h4 class="font-bold text-blue-500">Trần Trọng Nghĩa</h4>
          <span class="text-sm text-gray-500">Freelancer thiết kế web</span>
        </div>
      </div>
    </section>
    <!-- CTA cuối trang -->
    <section class="bg-blue-600 text-white py-16 text-center">
      <h2 class="text-3xl font-bold mb-4">Sẵn sàng sở hữu Domain riêng?</h2>
      <p class="text-lg mb-6">Nhanh tay đăng ký trước khi ai đó mua mất tên bạn yêu thích!</p>
      <router-link to="/domains" class="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">
        Đăng ký ngay
      </router-link>
    </section>

  </div>
</template>
<script setup>
import { ref } from 'vue'

const searchDomain = ref('')
const searchResult = ref('')

function checkDomain() {
  if (searchDomain.value.trim() === '') {
    searchResult.value = 'Vui lòng nhập tên domain!'
    return
  }
  searchResult.value = `Domain "${searchDomain.value}" đang được kiểm tra...`
  setTimeout(() => {
    searchResult.value = `Domain "${searchDomain.value}" hiện đang có sẵn!`
  }, 1000)
}
</script>