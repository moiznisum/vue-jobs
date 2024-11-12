<script setup>
    import { defineProps } from 'vue';

    defineProps({
        bg: {
            type: String,
            defialt: 'bg-gray-100'
        }
    })

</script>

<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot>
        
    </slot>
  </div>
</template>

<style>
</style>