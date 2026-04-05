// Routes for Dashboard
import express from 'express';
import {
    getSummary,
    getCategoryTotals,
    getRecentRecords,
    getMonthlyTrends
} from '../controllers/dashboard.controller.js';
import authenticate from '../middlewares/auth.middleware.js';
import activeUser from '../middlewares/status.middleware.js';

const router = express.Router();

router.use(authenticate);
router.use(activeUser);

router.get('/summary', getSummary);
router.get('/category-totals', getCategoryTotals);
router.get('/recent-records', getRecentRecords);
router.get('/monthly-trends', getMonthlyTrends);

export default router;