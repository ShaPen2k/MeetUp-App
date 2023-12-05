<!-- src/App.vue -->

<template>
  <div id="app">
    <Menu></Menu>
    <MainRes></MainRes>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import MainRes from "./components/MainRes.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Menu,
    MainRes,
    Footer,
  },
};
</script>

<style>
/* Стили для основного компонента */
</style>
