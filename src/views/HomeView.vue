<template>
  <div>
    <div class="block block__first" style="display: flex; flex-direction: column; justify-content: space-around">
      <div style="padding: 20px 40px">
        <img src="/ramazan.jpeg" class="ramazan" alt="">
      </div>

      <div style="display: flex; align-items: center; justify-content: center; font-size: 44px; font-family: Caveat">
        Р + Ч =
        <img src="/heart.png" class="heart" alt="">
      </div>

      <div style="padding: 20px 40px; display: flex; justify-content: flex-end">
        <img src="/chulpan.jpeg" class="chulpan" alt="">
      </div>
    </div>

    <div class="block block__second">
      <div class="img second-image"/>

      <div class="text">
        <div style="font-size: 28px; text-align: center; font-family: Amatic SC, sans-serif; margin-bottom: 20px">Узнали нас?</div>

        <div style="font-size: 28px; text-align: center; font-family: Caveat; letter-spacing: 2px; line-height: 30px;">
          Время летит незаметно — и вот мы повзрослели и приняли решение, что готовы связать наши жизни вместе!
        </div>
        <br>
        <div style="font-size: 28px; text-align: center; font-family: Caveat; letter-spacing: 2px; line-height: 30px;">
          С большой радостью <br>
          приглашаем вас на нашу свадьбу! <br>
          Будем счастливы, если вы разделите с нами этот особенный день.
        </div>
      </div>
    </div>

    <div class="block__third">
      <div style="display: flex; justify-content: center; padding: 30px 0; font-size: 30px;flex-direction: column;align-items: center;">
        <div style="font-family: EB Garamond;">Свадьба состоится</div>
        <div style="font-family: Caveat">23 августа в 16:30</div>
      </div>

      <img src="/calendar.png" alt="" style="width: 360px">

      <div style="margin: 50px 0 30px; text-align: center; font-size: 14px;">
        ИНФОРМАЦИЯ ГДЕ СОСТОИТСЯ СВАДЬБА
      </div>

      <div style="display: flex; justify-content: center; padding: 30px 0; font-size: 30px">
        Тайминг
      </div>

      <TimeBlock
          title="16:30 Фуршет"
          subtitle="знакомства и общение"
          img-src="/1.png"
      />

      <TimeBlock
          title="17:00 Выездная регистрация"
          subtitle="момент наших клятв"
          img-src="/32.png"
      />

      <TimeBlock
          title="17:30 Банкет"
          subtitle="танца веселье и много любви"
          img-src="/42.png"
      />

      <TimeBlock
          title="21:00 Торт"
          subtitle="сладкая пауза"
          img-src="/54.png"
      />

      <TimeBlock
          title="21:00 Окончание вечера"
          subtitle="даже такой чудесный день может закончиться"
          img-src="/05.png"
      />

      <div class="" style="position: relative">
        <div style="position: absolute; top: 15px; padding: 0 15px; color: #34433c">
          <div style="text-align: center; margin-bottom: 15px; font-size: 22px">
            Дресс-код
          </div>

          <div style="text-align: center; font-size: 15px">
            Мы старались сделать праздник красивыми будем рады,
            если вы поддержите цветовую гамму нашей свадьбы
          </div>
        </div>

        <img src="/121.png" alt="" style="width: 100%">
      </div>

      <div style="font-family: EB Garamond; padding: 0 12px">
        <div style="text-align: center; margin: 30px 0 20px; font-size: 26px">
          Пожелания
        </div>

        <div style="text-align: center">
          Будем признательны, если вы поддержите наше желание обойтись без криков 'Горько!'
          Пусть поцелуи будут только по велению сердца
        </div>

        <div style="display: flex; justify-content: center; margin: 12px 0">
          <img src="/11.png" alt="" style="width: 80px">
        </div>

        <div style="text-align: center">
          С любовью и уважением просим оставить детей дома, чтобы вы могли полностью насладиться нашим днём, так как территория ресторана не предполагает развлечений и посадочный мест для детей
          <br>
          18+
          <br>
          <br>
          <br>
          <div style="text-align: center;">
            Все видео и фото со свадьбы будут размещены в нашем телеграм канале,
            там же вы можете поделиться своими фотографиями и видео — давайте соберём историю этого дня вместе
          </div>

          <div style="display: flex; justify-content: space-around; align-items: center; margin: 30px 0">
            <img src="/41.png" alt="" style="width: 60px; height: 60px">
            <img src="/22.png" alt="" style="width: 100px; height: 100px">
            <img src="/53.png" alt="" style="width: 60px; height: 60px">
          </div>
        </div>
      </div>

      <div style="position:relative; font-family: Caveat">
        <div style="position: absolute;top: 50px; left: 50%;transform: translateX(-50%); font-size: 28px;">
          <div style="text-align: center">С любовью,</div>
          <div style="text-align: center">Рамазан и Чулпан</div>
        </div>
        <img src="/3131.png" alt="" style="width: 100%; height: 100%">
      </div>

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
import { onMounted } from 'vue'
import Countdown from "@/components/Countdown.vue";
import TimeBlock from "@/components/TimeBlock.vue";


onMounted(() => {
})
</script>

<style lang="scss">
body {
  max-width: 500px;
  margin: 0 auto;
}

.block {
  height: 100vh;
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
  display: flex;
  align-items: center;
  position: relative;
}
.block__second .text {
  padding: 30px 12px;
  line-height: 25px;
  margin-top: 80%;
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
