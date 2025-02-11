require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const geoip = require('geoip-lite');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📌 Раздача статических файлов (указываем правильный путь)
app.use(express.static(path.join(__dirname)));

/**
 * 📩 Функция для отправки сообщений в Telegram
 */
async function sendToTelegram(message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    try {
        const response = await axios.post(url, {
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "HTML"
        });
        console.log("✅ Сообщение отправлено в Telegram:", response.data);
    } catch (error) {
        console.error("❌ Ошибка отправки в Telegram:", error.response ? error.response.data : error);
    }
}

/**
 * 📥 Обработка POST-запроса на сохранение данных
 */
app.post('/save-data', async (req, res) => {
    try {
        const userData = req.body;
        let clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        // 📌 Исправляем IP (убираем ::ffff:)
        clientIp = clientIp.replace(/^::ffff:/, '');

        // Определяем геоданные
        const geo = geoip.lookup(clientIp) || {};
        userData.ip = clientIp;
        userData.country = geo.country || 'Неизвестно';
        userData.city = geo.city || 'Неизвестно';
        userData.region = geo.region || 'Неизвестно';
        userData.timezone = geo.timezone || 'Неизвестно';
        userData.userAgent = req.headers['user-agent'] || 'Неизвестно';

        // 📌 Логируем реальный IP
        console.log(`🌍 Новый посетитель: IP=${clientIp}, Страна=${userData.country}, Город=${userData.city}`);

        // Записываем в файл
        const filePath = path.join(__dirname, 'user_data.json');
        fs.appendFile(filePath, JSON.stringify(userData, null, 2) + ",\n", (err) => {
            if (err) {
                console.error('❌ Ошибка сохранения файла:', err);
                return res.status(500).json({ message: 'Ошибка при сохранении файла' });
            }
            console.log('✅ Данные сохранены:', filePath);

            // Формируем сообщение для Telegram
            const message = `
🌍 <b>Новый посетитель сайта</b>
--------------------------------------------
🌍 <b>Страна:</b> ${userData.country}
🏙 <b>Регион, город:</b> ${userData.region}, ${userData.city}
⏰ <b>Временная зона:</b> ${userData.timezone}
🖥 <b>IP:</b> <code>${userData.ip}</code>
🤖 <b>User-Agent:</b> <code>${userData.userAgent}</code>
--------------------------------------------
`;

            // Отправляем сообщение
            sendToTelegram(message);

            res.status(200).json({ message: 'Данные успешно сохранены и отправлены' });
        });
    } catch (error) {
        console.error('❌ Ошибка обработки JSON:', error);
        res.status(400).json({ message: 'Некорректные данные' });
    }
});

/**
 * 🌍 Запуск сервера
 */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
