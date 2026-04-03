import express from 'express';
import cors from 'cors';
import healthRoute from './routes/health.route.js';
import authRoute from './routes/auth.route.js';
import morgan from 'morgan';


const app = express();

// Middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

import authMiddleware from './middlewares/auth.middleware.js';
import roleMiddleware from './middlewares/role.middleware.js';

app.get('/api/protected', authMiddleware, roleMiddleware('VIEWER'), (req, res) => {
  res.json({
    message: 'You accessed protected route',
    user: req.user
  });
});

app.use('/api', healthRoute);
app.use('/api/auth', authRoute);

export default app;