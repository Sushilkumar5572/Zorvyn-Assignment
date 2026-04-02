const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const healthRoute = require('./routes/health.route');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// connectDB();

// Routes
app.use('/api', healthRoute);

module.exports = app;