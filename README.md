## Google Chrome Background Extension
Данное расширение изменяет цвет фона (конкретнее, тега body) на странице в браузере Google Chrome. \
Также, данное расширение сохраняет в локальное хранилище новый цвет и загружает его при обновлении страницы. \
\
Расширение написано с применением React, TS и составлением собственной конфигурации webpack 
## Как установить расширение себе в браузер
1. Клонировать данный репозиторий командой git clone в терминале
2. Согласно package.json установить все зависимости через npm i в терминале
3. Запустить build-скрипт командой npm run build
4. В Google Chrome открыть Управление расширениями и включить режим разработчика в правом верхнем углу
5. Нажать Загрузить распакованное расширение и указать путь до папки dist
6. Перейти на любую страницу* с помощью браузера и открыть расширение, далее следовать инструкциями интерфейса


***Страница не должна принадлежать домену chrome, поскольку браузер в целях безопасности блокирует изменение своих страниц**