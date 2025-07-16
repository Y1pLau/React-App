// server.js (CommonJS)
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const protectedRoute= require('./routes/protectedRoute');
dotenv.config();
const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/task', taskRoutes);
app.use('/protected', protectedRoute);
module.exports = app;