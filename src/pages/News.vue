<template>
  <div class="max-w-5xl mx-auto p-6 md:p-8">
    <h1 class="text-3xl font-bold text-center mb-8 text-blue-700">
      Tin tức – Bản cập nhật mới nhất
    </h1>

    <!-- Không có bài viết -->
    <p v-if="articles.length === 0" class="text-center text-gray-500">
      Hiện chưa có bài viết nào.
    </p>

    <!-- Danh sách bài viết -->
    <div
      v-else
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      <article
        v-for="post in articles"
        :key="post.id"
        class="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      >
        <!-- Hình đại diện -->
        <img
          v-if="post.imageUrl"
          :src="post.imageUrl"
          :alt="post.title"
          class="h-40 w-full object-cover"
        />

        <div class="p-5 flex flex-col h-full">
          <!-- Tiêu đề -->
          <h2 class="text-xl font-semibold mb-2 line-clamp-2">
            {{ post.title }}
          </h2>

          <!-- Ngày đăng -->
          <p class="text-xs text-gray-500 mb-4">
            {{ formatDate(post.publishedAt) }}
          </p>

          <!-- Nội dung ngắn gọn (preview) -->
          <p class="text-gray-700 mb-4 line-clamp-3 flex-grow">
            {{ post.summary }}
          </p>

          <!-- Đọc thêm -->
          <router-link
            :to="`/news/${post.id}`"
            class="text-blue-600 hover:underline mt-auto"
          >
            Đọc chi tiết →
          </router-link>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

type Article = {
  id: number | string
  title: string
  content: string
  summary: string
  imageUrl: string | null
  publishedAt: string | Date
}

const articles = ref<Article[]>([])

/* ------ Định dạng ngày ------ */
const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('vi-VN', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

/* ------ Lấy bài viết từ API (bạn bổ sung sau) ------ */
onMounted(async () => {
  // Ví dụ gọi API:
  // const res = await axios.get('/api/news')
  // articles.value = res.data

  // Tạm mock dữ liệu để bạn dễ nhìn UI
  articles.value = [
    {
      id: 1,
      title: 'Hosting giảm giá 50% nhân ngày lễ lớn',
      content: 'Nội dung chi tiết...',
      summary:
        'Nhân dịp 2/9, chúng tôi giảm giá tới 50% cho mọi gói hosting dung lượng cao...',
      imageUrl:
        'https://source.unsplash.com/random/800x600?server',
      publishedAt: '2025-05-17T09:30:00'
    },
    {
      id: 2,
      title: 'Ra mắt gói VPS SSD Gen4 tốc độ cực cao',
      content: 'Nội dung chi tiết...',
      summary:
        'Gói VPS mới sử dụng SSD Gen4 mang lại hiệu năng gấp 6 lần thế hệ trước...',
      imageUrl:
        'https://source.unsplash.com/random/800x600?cloud',
      publishedAt: '2025-05-16T15:45:00'
    }
  ]
})
</script>

<style scoped>
/* Dòng chữ tiêu đề ngắn quá dài? dùng line-clamp-2 đã thêm ở trên. */
</style>
