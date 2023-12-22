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
import Menu from "./Menu.vue";
import MainRes from "./MainRes.vue";
import Carousel from "./Carousel.vue";
import Footer from "./Footer.vue";

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
