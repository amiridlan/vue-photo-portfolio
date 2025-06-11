<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'Header',
  components: {
    Icon
  }
})
</script>

<template>
  <header class="text-center mb-8">
    <h1 class=" pt-18 text-6xl sm:text-7xl md:text-8xl mb-4 ">AMIR IDLAN</h1>
    <div class="flex justify-center space-x-6 pb-8">
      <a href="https://www.instagram.com/_amirmir6/" target="_blank" class=" hover:text-[#9f5731] transition-colors">
        <Icon icon="mdi:instagram" class="w-6 h-6 sm:w-8 sm:h-8" />
      </a>
      <a href="https://www.tiktok.com/@_amirmir6"  target="_blank" class=" hover:text-[#9f5731] transition-colors">
        <Icon icon="ic:baseline-tiktok" class="w-6 h-6 sm:w-8 sm:h-8" />
      </a>
      <a href="https://github.com/amiridlan" target="_blank" class=" hover:text-[#9f5731] transition-colors">
        <Icon icon="mdi:github" class="w-6 h-6 sm:w-8 sm:h-8" />
      </a>
    </div>
  </header>
</template>
