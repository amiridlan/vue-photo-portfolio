<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'
import VueEasyLightbox from 'vue-easy-lightbox'

interface GalleryImage {
  id: number
  title: string
  thumbnail: string
}

export default defineComponent({
  name: 'Gallery',
  components: {
    Icon,
    VueEasyLightbox
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

    const showLightbox = (idx: number) => {
      index.value = idx
      visible.value = true
    }

    return { visible, index, showLightbox }
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
        <img 
          :src="image.thumbnail" 
          :alt="image.title"
          :loading="idx >= 3 ? 'lazy' : 'eager'"
          class="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
