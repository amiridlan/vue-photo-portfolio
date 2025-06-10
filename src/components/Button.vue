<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  emits: ['click'],
  setup(_, { emit }) {
    const onClick = (event: MouseEvent) => {
      emit('click', event)
    }
    return { onClick }
  }
})
</script>

<template>
  <button
    @click="onClick"
    class="px-4 py-2 bg-[#36312d] text-[#f3ebdd] hover:bg-[#9f5731] font-bold rounded"
  >
    <slot />
  </button>
</template>
