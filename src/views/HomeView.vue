<script setup>
import Countdown from "@/components/Countdown.vue";
</script>

<template>
  <div class="min-h-screen bg-pink-50 text-gray-800 font-sans flex flex-col">
    <section class="text-center py-10 px-4">
      <h1 class="text-3xl font-bold mb-2">Вы приглашены на свадьбу</h1>
      <p class="text-xl">Рамазан & Чулпан</p>
      <p class="mt-4 text-lg">23 августа 2025, 16:30</p>
      <p class="text-md text-gray-600">Наб. Челны, ресторан "Орловский дворец "</p>
    </section>

    mark script
    <br>
    <section>
      <Countdown/>
    </section>


    <section class="px-4 mt-6">
      <h2 class="text-xl font-semibold text-center mb-2">Как добраться</h2>
      <div class="rounded overflow-hidden shadow-md h-64">
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=52.394140%2C55.711230&z=17&oid=107504788052&ol=biz"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
        ></iframe>
      </div>
      <p class="text-center mt-2">
        <a
            href="https://yandex.ru/maps/org/orlovskiy_dvorets/107504788052/?ll=52.394140%2C55.711230&z=17"
            target="_blank"
            class="text-pink-600 underline hover:text-pink-800"
        >
          Открыть в Яндекс.Картах →
        </a>
      </p>
    </section>


    <footer class="mt-auto text-center text-sm text-gray-500 p-4">
      С любовью, Рамазан и Чулпан ❤️
    </footer>
  </div>
</template>

<script setup>
</script>



<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
