<!--src/components/MainRes.vue-->

<template>
  <div>
    <div class="grektitle">
      <a>MeetUp</a>
    </div>
    <div class="box">
      <div class="text">Самые популярные объявления дня</div>
      <div class="kartinka"></div>
      <div class="reklama">
        У меня собачка такса по имени Лариса. <br />Ищу партнера на прогулку с
        такой же собачкой. <br />Желательно без блох :D<br /><br />
        <div class="knopka"><a href="#">Просмотреть</a></div>
      </div>
      <div class="kartinka2"></div>
      <div class="reklama">
        Профессиональный фотограф ищет талантливую<br />
        модель для практики и совместной работы над<br />
        уникальными фотографиями. Если ты мечтаешь<br />
        о том, чтобы стать частью красивых и эмоциональных<br />
        образов, то это объявление для тебя.
        <div class="knopka">
          <a href="#"><br />Просмотреть</a>
        </div>
      </div>
      <div class="kartinka3"></div>
      <div class="reklama">
        Мне нужен креативный, технически подкованный<br />
        и талантливый фотограф, готовый сотрудничать<br />
        и создавать уникальные образы. Я предлагаю<br />тебе возможность
        работать с опытной и<br />
        выразительной моделью
        <div class="knopka">
          <a href="#"><br />Просмотреть</a>
        </div>
      </div>
      <div class="kartinka4"></div>
      <div class="reklama">
        Привет! Меня зовут Миша, и я гонщик, который<br />
        ищет достойного соперника для захватывающей<br />
        гонки. Если вы ищете гонщика с адреналином в<br />
        крови и страстью к скорости, то вы нашли<br />
        правильного человека!
        <div class="knopka">
          <a href="#"><br />Просмотреть</a>
        </div>
      </div>
      <div class="kartinka5"></div>
      <div class="reklama">
        Профессиональный дрифтер ищет достойного партнера<br />
        для захватывающих гонок на предельной скорости.<br />
        Если ты разделяешь страсть к дрифту и готов испытать<br />
        себя в феерических соревнованиях, то это объявление<br />для тебя.
        <div class="knopka">
          <a href="#"><br />Просмотреть</a>
        </div>
      </div>
      <br />
      <div class="personText">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >Самые красивые пользователи сайта</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  position: absolute;
  top: 350px;
  left: 180px;
}
.grektitle {
  font-size: 70px;
  width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 500px;
  margin-left: auto;
  margin-right: auto;
  color: #f36223;
  font-weight: 600;
  text-shadow: 2px 2px #000;
}
.personText {
  margin-left: 260px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 600;
  text-shadow: 2px 2px #000;
}
.reklama {
  margin-top: 40px;
  font-size: 20px;
  text-align: left;
  background-color: #a2a2d0;
  width: 1000px;
  height: 250px;
  color: black;
  border-radius: 20px;
  margin-left: 200px;
  padding-top: 50px;
  padding-left: 50px;
  font-weight: 700;
  letter-spacing: 1px;
}
.kartinka {
  position: absolute;
  margin-top: 40px;
  width: 450px;
  height: 300px; /* Ширина и высота */
  border-radius: 10%; /* Превращаем в круг */
  background: url(src/assets/Images/woman.jpg);
  background-size: auto 300px;
  left: 890px;
}
.kartinka2 {
  position: absolute;
  margin-top: 40px;
  width: 450px;
  height: 300px; /* Ширина и высота */
  border-radius: 10%; /* Превращаем в круг */
  background: url(src/assets/Images/photograf.jpg);
  background-size: auto 300px;
  left: 890px;
}
.kartinka3 {
  position: absolute;
  margin-top: 40px;
  width: 450px;
  height: 300px; /* Ширина и высота */
  border-radius: 10%; /* Превращаем в круг */
  background: url(src/assets/Images/model.jpg);
  background-size: auto 300px;
  left: 890px;
}
.kartinka4 {
  position: absolute;
  margin-top: 40px;
  width: 450px;
  height: 300px; /* Ширина и высота */
  border-radius: 10%; /* Превращаем в круг */
  background: url(src/assets/Images/car.jpg);
  background-size: auto 300px;
  left: 890px;
}
.kartinka5 {
  position: absolute;
  margin-top: 40px;
  width: 450px;
  height: 300px; /* Ширина и высота */
  border-radius: 10%; /* Превращаем в круг */
  background: url(src/assets/Images/car2.jpg);
  background-size: auto 300px;
  left: 890px;
}
.text {
  font-size: 40px;
  margin-left: 200px;
  font-weight: 600;
}
.knopka {
  width: 165px;
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: 700;
  border-radius: 20px;
  transition: 0.2s ease-in-out;
}
.knopka:hover {
  transform: scale(1.4);
}
.knopka a {
  text-decoration: none;
  font-weight: 700;
  color: rgb(112, 112, 112);
  outline: none;
}
.widget {
  padding: 20px 30px;
  font-size: 30px;
}
.widget-title {
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #222;
  font-size: 24px;
  padding-left: 15px;
  margin-bottom: 15px;
  font-weight: 600;
}
.widget-list {
  padding: 0;
  list-style: none;
}
.widget-list a:before {
  content: "\2014";
  margin-right: 14px;
}
.widget-list a {
  text-decoration: none;
  outline: none;
  display: block;
  padding: 6px 0;
  letter-spacing: 1px;
  font-weight: 300;
  color: #444;
  transition: 0.3s linear;
}
.widget-list a:hover {
  color: #b99d61;
}
</style>
