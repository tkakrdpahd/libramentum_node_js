const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Socket.IO 이벤트 처리
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// public 디렉토리를 정적 파일 제공 디렉토리로 설정
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

// server.listen을 사용하여 HTTP 서버와 Socket.IO 서버 모두를 시작
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
