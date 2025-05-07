<script lang="ts">
import { defineComponent, ref } from 'vue'
import Polaroid from './components/Polaroid.vue'
import Header from './components/Header.vue'
import Gallery from './components/Gallery.vue'
import imagesData from './data/images.json'
import polaroidData from './data/polaroid.json'

interface Image {
  id: number
  title: string
  thumbnail: string
  full: string
}

interface ImagesData {
  kmk: Image[]
  pgk: Image[]
  streets: Image[]
  portraits: Image[]
}

interface PolaroidFigure {
  id: string
  src: string
  caption: string
}

export default defineComponent({
  name: 'App',
  components: {
    Polaroid,
    Header,
    Gallery
  },
  setup() {
    const selectedGroup = ref<keyof ImagesData | null>(null)
    const selectedImages = ref<Image[]>([])
    const selectedCaption = ref<string>('')

    function handleSelectGallery(groupId: keyof ImagesData) {
      selectedGroup.value = groupId
      selectedImages.value = imagesData[groupId] || []
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

    return {
      selectedGroup,
      selectedImages,
      selectedCaption,
      handleSelectGallery,
      handleBack
    }
  }
})
</script>

<template>
  <div class="container mx-auto px-4 py-8 text-white">
    <Header v-if="!selectedGroup" />
    <Polaroid v-if="!selectedGroup" @selectGallery="handleSelectGallery" />
    <Gallery v-else :images="selectedImages" :galleryTitle="selectedCaption" @back="handleBack" />
  </div>
</template>
