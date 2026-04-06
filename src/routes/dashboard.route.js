// Routes for Dashboard
import express from 'express';
import {
    getSummaryController,
    getCategoryTotalsController,
    getRecentRecordsController,
    getMonthlyTrendsController
} from '../controllers/dashboard.controller.js';
import authenticate from '../middlewares/auth.middleware.js';
import activeUser from '../middlewares/status.middleware.js';
import authorize from '../middlewares/role.middleware.js';
import { ROLES } from '../constants/role.constant.js';

const router = express.Router();

router.use(authenticate);
router.use(activeUser);
router.use(authorize(ROLES.ADMIN, ROLES.ANALYST, ROLES.VIEWER));

router.get('/summary', getSummaryController);
router.get('/category-totals', getCategoryTotalsController);
router.get('/recent-records', getRecentRecordsController);
router.get('/monthly-trends', getMonthlyTrendsController);

export default router;