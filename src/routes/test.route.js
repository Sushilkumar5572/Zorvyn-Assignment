// Routes for health check
import express from 'express';
import { healthCheck, simulateError } from '../controllers/test.controller.js';

const router = express.Router();

// Health check endpoint
router.get('/health', healthCheck);

// Error simulation endpoint (for testing error handling)
router.get('/simulate-error', simulateError);

export default router;