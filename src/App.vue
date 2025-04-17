<script lang="ts">
import { defineComponent } from 'vue'
import Gallery from './components/Gallery.vue'
import Header from './components/Header.vue'
import images from './data/images.json'

export default defineComponent({
  name: 'App',
  components: {
    Gallery,
    Header
  },
  data() {
    return {
      images: images
    }
  }
})
</script>

<template>
  <div class="container mx-auto px-4 py-8  text-white">
    <Header />
    <Gallery :images="images" />
  </div>
</template>
