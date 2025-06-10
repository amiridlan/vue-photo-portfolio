<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import { HalfCircleSpinner } from 'epic-spinners'

interface GalleryImage {
  id: number
  title: string
  thumbnail: string
}

export default defineComponent({
  name: 'Gallery',
  components: {
    Icon,
    VueEasyLightbox,
    HalfCircleSpinner
  },
  props: {
    images: {
      type: Array as () => GalleryImage[],
      required: true
    },
    galleryTitle: {
      type: String,
      required: true
    }
  },
setup(props) {
    const visible = ref(false)
    const index = ref(0)
    // Track loading state of images
    const loadingStates = ref(props.images.map(() => true))

    const showLightbox = (idx: number) => {
      index.value = idx
      visible.value = true
    }

    // Mark image as loaded
    const onImageLoad = (idx: number) => {
      loadingStates.value[idx] = false
    }

    return { visible, index, showLightbox, loadingStates, onImageLoad }
  }
});
</script>

<template>
  <div class="pt-24">
    <div class="flex items-center mb-4">
      <button
        @click="$emit('back')"
        class="px-4 py-2 bg-white hover:bg-gray-200 text-black font-bold rounded"
      >
        Back
      </button>
      <h1 class="flex-grow text-center text-4xl font-bold text-white">
        {{ galleryTitle }}
      </h1>
    </div>
    <div class="flex flex-wrap gap-4 p-4 justify-center">
      <div 
        v-for="(image, idx) in images" 
        :key="image.id"
        class="relative group cursor-pointer shadow-md overflow-hidden w-100 h-120 aspect-[4/5]"
        @click="showLightbox(idx)"
      >
        <!-- Skeleton placeholder -->
        <div
          v-if="loadingStates[idx]"
          class="absolute inset-0 flex items-center justify-center bg-gray-300"
        >
          <half-circle-spinner
            :animation-duration="1000"
            :size="40"
            color="yellow"
          />
        </div>
        <img 
          :src="image.thumbnail" 
          :alt="image.title"
          :loading="idx >= 3 ? 'lazy' : 'eager'"
          @load="onImageLoad(idx)"
          :class="['w-full h-full object-cover transition-transform group-hover:scale-105', loadingStates[idx] ? 'opacity-0' : 'opacity-100']"
        />
        <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
          <Icon icon="mdi:magnify-plus-outline" class="text-white text-4xl" />
        </div>
      </div>

      <VueEasyLightbox
        :visible="visible"
        :imgs="images.map(img => img.thumbnail)"
        :index="index"
        @hide="visible = false"
      />
    </div>
  </div>
</template>
