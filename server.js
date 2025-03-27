const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;
const SECRET_KEY = "supersecret";

// Массив пользователей (храним в памяти)
const users = [];

app.use(cors());
app.use(bodyParser.json());

// Регистрация
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: "Пользователь уже существует" });
    }
    users.push({ username, password });
    res.json({ message: "Регистрация успешна" });
});

// Вход (получение JWT)
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: "Неверные учетные данные" });
    }
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});

// Middleware для проверки JWT
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Требуется токен" });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: "Неверный токен" });
        req.user = user;
        next();
    });
};

// Защищенный маршрут
app.get("/protected", authenticateToken, (req, res) => {
    res.json({ message: `Привет, ${req.user.username}! Это защищенные данные.` });
});

app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
