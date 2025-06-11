<template>
  <div>
    <div class="block block__first">
      <div style="padding: 20px 40px">
        <img src="/chulpan.jpeg" class="chulpan" alt="">
      </div>

      <div style="display: flex; align-items: center; justify-content: center; font-size: 44px">
        Р + Ч =
        <img src="/heart.png" class="heart" alt="">
      </div>

      <div style="padding: 20px 40px; display: flex; justify-content: flex-end">
        <img src="/ramazan.jpeg" class="ramazan" alt="">
      </div>
    </div>

    <div class="block block__second">
      <div class="img second-image"/>

      <div class="text">
        <span style="font-size: 18px">Узнали нас?</span>
        <br><br>
        Время летит незаметно — и вот мы повзрослели и приняли решение, что готовы связать наши жизни вместе!
        <br><br>
        С большой радостью приглашаем вас на нашу свадьбу!
        Будем счастливы, если вы разделите с нами этот особенный день.
      </div>
    </div>

    <div class="block__third">
      <div style="display: flex; justify-content: center; padding: 30px 0; font-size: 30px">
        Свадьба состоится
        <br>
        23 августа в 16:30
      </div>

      <img src="/calendar.png" alt="" style="width: 360px">

      <div style="display: flex; justify-content: center; padding: 30px 0; font-size: 30px">
        Тайминг
      </div>

      <TimeBlock
          title="16:30 Фуршет"
          subtitle="знакомства и общение"
      />

    </div>

    <section>
      <h1>Вы приглашены на свадьбу</h1>
      <p>Рамазан & Чулпан</p>
      <p>23 августа 2025, 16:30</p>
      <p>Наб. Челны, ресторан "Орловский дворец "</p>
    </section>

    <section>
      <Countdown />
    </section>

    <section>
      <h2>Как добраться</h2>
      <div>
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=52.394140%2C55.711230&z=17&oid=107504788052&ol=biz"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
        ></iframe>
      </div>
      <p>
        <a
            href="https://yandex.ru/maps/org/orlovskiy_dvorets/107504788052/?ll=52.394140%2C55.711230&z=17"
            target="_blank"
        >
          Открыть в Яндекс.Картах →
        </a>
      </p>
    </section>

    <footer>
      С любовью, Рамазан и Чулпан ❤️
    </footer>
  </div>
</template>

<script setup>
import Countdown from "@/components/Countdown.vue";
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TimeBlock from "@/components/TimeBlock.vue";

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.fromTo(
      '.second-image',
      { filter: 'grayscale(100%)' }, // старт: ЧБ
      {
        filter: 'grayscale(0%)',    // конец: цвет
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.block__second',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
  )
})
</script>

<style>
body {
  max-width: 500px;
  margin: 0 auto;
  font-family: "Marck Script", cursive;
}

.block {
  height: 100vh;
}

.block__first {
  background-color: antiquewhite;
}

.block__first .chulpan {
  width: 160px;
}

.block__first .ramazan {
  width: 160px;
}

.block__first .heart {
  width: 60px;
}


.block__second {
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
}
.block__second .text {
  padding: 30px;
  line-height: 25px;
}

.block__second .img {
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
  background-image: url("/backdrop.jpeg");
  background-size: cover;
  filter: grayscale(100%);
  z-index: -1;
  opacity: .4;

}

.block__third {
}
</style>
