<!--src/components/Footer.vue-->
<template>
  <div>
    <footer>
      <div class="footer-content">
        <div class="contact-info">
          <p>Телефон: {{ phoneNumber }}</p>
          <p>Юридический адрес: {{ legalAddress }}</p>
        </div>
        <div class="social-links">
          <a
            href="ссылка_на_ваш_facebook"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="src/components/SVG color/Facebook.svg"
              width="20"
              height="18"
            />
            Facebook</a
          >
          <a
            href="ссылка_на_ваш_twitter"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="src/components/SVG color/Snapchat.svg"
              width="20"
              height="18"
            />
            Snapchat</a
          >
          <a
            href="ссылка_на_ваш_twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/components/SVG color/Telegram.svg"
              width="20"
              height="18"
            />
            Telegram</a
          >
          <a
            href="ссылка_на_ваш_twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/components/SVG color/YouTube.svg"
              width="20"
              height="18"
            />
            YouTube</a
          >
          <a
            href="ссылка_на_ваш_twitter"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="src/components/SVG color/Behance.svg"
              width="20"
              height="18"
            />
            Behance</a
          >
          <a
            href="ссылка_на_ваш_twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/components/SVG color/WeChat.svg"
              width="20"
              height="18"
            />
            WeChat</a
          >

          <!-- Добавьте другие социальные сети по аналогии -->
        </div>
      </div>
      <p>&copy; 2023 ООО "Транзит". Все права защищены.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "+7 (951) 971-3838", // Замените на ваш номер телефона
      legalAddress: "Кондратьевский проспект 43, д.8", // Замените на ваш юридический адрес
    };
  },
};
</script>

<style scoped>
/* Стили, специфичные для этого компонента */
footer {
  position: absolute;
  top: 2650px;
  width: 1800px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 30px;
  left: 0px;
  border-radius: 5px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  text-align: left;
  font-size: 20px;
}
.social-links {
  width: 100px;
  display: flex;
  flex-wrap: wrap;
  margin-right: 250px;
}
.social-links a {
  color: #fff;
  padding-bottom: 5px;
}
</style>
