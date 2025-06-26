<template>
  <div class="wedding-invitation">
    <!-- Первый блок с фотографиями -->
    <section class="hero-section">
      <div class="photos-container">
        <transition name="slide-left">
          <img src="/ramazan.jpeg" class="photo groom" alt="Рамазан" v-if="showPhotos">
        </transition>

        <div class="heart-equation">
          Р + Ч = <img src="/heart.png" class="heart-icon" alt="Сердце">
        </div>

        <transition name="slide-right">
          <img src="/chulpan.jpeg" class="photo bride" alt="Чулпан" v-if="showPhotos">
        </transition>
      </div>
    </section>

    <!-- Второй блок с приглашением -->
    <section class="invitation-section">
      <div class="background-image"></div>

      <div class="invitation-text">
        <h2 class="section-title">Узнали нас?</h2>

        <p class="paragraph">
          Время летит незаметно — и вот мы повзрослели и приняли решение, что готовы связать наши жизни вместе
        </p>

        <p class="paragraph">
          С большой радостью <br>
          приглашаем вас на нашу свадьбу! <br>
          Будем счастливы, если вы разделите с нами этот особенный день
        </p>
      </div>
    </section>

    <!-- Третий блок с деталями -->
    <section class="details-section">
      <!-- Дата и время -->
      <div class="date-time">
        <div class="date-label">Свадьба состоится</div>
        <div class="date-value">23 августа в 16:30</div>
      </div>

      <!-- Календарь -->
      <div class="calendar-image">
        <img src="/calendar.png" alt="Календарь">
      </div>

      <!-- Место проведения -->
      <div class="venue-info">
        <span class="venue-label">в банкетном зале</span>
        <span class="venue-name">"Орловский Дворец"</span>
        <div class="venue-address">
          по адресу: Набережные Челны, посёлок Орловка, ул. Орловская 209, зал "Болгар"
        </div>
      </div>

      <!-- Карта -->
      <div class="map-container">
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=52.394140%2C55.711230&z=17&oid=107504788052&ol=biz"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
            class="grayscale-map"
        ></iframe>
        <a
            href="https://yandex.ru/maps/org/orlovskiy_dvorets/107504788052/?ll=52.394140%2C55.711230&z=17"
            target="_blank"
            class="map-link"
        >
          Открыть в Яндекс.Картах →
        </a>
      </div>

      <!-- Тайминг -->
      <h2 class="section-title timing-title">Тайминг</h2>

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
          subtitle="танцы веселье и много любви"
          img-src="/42.png"
      />

      <TimeBlock
          title="21:00 Торт"
          subtitle="сладкая пауза"
          img-src="/54.png"
      />

      <TimeBlock
          title="23:00 Окончание вечера"
          subtitle="даже такой чудесный день может закончиться"
          img-src="/05.png"
      />

      <!-- Дресс-код -->
      <div class="dress-code">
        <div class="dress-code-content">
          <h2 class="section-title" style="margin-top: 10px">Дресс-код</h2>
          <p class="dress-code-text">
            Мы старались сделать праздник красивым и будем рады,
            если вы поддержите цветовую гамму нашей свадьбы
          </p>
        </div>
        <img src="/121.png" alt="Цветовая палитра">
      </div>

      <!-- Пожелания -->
      <div class="wishes">
        <h2 class="section-title">Пожелания</h2>

        <p class="paragraph" style="font-family: 'EB Garamond'; font-size: 22px">
          Будем признательны, если вы поддержите наше желание обойтись без криков "Горько!"
          Пусть поцелуи будут только по велению сердца
        </p>

        <div class="heart-image">
          <img src="/11.png" alt="Сердце">
        </div>

        <p class="paragraph" style="font-family: 'EB Garamond'; font-size: 22px">
          С любовью и уважением просим оставить детей дома, чтобы вы могли полностью насладиться нашим днём, так как территория ресторана не предполагает развлечений и посадочный мест для детей
          <br>
          18+
        </p>

        <br>
        <br>
        <br>

        <p class="paragraph">
          Все видео и фото со свадьбы будут размещены в нашем телеграм канале,
          там же вы можете поделиться своими фотографиями и видео — давайте соберём историю этого дня вместе
        </p>

        <div class="social-icons">
          <img src="/41.png" alt="Иконка 1">
          <img src="/22.png" alt="QR-код">
          <img src="/53.png" alt="Иконка 2">
        </div>

        <div style="text-align: center">
          <a
              href="https://t.me/+qUd88b8HC0llM2My"
              target="_blank"
              style="filter: grayscale(100%);"
          >
            Либо перейти по ссылки →
          </a>
        </div>
      </div>

      <!-- Подпись -->
      <div class="signature">
        <div class="signature-text">
          <div>С любовью,</div>
          <div>Рамазан и Чулпан</div>
        </div>
        <img src="/3131.png" alt="Фоновое изображение">
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TimeBlock from "@/components/TimeBlock.vue";

