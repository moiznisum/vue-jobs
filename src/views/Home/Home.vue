<script setup>
  import Hero from '@/components/Hero/Hero.vue';
  import HomeCards from '@/components/HomeCards/HomeCards.vue';
  import JobListings from '@/components/JobListings/JobListings.vue';
</script>

<template>
  <Hero />
  <HomeCards />
  <JobListings :limit="3" showButtom="true" />
</template>

<style scoped>
</style>