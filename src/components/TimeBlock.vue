<script setup>
defineProps({
  title: String,
  subtitle: String,
  imgSrc: String,
})
</script>

<template>
  <div class="time-block" style="display: flex;align-items: center; margin-bottom: 30px">
    <div>
      <img :src="'/happy/' + imgSrc" alt="" style="width: 100px;">
    </div>
    <div style="text-align: center; flex-grow: 1">
      {{ title }}

      <div class="time-block__br"></div>

      {{ subtitle }}
    </div>
  </div>

</template>

<style scoped>
.time-block__br {
  height: 1px;
  background-color: black;
  margin: 15px 10px;
}
</style>
