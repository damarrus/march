# march

Как конфигать:
Вся логика основана на 5 сущностях:
1. Dialog - это контейнер с фразами. Так же можно его считать текущим "местом" в котором находится игрок.
2. Phrase - это конкретная фраза, которую выбирает игрок. 
У фразы могут быть условия (Conditions), которые определяют, будет ли показана фраза.
У фразы могут быть действия (Actions), которые будут исполнятся, когда игрок выбрал фразу.
После проигрывания фразы будет запущен диалог, указанный в nextDialog. Это может быть и тот же самый диалог.
3. Conditions - это условия для фраз и эффектов (Effects). 
4. Action - это действия, которые состоят из эффектов.
Могут использоваться условия, при успехе которых сыграются одни эффекты (successEffects), при провале - другие (failedEffects)
5. Effect - используются для изменения параметров (Tags). Именно эффекты изменяют текущее состояние игры.
6. Tag - это пара ключ-значение { name: string, value: string | boolean | number}

Логика - src/dialogs.ts
Иконки-эмоджи - src/icons.ts
Картинки - images/

Как установить:
1. Устанавливаем последнюю версию NodeJS https://nodejs.org/en/download
2. Скачиваем библиотеки npm i
3. Создаем нового бота в BotFather (описание ниже)
4. Создаем файл bot_token в корневой папке и копируем туда токен (пример bot_token_example)
5. Создаем файл db.json и копируем в неё значения из файла db_example.json

Как создать нового бота в BotFather:
1. Заходим в телеграм.
2. Отправьте в чат с BotFather команду /newbot.
3. Введите название бота — в этой категории особых ограничений нет.
4. Введите юзернейм бота — его техническое имя, которое будет отображаться в адресной строке. К нему уже больше требований: юзернейм должен быть уникальным, написан на латинице и обязательно заканчиваться на bot.
5. Готово. BotFather пришлет токен бота — его можно использовать для настройки в сторонних сервисах.

Как запустить:
npm start 

Как применить изменения:
1. Сохранить изменения
2. Завершить процесс в терминале (ctrl+c)
3. Запустить процесс заново npm start