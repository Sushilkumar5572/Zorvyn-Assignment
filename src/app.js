import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import healthRoute from './routes/health.route.js';
import authRoute from './routes/auth.route.js';
import recordRoute from './routes/record.route.js';

const app = express();

// Middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.use('/api', healthRoute);
app.use('/api/auth', authRoute);
app.use('/api/records', recordRoute);

export default app;