# Простое веб-приложение с аутентификацией JWT

## 📌 Описание проекта
Этот проект представляет собой простое веб-приложение с аутентификацией на основе **JSON Web Token (JWT)**. Оно позволяет пользователям:
- **Регистрироваться**
- **Входить в систему**
- **Получать доступ к защищённым ресурсам** после аутентификации

### 🔧 Технологии
**Бэкенд:**
- Node.js
- Express.js
- JSON Web Token (JWT)
- CORS
- Body-parser

**Фронтенд:**
- Чистый HTML, CSS, JavaScript (без фреймворков)
- Fetch API для запросов к серверу

---

## 🚀 Запуск проекта

### 1️⃣ Установка зависимостей
Для работы требуется установленный [Node.js](https://nodejs.org/).

Скачайте файлы проекта и выполните команду в терминале:
```sh
npm install
```

### 2️⃣ Запуск бэкенда
Запустите сервер командой:
```sh
node server.js
```
Сервер будет работать на **http://localhost:3000**.

### 3️⃣ Запуск фронтенда
Просто откройте файл `index.html` в браузере.

---

## 📜 API Эндпоинты

### 🔹 Регистрация пользователя
**POST** `/register`
- **Тело запроса:**
  ```json
  {
    "username": "user1",
    "password": "pass123"
  }
  ```
- **Ответ:**
  ```json
  { "message": "Регистрация успешна" }
  ```

### 🔹 Вход в систему (получение JWT)
**POST** `/login`
- **Тело запроса:**
  ```json
  {
    "username": "user1",
    "password": "pass123"
  }
  ```
- **Ответ (успех):**
  ```json
  { "token": "JWT_TOKEN_HERE" }
  ```

### 🔹 Доступ к защищённым данным
**GET** `/protected`
- **Заголовки:**
  ```
  Authorization: Bearer JWT_TOKEN_HERE
  ```
- **Ответ (успех):**
  ```json
  { "message": "Привет, user1! Это защищенные данные." }
  ```

- **Ответ (ошибка, нет токена):**
  ```json
  { "message": "Требуется токен" }
  ```

---

## 🖥 Интерфейс фронтенда

На странице `index.html` есть:
- Поля для **регистрации**
- Поля для **входа**
- Кнопка для **запроса защищённых данных**
- Вывод сообщений (ошибки, токен, данные)

---

## 🛠 Возможные улучшения
✅ Хранение пользователей в базе данных (например, MongoDB, PostgreSQL)
✅ Улучшенный UI с использованием CSS/Bootstrap
✅ Добавление функции выхода (удаление токена)
✅ Улучшенная обработка ошибок

---

## 🏆 Автор
Проект создан с любовью ❤️ и вниманием к деталям. 🚀

