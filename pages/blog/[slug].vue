<template>
  <div class="pt-24 bg-gradient-to-b from-primary_bg to-tertiary_dark min-h-screen">
    <!-- Top Banner -->
    <div v-if="post?.images?.banner" class="w-full h-64 bg-cover bg-center mb-8 relative" 
         :style="{ backgroundImage: `url(${getImageUrl(post.images.banner.url)})` }">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 class="text-3xl text-white font-semibold">{{ post.title }}</h2>
      </div>
    </div>

    <!-- Main Container -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" class="mb-6">
        <ol class="flex items-center space-x-2 font-mono font-normal text-xs text-gray-600">
          <li><NuxtLink to="/" class="text-primary/60 hover:text-primary/90">Home</NuxtLink></li>
          <li><span class="text-gray-400">/</span></li>
          <li><NuxtLink to="/blog" class="text-primary/60 hover:text-primary/90">Blog</NuxtLink></li>
          <li><span class="text-gray-400">/</span></li>
          <li><span class="text-gray-300">{{ post?.title }}</span></li>
        </ol>
      </nav>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center min-h-[400px]">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p class="text-gray-300 ml-4">Loading blog post...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div class="max-w-md mx-auto">
          <h3 class="text-lg font-medium text-gray-300">Blog Post Not Found</h3>
          <NuxtLink to="/blog" class="text-secondary hover:text-secondary/90">
            Return to Blog
          </NuxtLink>
        </div>
      </div>

      <!-- Blog Post Content -->
      <article v-else class="w-full mx-auto">
        <div class="pb-12">
          <!-- <h1 class="text-3xl sm:text-4xl text-primary mb-4 text-center pb-2">{{ post?.title }}</h1> -->
          
          <!-- Main Image -->
          <!-- <div v-if="post?.images?.featured" class="relative rounded-lg overflow-hidden mb-8 bg-tertiary shadow-xl">
            <img 
              :src="post.images.banner.url" 
              :alt="post.images.featured.alt || post.title"
              class="w-full h-auto"
              loading="lazy"
              :srcset="`${post.images.banner.url} 768w, ${post.images.banner.large} 1200w`"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div> -->
        </div>
        
        <div class="max-w-4xl mx-auto">
          <!-- Content -->
          <div class="prose prose-lg max-w-none prose-invert mb-8">
            <div v-if="post?.content?.excerpt" class="text-xl text-gray-300 mb-8 leading-relaxed">
              {{ post.content.excerpt }}
            </div>
            <div v-html="post?.content?.main" class="text-gray-50 !font-thin"></div>
          </div>

          <!-- Back Button -->
          <div class="mt-12 fixed bottom-4 left-4">
            <NuxtLink 
              to="/blog"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-300 bg-secondary hover:bg-secondary/90"
            >
              Back to Blog
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '#imports';
import { fetchBlogPosts, blogPosts } from '~/composables/globalData';
import { WHITELABEL_ID } from '~/composables/globalData';
const brandId = computed(() => WHITELABEL_ID);

const route = useRoute();
const post = ref(null);
const loading = ref(true);
const error = ref(false);

// Helper function to handle image URLs
const getImageUrl = (url) => {
  if (!url) return '/images/placeholder-blog.jpg';
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

// Fetch blog post data
onMounted(async () => {
  try {
    await fetchBlogPosts();
    const foundPost = blogPosts.value.find(p => p.slug === route.params.slug);
    
    if (!foundPost) {
      error.value = true;
      return;
    }

    post.value = foundPost;

    // Update SEO meta tags with JSON-LD
    useHead({
      title: post.value.meta?.title || `${post.value.title} - Casino Blog`,
      meta: [
        {
          name: 'description',
          content: post.value.meta?.description || post.value.content?.excerpt || ''
        },
        {
          name: 'keywords',
          content: post.value.meta?.keywords?.join(', ') || 'casino blog, news, guides'
        },
        {
          property: 'og:title',
          content: post.value.meta?.og_title || post.value.title
        },
        {
          property: 'og:description',
          content: post.value.meta?.og_description || post.value.content?.excerpt || ''
        },
        {
          property: 'og:image',
          content: getImageUrl(post.value.images?.featured?.url)
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.value.title,
            "image": getImageUrl(post.value.images?.featured?.url),
            "author": {
              "@type": "Person",
              "name": "Author Name" // Replace with actual author
            },
            "datePublished": post.value.datePublished,
            "dateModified": post.value.dateModified,
            "publisher": {
              "@type": "Organization",
              "name": "Your Blog Name",
              "logo": {
                "@type": "ImageObject",
                "url": "/path/to/logo.png" // Replace with actual logo path
              }
            }
          }
        }
      ]
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<style>
.prose :deep(a) {
  @apply text-secondary hover:text-secondary/90;
}

.prose :deep(ul) {
  @apply list-disc pl-6 text-gray-300;
}

.prose :deep(ol) {
  @apply list-decimal pl-6 text-gray-300;
}

.prose :deep(h2) {
  @apply text-2xl font-bold text-primary mt-8 mb-4;
}

.prose :deep(h3) {
  @apply text-xl font-bold text-primary mt-6 mb-3;
}
</style>
