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

    res.status(200).json({ message: 'Financial summary retrieved successfully', data });
});

// Get category-wise totals for dashboard
export const getCategoryTotalsController = asyncHandler(async (req, res) => {
    const data = await getCategoryTotals();

    res.status(200).json({ message: 'Category totals retrieved successfully', data });
});

// Get recent records for dashboard
export const getRecentRecordsController = asyncHandler(async (req, res) => {
    const records = await getRecentRecords();

    res.status(200).json({ message: 'Recent records retrieved successfully', data: records });
});

// Get monthly trends for dashboard
export const getMonthlyTrendsController = asyncHandler(async (req, res) => {
    const data = await getMonthlyTrends();

    res.status(200).json({ message: 'Monthly trends retrieved successfully', data });
});