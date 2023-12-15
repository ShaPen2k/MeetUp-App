<!-- src/App.vue -->

<template>
  <div id="app">
    <Menu></Menu>
    <MainRes></MainRes>
    <Carousel></Carousel>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import MainRes from "./components/MainRes.vue";
import Carousel from "./components/Carousel.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Menu,
    MainRes,
    Carousel,
    Footer,
  },
};
</script>

<style>
/* Стили для основного компонента */
</style>
