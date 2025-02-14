# Поиск персонажей мультсериала "Рик и Морти"

[Деплой](edelsid.github.io/character-search/)
[Макет](https://www.figma.com/design/OqXrvb70uW6plWJYGW4cvI/Rick-nad-Morti-test?node-id=101-2&p=f&t=6WyHaHyNNeCr1pRe-0)
[API](https://rickandmortyapi.com/documentation/#character)

## Использованные технологии

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Реализованные требования
- При печати в текстовом поле ведется поиск персонажа по его имени. Запрос уходит, если строка длиннее 3 символов. Принимается только английский язык.
- При заходе на страницу поиск автоматически в фокусе,
- Найденные персонажи отображаются в виде списка карточек. При клике карточка переводит на страницу из поля "url" объекта персонажа.
- У сайта есть адаптивный дизайн от минимальных версий экрана до 1920px.

## Дополнительный функционал
- При прокрутке вниз появляется кнопка отмотки к началу страницы,
- Если найдено больше 20 персонажей, дается возможность листать страницы с оставшимися,
- Сделаны компоненты ошибки и загрузки данных,
- Отельно выделяются 2 ошибки: когда персонаж не найден или его имя введено не на англ. языке. Для остальных на экран выводится или сообщение общего характера, или сообщение из самой ошибки.
- Для демонстрации загрузки в хук запроса на сервер встроена задержка случайной, но небольшой длины.

## Инструкция по запуску
```
npm i
npm run dev
```