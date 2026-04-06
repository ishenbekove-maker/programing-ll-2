const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

// Middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Временная база данных (массив пользователей)
let users = [];

// ======================= MIDDLEWARE =======================
// Проверка JWT токена (защищённый маршрут)
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: 'Нет токена. Авторизуйтесь.' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Неверный или просроченный токен.' });
        }
        req.user = user;
        next();
    });
};

// ======================= ROUTES =======================

// 1. Кастомная регистрация
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: 'Все поля обязательны' });
        }

        // Проверка на существование пользователя
        if (users.find(u => u.email === email)) {
            return res.status(400).json({ success: false, message: 'Пользователь с таким email уже существует' });
        }

        // Хэширование пароля
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            id: Date.now().toString(),
            username,
            email,
            password: hashedPassword,
            createdAt: new Date()
        };

        users.push(newUser);

        res.status(201).json({
            success: true,
            message: 'Регистрация прошла успешно!',
            user: { id: newUser.id, username: newUser.username, email: newUser.email }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Ошибка сервера' });
    }
});

// 2. Логин + проверка пароля
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(400).json({ success: false, message: 'Неверный email или пароль' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Неверный email или пароль' });
        }

        // Создаём JWT токен
        const token = jwt.sign(
            { id: user.id, username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: 'Вход выполнен успешно',
            token,
            user: { id: user.id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Ошибка сервера' });
    }
});

// 3. Пример защищённого маршрута
app.get('/api/profile', authenticateToken, (req, res) => {
    res.json({
        success: true,
        message: 'Доступ к профилю разрешён',
        user: req.user
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Backend сервер запущен на http://localhost:${PORT}`);
});