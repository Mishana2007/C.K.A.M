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
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Функция для отправки сообщений в Telegram
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
 * Обработка POST-запроса на сохранение данных
 */
app.post('/save-data', async (req, res) => {
    try {
        const userData = req.body;
        let clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

// Если IP приходит в формате "192.168.1.1, 176.124.213.215", берем последний
if (clientIp.includes(',')) {
    clientIp = clientIp.split(',').pop().trim();
}

// Приводим IPv6 к IPv4
if (clientIp.includes(':')) {
    clientIp = clientIp.split(':').pop();
}
console.log("📡 Получен IP:", clientIp);
        userData.ip = clientIp;

        // Определяем страну и город
        const geo = geoip.lookup(clientIp);
if (!geo) {
    console.log("⚠️ Геолокация не найдена для IP:", clientIp);
} else {
    console.log(`🌍 Геолокация: ${geo.country}, ${geo.city}`);
}
        userData.country = geo.country || 'Неизвестно';
        userData.city = geo.city || 'Неизвестно';
        userData.region = geo.region || 'Неизвестно';
        userData.timezone = geo.timezone || 'Неизвестно';
        userData.userAgent = req.headers['user-agent'] || 'Неизвестно';

        // Записываем в файл
        const filePath = path.join(__dirname, 'user_data.json');
        fs.appendFile(filePath, JSON.stringify(userData, null, 2) + ",\n", (err) => {
            if (err) {
                console.error('❌ Ошибка сохранения файла:', err);
                return res.status(500).json({ message: 'Ошибка при сохранении файла' });
            }
            console.log('✅ Данные сохранены:', filePath);

            // Формируем сообщение для Telegram (каждый новый посетитель – отдельное сообщение)
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
// Отправляем сообщение о новом посетителе
sendToTelegram(message);

res.status(200).json({ message: 'Данные успешно сохранены и отправлены' });
});
} catch (error) {
console.error('❌ Ошибка обработки JSON:', error);
res.status(400).json({ message: 'Некорректные данные' });
}
});

/**
* Запуск сервера
*/

// 📌 Раздача статических файлов из папки "C.K.A.M"
app.use(express.static(__dirname)); // 📌 Раздача файлов из текущей папки

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "index.html")); // 📌 Теперь путь корректный
});
app.listen(PORT, () => {
console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
