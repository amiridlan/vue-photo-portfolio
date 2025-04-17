<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import VueEasyLightbox from 'vue-easy-lightbox'

interface GalleryImage {
  id: number
  title: string
  thumbnail: string
  full: string
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
    }
  },
  setup(props) {
    const visible = ref(false)
    const index = ref(0)
    const orientations = ref<( 'vertical' | 'horizontal' )[]>([])

    const showLightbox = (idx: number) => {
      index.value = idx
      visible.value = true
    }

    // Async function to determine image orientation
    const checkOrientation = (url: string): Promise<'vertical' | 'horizontal'> => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
          resolve(img.height > img.width ? 'vertical' : 'horizontal')
        }
        img.src = url
      })
    }

    // Initialize orientations array
    onMounted(async () => {
      const results = await Promise.all(props.images.map(img => checkOrientation(img.thumbnail)))
      orientations.value = results
    })

    return { visible, index, showLightbox, orientations }
  }
})
</script>

<template>
  <div class="flex flex-wrap gap-4 p-4 justify-center">
    <div 
      v-for="(image, idx) in images" 
      :key="image.id"
      :class="['relative group cursor-pointer rounded-lg shadow-md overflow-hidden', 
               orientations[idx] === 'vertical' ? 'w-52 h-58' : 'w-78 h-58']"
      @click="showLightbox(idx)"
    >
      <img 
        :src="image.thumbnail" 
        :alt="image.title"
        class="w-full h-full object-cover transition-transform group-hover:scale-105"
      >
      <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <Icon icon="mdi:magnify-plus-outline" class="text-white text-4xl" />
      </div>
    </div>

    <VueEasyLightbox
      :visible="visible"
      :imgs="images.map(img => img.full)"
      :index="index"
      @hide="visible = false"
    />
  </div>
</template>