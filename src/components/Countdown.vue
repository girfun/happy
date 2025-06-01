<template>
  <div class="text-center">
    <h2 class="text-xl font-semibold mb-2">До свадьбы осталось:</h2>
    <div class="flex justify-center gap-4 text-2xl font-bold">
      <div>
        <div>{{ timeLeft.days }}</div>
        <div class="text-sm font-normal">дней</div>
      </div>
      <div>
        <div>{{ timeLeft.hours }}</div>
        <div class="text-sm font-normal">часов</div>
      </div>
      <div>
        <div>{{ timeLeft.minutes }}</div>
        <div class="text-sm font-normal">минут</div>
      </div>
      <div>
        <div>{{ timeLeft.seconds }}</div>
        <div class="text-sm font-normal">секунд</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const targetDate = new Date('2025-08-23T16:30:00') // Задай дату свадьбы

const timeLeft = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
})

let timer

const updateCountdown = () => {
  const now = new Date()
  const diff = targetDate - now

  if (diff <= 0) {
    timeLeft.value = { days: '00', hours: '00', minutes: '00', seconds: '00' }
    clearInterval(timer)
    return
  }

  const seconds = Math.floor(diff / 1000) % 60
  const minutes = Math.floor(diff / 1000 / 60) % 60
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24
  const days = Math.floor(diff / 1000 / 60 / 60 / 24)

  timeLeft.value = {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  }
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
