const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const profiles = require('./profiles');
const projects = require('./projects');
const chat = require('./chat');
const ai = require('./ai');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/profiles', profiles);
app.use('/api/projects', projects);
app.use('/api/chat', chat(io));
app.use('/api/match', ai);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
