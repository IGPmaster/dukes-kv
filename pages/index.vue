<template>

	<MainBanner />
	<NewGames />

	<!-- PP Promotions API -->
	<div class="section px-5 bg-tertiary_dark">
    <!-- Promo Over Section -->
    <div v-for="promo in promotionsPosts" :key="`over-${promo.id}`" class="container py-10 mx-auto text-primary">
      <div v-if="promo.acf?.promo_over" v-html="promo.acf.promo_over" class="leading-relaxed"></div>
    </div>

    <!-- Promotions Grid -->
    <div class="container mx-auto py-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        <div v-for="promo in pp_promotions" :key="promo.code">
          <div class="card overflow-hidden rounded-lg leading-relaxed">
            <div class="card-image">
              <a :href="regLink">
                <img 
                  class="activator w-full h-auto" 
                  :src="promo.bigImageUrl" 
                  loading="lazy"
                  :alt="'Image of ' + promo.title + ' promotion.'"
                  :title="promo.title + ', ' + promo.subTitle"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Promo Under Section -->
    <div class="py-10">
      <div v-for="promo in promotionsPosts" :key="`under-${promo.id}`" 
           class="container mx-auto py-2 info_content hide_this">
        <div v-if="promo.acf?.promo_under" 
             class="text-primary" 
             v-html="promo.acf.promo_under">
        </div>
      </div>
    </div>
  </div>

	<PopularGames />
	<SlotGames />
	<CasinoGames />
	<JackpotGames />

	<div class="container mx-auto py-10">
  <div class="px-4">
    <div class="text-sm text-primary">
      <div v-for="promo in promotionsPosts" :key="promo.id">
        <!-- Use main_content from acf with fallback -->
        <div v-if="promo.acf?.main_content" 
             v-html="promo.acf.main_content" 
             :key="promo.id">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { promotionsPosts, pp_promotions, regLink, fetchPromotions, fetchApiPromotions } from '~/composables/globalData';

onMounted(async () => {
  try {
    // Fetch both KV content and PP promotions
    await Promise.all([
      fetchPromotions(),
      fetchApiPromotions()
    ]);
  } catch (error) {
    console.error('Error fetching content:', error);
  }
});
</script>

<style scoped>
.hide_this :deep(h2) {
  display: none;
}
</style>