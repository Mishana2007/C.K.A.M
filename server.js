const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json'
    };

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (req.url === '/save-data' && req.method === 'POST') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    try {
                        const userData = JSON.parse(body);
                        const filePath = path.join(__dirname, 'user_data.json');
                        fs.writeFile(filePath, JSON.stringify(userData, null, 2), (err) => {
                            if (err) {
                                console.error('Ошибка при сохранении файла:', err);
                                res.writeHead(500, { 'Content-Type': 'text/plain' });
                                res.end('Ошибка при сохранении файла');
                            } else {
                                console.log('Данные успешно сохранены в файл:', filePath);
                                res.writeHead(200, { 'Content-Type': 'text/plain' });
                                res.end('Данные успешно сохранены');
                            }
                        });
                    } catch (error) {
                        console.error('Ошибка разбора JSON:', error);
                        res.writeHead(400, { 'Content-Type': 'text/plain' });
                        res.end('Некорректные данные');
                    }
                });
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Страница не найдена</h1>');
            }
        } else {
            const contentTypeHeader = contentType[extname] || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': contentTypeHeader });
            res.end(content);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});