<template>
  <div class="pt-24 bg-gradient-to-b from-primary_bg to-tertiary_dark min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-primary mb-4">
          <TranslatedText 
            translation-key="special_promotions" 
            loading-text="Special Promotions"
          />
        </h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          <TranslatedText 
            translation-key="promotions_quote" 
            loading-text="Check out our promotions selection. Something for everyone!"
          />
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center min-h-[400px]">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>

      <!-- Empty State -->
      <div v-else-if="!promotions.length" class="text-center py-12">
        <div class="max-w-md mx-auto">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-300">
            <TranslatedText 
              translation-key="no_promotions_title" 
              loading-text="No Promotions Available"
            />
          </h3>
          <p class="mt-1 text-sm text-gray-400">
            <TranslatedText 
              translation-key="no_promotions_message" 
              loading-text="Check back soon for new exciting promotions!"
            />
          </p>
        </div>
      </div>

      <!-- Promotions Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <!-- Promotion Card -->
        <div v-for="promo in promotions" 
             :key="promo.slug"
             class="bg-tertiary_dark rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
          <!-- Card Image -->
          <div class="relative aspect-[16/9] overflow-hidden">
            <img 
              :src="getImageUrl(promo.images?.desktop?.url || promo.images?.desktop)" 
              :alt="promo.images?.desktop?.alt || promo.title"
              class="w-full h-full object-cover hidden md:block"
            />
            <img 
              :src="getImageUrl(promo.images?.mobile?.url || promo.images?.mobile || promo.images?.desktop?.url)" 
              :alt="promo.images?.mobile?.alt || promo.title"
              class="w-full h-full object-cover md:hidden"
            />
            <!-- Status Badge -->
            <div v-if="promo.status" 
                 :class="{
                   'absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold': true,
                   'bg-green-500 text-white': promo.status === 'active',
                   'bg-yellow-500 text-white': promo.status === 'scheduled',
                   'bg-gray-500 text-white': promo.status === 'expired'
                 }">
              {{ promo.status }}
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-6">
            <h2 class="text-xl font-bold text-primary mb-3 line-clamp-2">
              {{ promo.title }}
            </h2>
            <div 
              v-html="promo.content?.description || promo.content?.short_description" 
              class="text-gray-400 mb-4 line-clamp-3 text-sm prose prose-sm max-w-none prose-invert"
            ></div>

            <!-- Card Footer -->
            <div class="flex items-center justify-between mt-4">
              <NuxtLink 
                :to="`/promotion/${promo.slug}`"
                class="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm text-gray-300 font-medium rounded-md text-black bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-200"
              >
                <TranslatedText 
                  translation-key="view_details" 
                  loading-text="View Details"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </NuxtLink>

              <!-- Valid dates -->
              <div v-if="promo.valid_from" class="text-xs text-gray-500">
                {{ formatDate(promo.valid_from) }}
                {{ promo.valid_to ? ` - ${formatDate(promo.valid_to)}` : '' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '#imports';
import { fetchPromotions, promotionsData } from '~/composables/globalData';

const promotions = ref([]);
const loading = ref(true);

// Helper function to handle image URLs
const getImageUrl = (url) => {
  if (!url) return '/images/placeholder-promotion.jpg'; // Add a placeholder image
  return url;
};

// Date formatting function
const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Fetch promotions
onMounted(async () => {
  try {
    await fetchPromotions();
    promotions.value = promotionsData.value
      .filter(promo => promo.status === 'active' || promo.status === 'scheduled')
      .sort((a, b) => new Date(b.valid_from) - new Date(a.valid_from));
  } catch (error) {
    console.error('Error fetching promotions:', error);
  } finally {
    loading.value = false;
  }
});

// SEO
useHead({
  title: 'Special Promotions - Dukes Casino',
  meta: [
    {
      name: 'description',
      content: 'Explore our latest casino promotions and special offers. Find the best bonuses and rewards at Dukes Casino.'
    },
    {
      name: 'keywords',
      content: 'casino promotions, bonuses, special offers, casino rewards, Dukes Casino'
    },
    {
      property: 'og:title',
      content: 'Special Promotions - Dukes Casino'
    },
    {
      property: 'og:description',
      content: 'Explore our latest casino promotions and special offers. Find the best bonuses and rewards at Dukes Casino.'
    }
  ]
});
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

/* Add any additional styles you need */
</style>