<script setup>
defineProps({
  title: String,
  subtitle: String,
  imgSrc: String,
})
</script>

<template>
  <div class="time-block">
    <div>
      <img :src="imgSrc" alt="">
    </div>
    <div>
      {{ title }}

      <div class="time-block__br"></div>

      {{ subtitle }}
    </div>
  </div>

</template>

<style scoped>

</style>
