<template>
  <div id="carousel">
    <!-- Карусель -->
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slide" />
      </swiper-slide>
    </swiper>
    <!-- Основное содержимое -->
    <div id="main-content">
      <!-- Здесь будет основное содержимое вашего приложения -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        // Опции карусели
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      images: [
        "https://cpad.ask.fm/964/018/756/-429996987-1sp23jn-7ie8r79jj18qk00/original/Y1LIETXDtBI.jpg",
        "https://c1.35photo.pro/photos_col/r2/1572/7861756_500r.jpg",
        "https://www.yesasia.ru/wp-content/uploads/2022/12/jung-daehyun-bap.jpg",
        "https://www.alltime.ru/obj/article/image-blog/Sharapova_stil/Sharapova_stil_1.jpg",
        "https://i.pinimg.com/564x/5a/4e/aa/5a4eaad4aea8a103458bb047f153a22e.jpg",
        "https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BB%D1%8E%D0%B4%D0%B8-%D1%84%D0%BE%D1%82%D0%BE-019.jpg",
        // Добавьте дополнительные ссылки на изображения по необходимости
      ],
    };
  },
};
</script>

<style>
#carousel {
  display: flex;
  position: absolute;
  top: 2200px;
  width: 500px;
  left: 700px;
  height: 400px;
}

#main-content {
  flex-grow: 1;
  padding: 20px;
}
</style>
