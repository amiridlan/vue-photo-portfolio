<script lang="ts">
import { defineComponent, ref, defineAsyncComponent, onMounted } from 'vue'
import { HalfCircleSpinner } from 'epic-spinners'
import imagesData from './data/images.json'
import polaroidData from './data/polaroid.json'

interface Image {
  id: number
  title: string
  thumbnail: string
}

interface ImagesData {
  kmk: Image[]
  pgk: Image[]
  streets: Image[]
}

interface PolaroidFigure {
  id: string
  src: string
  caption: string
}

export default defineComponent({
  name: 'App',
  components: {
    Polaroid: defineAsyncComponent(() => import('./components/Polaroid.vue')),
    Header: defineAsyncComponent(() => import('./components/Header.vue')),
    Gallery: defineAsyncComponent(() => import('./components/Gallery.vue')),
    HalfCircleSpinner
  },
  setup() {
    const selectedGroup = ref<keyof ImagesData | null>(null)
    const selectedImages = ref<Image[]>([])
    const selectedCaption = ref<string>('')
    const loading = ref(true)

    // Function to preload images
    const preloadImages = (images: Image[]) => {
      images.slice(0, 3).forEach((img) => {
        const preImg = new Image()
        preImg.src = img.thumbnail
      })
    }

    function handleSelectGallery(groupId: keyof ImagesData) {
      selectedGroup.value = groupId
      selectedImages.value = imagesData[groupId] || []
      // Preload first few images for LCP
      preloadImages(selectedImages.value)
      // Find caption from polaroidData by groupId
      const polaroidFigures: PolaroidFigure[] = polaroidData
      const matchedFigure = polaroidFigures.find(fig => fig.id === groupId)
      selectedCaption.value = matchedFigure ? matchedFigure.caption : ''
    }

    function handleBack() {
      selectedGroup.value = null
      selectedImages.value = []
      selectedCaption.value = ''
    }

    onMounted(() => {
      loading.value = false
    })

    return {
      selectedGroup,
      selectedImages,
      selectedCaption,
      handleSelectGallery,
      handleBack,
      loading
    }
  }
})
</script>

<template>
  <div>
    <half-circle-spinner
      v-if="loading"
      :animation-duration="1000"
      :size="60"
      color="#ff1d5e"
    />
    <div v-else class="container mx-auto px-4 py-8 text-white">
      <Header v-if="!selectedGroup" />
      <Polaroid v-if="!selectedGroup" @selectGallery="handleSelectGallery" />
      <Gallery v-else :images="selectedImages" :galleryTitle="selectedCaption" @back="handleBack" />
    </div>
  </div>
</template>
