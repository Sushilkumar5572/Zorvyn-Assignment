import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';

import authRoute from './routes/auth.route.js';
import recordRoute from './routes/record.route.js';
import dashboardRoute from './routes/dashboard.route.js';
import userRoute from './routes/user.route.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

// Middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Financial Dashboard API' });
});

app.use('/api/auth', authRoute);
app.use('/api/records', recordRoute);
app.use('/api/dashboard', dashboardRoute);
app.use('/api/users', userRoute);

// Swagger documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error handling middleware
app.use(errorMiddleware);

export default app;