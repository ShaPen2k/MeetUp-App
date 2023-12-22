<!--src/components/Menu.vue-->

<template>
  <div class="mar">
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
    <button @click="$router.push('/lk')">Войти в личный кабинет</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, text: "Главная" },
        { id: 2, text: "Контакты" },
        { id: 3, text: "Поддержка" },
        { id: 4, text: "О нас" },
        { id: 5, text: "Справка" },
        { id: 6, text: "Блог" },
      ],
    };
  },
};
</script>

<style scoped>
/* Стили, специфичные для этого компонента */
button {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  flex: 1; /* Распределяем пространство равномерно между элементами */
  font-weight: 600;
  position: absolute;
  bottom: 810px;
  right: 100px;
}
ul {
  margin-right: 1000px;
  margin-bottom: 100px;
  width: 700px;
  padding: 0;
  display: flex;
  background-color: #eee;
  border-radius: 5px;
  flex-wrap: wrap; /* Добавляем поддержку переноса элементов на новую строку */
  list-style: none;
}

li {
  padding: 5px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  flex: 1; /* Распределяем пространство равномерно между элементами */
  font-weight: 600;
}

li:last-child {
}

/* Добавляем стили для адаптивности */
@media (max-width: 600px) {
  li {
    border-bottom: 1px solid #ccc;
    border-right: none;
    border-bottom: none;
  }
}
</style>