const showPhotos = ref(false);

onMounted(() => {
  // Запускаем анимацию после монтирования компонента
  setTimeout(() => {
    showPhotos.value = true;
  }, 300);
})
</script>

<style lang="scss" scoped>

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 1s ease;
}

.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.wedding-invitation {
  max-width: 500px;
  margin: 0 auto;
  font-family: EB Garamond, Caveat, Amatic SC, sans-serif;
}

/* Общие стили */
.section-title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  font-family: Amatic SC, sans-serif;
}

.paragraph {
  font-size: 28px;
  text-align: center;
  font-family: Caveat;
  letter-spacing: 2px;
  line-height: 30px;
  margin-bottom: 20px;
}

/* Секция с фотографиями */
.hero-section {
  height: 100vh;
}

.photos-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 20px 0;
}

.photo {
  width: 160px;
  padding: 20px 40px;

  &.groom {
    align-self: flex-start;
  }

  &.bride {
    align-self: flex-end;
  }
}

.heart-equation {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 44px;
  font-family: Caveat;
}

.heart-icon {
  width: 60px;
  margin-left: 10px;
}

/* Секция приглашения */
.invitation-section {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
}

.background-image {
  position: absolute;
  inset: 0;
  background-image: url("/backdrop.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  opacity: 0.4;
  z-index: -1;
}

.invitation-text {
  padding: 30px 12px;
  line-height: 25px;
  margin-top: 80%;
}

/* Секция с деталями */
.date-time {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  font-size: 30px;
}

.date-label {
  font-family: EB Garamond;
}

.date-value {
  font-family: Caveat;
}

.calendar-image {
  display: flex;
  justify-content: center;

  img {
    width: 360px;
  }
}

.venue-info {
  margin: 50px 0 30px;
  text-align: center;
  padding: 0 12px;
}

.venue-label {
  font-size: 18px;
  font-family: EB Garamond;
}

.venue-name {
  font-family: Caveat;
  font-size: 24px;
}

.venue-address {
  font-size: 16px;
}

.map-container {
  position: relative;
  margin-bottom: 20px;
}

.grayscale-map {
  filter: grayscale(1);
}

.map-link {
  display: block;
  text-align: center;
  color: #34433c;
  margin-top: 10px;
}

.timing-title {
  font-size: 30px;
  padding: 30px 0;
  text-align: center;
}

/* Дресс-код */
.dress-code {
  position: relative;
  margin-top: 40px;
}

.dress-code-content {
  position: absolute;
  top: 15px;
  color: #34433c;
  width: 100%;
}

.dress-code-text {
  text-align: center;
  font-size: 16px;
}

/* Пожелания */
.wishes {
  font-family: EB Garamond;
  padding: 0 12px;
  margin-top: 40px;
}

.heart-image {
  display: flex;
  justify-content: center;
  margin: 12px 0;

  img {
    width: 80px;
  }
}

.social-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;

  img {
    &:nth-child(1), &:nth-child(3) {
      width: 60px;
      height: 60px;
    }

    &:nth-child(2) {
      width: 100px;
      height: 100px;
    }
  }
}

/* Подпись */
.signature {
  position: relative;
  font-family: Caveat;
  margin-top: 40px;
}

.signature-text {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
  text-align: center;
  width: 100%;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
