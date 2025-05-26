<template>
  <div id="background" class="pt-2">
    <div id="polaroid" class="mx-auto">
      <figure
        v-for="(item, index) in figures"
        :key="index"
        :style="{ transform: index % 2 === 0 ? 'rotate(5deg)' : 'rotate(-5deg)' }"
        class="float-left relative bg-white text-center text-black text-lg p-2.5 m-2.5 mb-8 ml-12 shadow-sm transition-transform duration-300 hover:shadow-[5px_10px_100px_black] hover:scale-110 hover:z-20 cursor-pointer"
        @click="handleClick(item.id)"
      >
        <div class="aspect-w-4 aspect-h-3">
          <img :src="getCloudinaryUrl(item.src)" :loading="index >= 3 ? 'lazy' : 'eager'" class="object-cover w-full h-70" />
        </div>
        <figcaption>{{ item.caption }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import figures from '../data/polaroid.json'
import { getCloudinaryUrl } from '../config/cloudinary'

export default defineComponent({
  name: 'Polaroid',
  emits: ['selectGallery'],
  data() {
    return {
      figures
    }
  },
  methods: {
    handleClick(id: string) {
      this.$emit('selectGallery', id)
    }
  },
  computed: {
    getCloudinaryUrl() {
      return getCloudinaryUrl
    }
  }
})
</script>
