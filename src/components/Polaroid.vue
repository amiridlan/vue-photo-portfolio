<template>
  <div id="background" class="pt-2">
    <div
      id="polaroid"
      class="mx-auto w-xs h-xs md:w-lg md:h-lg lg:w-6xl lg:h-6xl 
      grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      
    >
      <figure
        v-for="(item, index) in figures"
        :key="index"
        class="relative bg-white text-center text-black text-lg p-2.5 shadow-sm transition-transform duration-300 hover:shadow-[5px_10px_100px_black] hover:scale-110 hover:z-20 cursor-pointer"
        @click="handleClick(item.id)"
      >
        <div class="relative aspect-[5/4]">
          <div
            v-if="loading[index]"
            class="absolute inset-0 bg-gray-300 animate-pulse"
          ></div>
          <img
            :src="item.src"
            :loading="index >= 3 ? 'lazy' : 'eager'"
            class="object-cover w-full h-full"
            @load="handleImageLoad(index)"
          />
        </div>
        <figcaption>{{ item.caption }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import figures from '../data/polaroid.json'

export default defineComponent({
  name: 'Polaroid',
  emits: ['selectGallery'],
  data() {
    return {
      figures,
      loading: figures.map(() => true)
    }
  },
  methods: {
    handleClick(id: string) {
      this.$emit('selectGallery', id)
    },
    handleImageLoad(index: number) {
      this.loading[index] = false
    }
  }
})
</script>
