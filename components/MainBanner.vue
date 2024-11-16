<template>
  <div v-if="loading" class="loading-placeholder">
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>
    </svg>
  </div>
  <div class="headWrap bg-tertiary_dark">
    <div v-for="content in brandContent" :key="content.id">
      <div class="w-full">
        <a :href="regLink" 
           style="margin-bottom: -5px;" 
           v-if="content.acf && content.yoast_head_json">
          <picture>
            <source 
              media="(min-width: 992px)" 
              :srcset="content.acf.image_full" 
              :alt="content.acf.casino_games_info"
              :title="content.yoast_head_json.title"
              @error="onImageError('desktop', content.acf.image_full)"
            >
            <img 
              :src="content.acf.image_small" 
              class="w-full" 
              :alt="content.acf.casino_games_info"
              :title="content.yoast_head_json.title" 
              style="min-width: 100vw; padding-top:6rem;" 
              width="1920"
              height="400"
              @error="onImageError('mobile', content.acf.image_small)"
              @load="onImageLoad(content.acf.image_small)"
            >
          </picture>
        </a>
      </div>

      <!-- Rest of your template -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { 
    WHITELABEL_ID,
    brandContent,
    fetchBrandContent,
    regLink,
    lang
} from '~/composables/globalData';

const brandId = computed(() => WHITELABEL_ID);
const loading = ref(true);

// Add image loading state tracking
const imageLoaded = ref(false);
const imageError = ref(null);

// Image handlers
const onImageError = (type, url) => {
    console.error(`🚫 ${type} Banner image failed to load:`, {
        lang: lang.value,
        url,
        timestamp: new Date().toISOString()
    });
    imageError.value = { type, url };
};

const onImageLoad = (url) => {
    console.log('✅ Banner image loaded successfully:', {
        lang: lang.value,
        url,
        timestamp: new Date().toISOString()
    });
    imageLoaded.value = true;
};

onMounted(async () => {
    try {
        await fetchBrandContent();
        console.log('🖼️ Banner Debug:', {
            language: lang.value,
            imageUrls: {
                desktop: brandContent.value?.[0]?.acf?.image_full,
                mobile: brandContent.value?.[0]?.acf?.image_small
            },
            contentExists: !!brandContent.value?.[0],
            acfExists: !!brandContent.value?.[0]?.acf
        });
    } catch (error) {
        console.error('Error in MainBanner:', error);
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped>
/* Your existing styles remain the same */
.loading-placeholder {
  min-height: 175vw;
}

@media (min-width: 768px) {
  .loading-placeholder {
    min-height: 120vw;
  }
}

@media (min-width: 992px) {
  .loading-placeholder {
    min-height: 70vw;
  }
}

@media (min-width: 1920px) {
  .loading-placeholder {
    min-height: 58vw;
  }
}

@media (min-width: 2400px) {
  .loading-placeholder {
    min-height: 52vw;
  }
}

.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  margin-top: 100px !important;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
}

.spinner .path {
  stroke: white;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>