// server.js (CommonJS)
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const protectedRoute= require('./routes/protectedRoute');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(cors({
  origin: 'http://localhost:5173', 
}));
app.use(express.json());
app.use('/user', userRoutes);
app.use('/task', taskRoutes);
app.use('/protected', protectedRoute);
module.exports = app;