<template>
  <div class="pt-24 bg-gradient-to-b from-primary_bg to-tertiary_dark min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-primary mb-4">Casino Blog</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Latest casino news, guides, and expert tips
        </p>
      </div>

      <!-- Loading Spinner -->
      <div v-if="loading" class="flex justify-center items-center min-h-[400px]">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p class="text-gray-300 ml-4">Loading articles...</p>
      </div>

      <!-- Filters Section -->
      <div v-else class="mb-8">
        <!-- Category Filter -->
        <div v-if="topCategories.length" class="flex items-center justify-start mb-4">
          <h3 class="text-lg font-semibold text-primary mr-4">Filter by Category:</h3>
          <button 
            v-for="category in topCategories"
            :key="category"
            @click="toggleCategory(category)"
            :class="[
              'px-3 py-1 rounded-full text-sm transition-colors mx-1',
              selectedCategory === category
                ? 'bg-secondary text-white'
                : 'bg-tertiary text-gray-400 hover:bg-tertiary_dark'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Tag Filter -->
        <div v-if="topTags.length" class="flex items-center justify-start mb-4">
          <h3 class="text-lg font-semibold text-primary mr-4">Popular Tags:</h3>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="tag in topTags"
              :key="tag"
              @click="toggleTag(tag)"
              :class="[
                'px-3 py-1 rounded-full text-sm transition-colors',
                selectedTags.includes(tag)
                  ? 'bg-secondary text-white'
                  : 'bg-tertiary text-gray-400 hover:bg-tertiary_dark'
              ]"
            >
              #{{ tag }}
            </button>
          </div>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div v-if="!loading && filteredPosts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="post in filteredPosts" 
                 :key="post.id"
                 class="bg-tertiary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
          <!-- Post Image -->
          <div class="relative">
            <img 
              :src="post.images?.featured?.url" 
              :alt="post.images?.featured?.alt || post.title"
              class="w-full h-48 object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          <!-- Post Content -->
          <div class="p-6 bg-tertiary_dark/40">
            <div class="flex items-center text-sm text-gray-400 mb-2">
              <time :datetime="post.created_at">{{ formatDate(post.created_at) }}</time>
              <span class="mx-2">·</span>
              <span>{{ calculateReadingTime(post.content.main) }} min read</span>
            </div>

            <h3 class="text-xl font-bold text-primary mb-3 line-clamp-2">
              {{ post.title }}
            </h3>

            <p class="text-gray-400 mb-4 line-clamp-3">
              {{ cleanText(post.content.excerpt || truncateText(post.content.main, 150)) }}
            </p>

            <NuxtLink 
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center text-secondary hover:text-primary text-primary/70"
              aria-label="Read more about {{ post.title }}"
            >
              Read More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- No Posts State -->
      <div v-else-if="!loading" class="text-center py-12">
        <h3 class="text-lg text-gray-400">No blog posts found</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { blogPosts, fetchBlogPosts } from '~/composables/globalData'

// State
const loading = ref(true)
const selectedCategory = ref(null)
const selectedTags = ref([])
const filteredPosts = ref([])

// Dynamic Tags and Categories
const topTags = ref([])
const topCategories = ref([])

// Helper Functions
const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const calculateReadingTime = (text) => {
  const wordsPerMinute = 200 // Average reading speed
  const textLength = text.split(' ').length // Split by spaces for word count
  return Math.ceil(textLength / wordsPerMinute)
}

const truncateText = (text, maxLength) => {
  if (!text) return ''
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}

// Strip HTML Tags
const cleanText = (text) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(text, 'text/html')
  return doc.body.textContent || ''
}

// Aggregate Tags and Categories
const aggregateTagsAndCategories = () => {
  const tagCounts = {}
  const categoryCounts = {}

  blogPosts.value.forEach(post => {
    // Count tags
    post.tags?.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
    // Count categories
    post.categories?.forEach(category => {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1
    })
  })

  // Sort and get top 5 tags and categories
  topTags.value = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]).slice(0, 5)
  topCategories.value = Object.keys(categoryCounts).sort((a, b) => categoryCounts[b] - categoryCounts[a]).slice(0, 5)
}

// Toggle Category Filter
const toggleCategory = (category) => {
  selectedCategory.value = selectedCategory.value === category ? null : category
  filterPosts()
}

// Toggle Tag Filter
const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag)
  if (index === -1) {
    selectedTags.value.push(tag)
  } else {
    selectedTags.value.splice(index, 1)
  }
  filterPosts()
}

// Filter Posts
const filterPosts = () => {
  filteredPosts.value = blogPosts.value.filter(post => {
    const matchesCategory = !selectedCategory.value || post.categories?.includes(selectedCategory.value)
    const matchesTags = selectedTags.value.length === 0 || post.tags?.some(tag => selectedTags.value.includes(tag))
    return matchesCategory && matchesTags
  })
}

// Fetch posts on mount
onMounted(async () => {
  try {
    await fetchBlogPosts()
    aggregateTagsAndCategories() // Calculate top tags and categories
    filterPosts() // Apply filters to loaded posts
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
