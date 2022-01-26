## Подготовка к работе

1. `yarn install`
2. `yarn start`

## Структура проекта

```
gulp-template
├── src
│   ├── css
│   ├── fonts
│   ├── img
│   ├── svg
│   ├── js
│   ├── sass
│   ├── public
│   ├── templates
│   └── pages
├── package.json
├── README.md
├── gulpfile.js
├── .babelrc
├── .browserslistrc
├── .prettierrc
├── .prettierignore
└── .gitignore
```

* Корень проекта:
    * ```.babelrc``` — настройки Babel
    * ```.prettierrc``` — настройки Prettier
    * ```.prettierignore``` — запрет изменения файлов Prettier
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```package.json``` — список зависимостей
    * ```README.md``` — описание проекта
    * ```gulpfile.js``` — файл конфигурации Gulp
    * ```.browserslistrc``` — файл конфигурации поддерживаемых версий браузеров
    
* Папка ```src``` - используется во время разработки:
    * ```css``` — директория для файлов css библиотек, изначально тут лежит файл сброса стилей
    * ```fonts``` – директория для шрифтов
    * ```img``` — директория для изображений
    * ```svg``` — папка для SVG файлов, для последующей генерации SVG спрайта которые автоматически сгенерируется в папке img
    * ```js``` — директория для js библиотек. Здесь  лежит:
        - `app.js` для кастомного кода;
    * ```sass``` — директория для sass файлов
    * ```public``` — директория для пользовательских файлов, все файлы из неё будут скопированы в корень собранного проекта
    * ```templates``` — директория для html файлов которые добавляются в проекте
    * ```pages``` — директория для html страниц

 ## Верстка
Команды для сборки:
 - `yarn start` запускает сборку и локальный сервер с Hot Reloading
 - `yarn build` запускает сборку и на выходе получаем собранные, но не минифицированные  файлы app.js и app.css для последующей передачи программистам
 
## PostHTML

Для расстановки правильных переносов используется плагин [PostHTML Richtypo](https://github.com/Grawl/posthtml-richtypo). Для блока в котором вы хотите отформатировать текст необходимо указать атрибут `data-typo`:
```
<p data-typo>Тут текст</p>
```

Для шаблонизации в проекте используется [Gulp PostHTML](https://github.com/posthtml/gulp-posthtml) с плагинами [PostHTML Include](https://github.com/posthtml/posthtml-include) и [PostHTML Expressions](https://github.com/posthtml/posthtml-expressions)

### Добавление файлов
Что бы просто вставить один файл в другой используется конструкция `<include>`, пример кода:
```
<include src="src/templates/header.html"></include>
```

### Компоненты
Для того что бы извне передать в вставляемый файл какие либо данные необходимо использовать директиву `locals`, и передать туда данные в виде JSON объекта, пример кода:
```
<include src="src/templates/head.html" locals='{"title": "Главная страница"}'></include>
```