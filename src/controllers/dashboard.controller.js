// Controller for dashboard-related operations
import asyncHandler from '../utils/asyncHandler.js';
import {
    getSummary,
    getCategoryTotals,
    getRecentRecords,
    getMonthlyTrends
} from '../services/dashboard.service.js';

// Get summary of records for dashboard
export const getSummaryController = asyncHandler(async (req, res) => {
    const data = await getSummary();

    res.json(data);
});

// Get category-wise totals for dashboard
export const getCategoryTotalsController = asyncHandler(async (req, res) => {
    const data = await getCategoryTotals();

    res.json(data);
});

// Get recent records for dashboard
export const getRecentRecordsController = asyncHandler(async (req, res) => {
    const records = await getRecentRecords();

    res.json(records);
});

// Get monthly trends for dashboard
export const getMonthlyTrendsController = asyncHandler(async (req, res) => {
    const data = await getMonthlyTrends();

    res.json(data);
});