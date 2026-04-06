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
router.use(authorize([ROLES.ADMIN, ROLES.ANALYST, ROLES.VIEWER])); // All roles can access dashboard

/** * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard data and analytics
 */

/**
 * @swagger
 * /api/dashboard/summary:
 *   get:
 *     summary: Get financial summary for the current month
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Financial summary retrieved successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 *
 * /api/dashboard/category-totals:
 *   get:
 *     summary: Get category-wise totals for the current month
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Category totals retrieved successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 * 
 * /api/dashboard/recent-records:
 *   get:
 *     summary: Get recent records for the current month
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Recent records retrieved successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 * 
 * /api/dashboard/monthly-trends:
 *   get:
 *     summary: Get monthly trends for the current year
 *     tags: [Dashboard]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Monthly trends retrieved successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 */
router.get('/summary', getSummaryController);
router.get('/category-totals', getCategoryTotalsController);
router.get('/recent-records', getRecentRecordsController);
router.get('/monthly-trends', getMonthlyTrendsController);

export default router;