// Controller for dashboard-related operations
import asyncHandler from '../utils/asyncHandler.js';
import Record from '../models/Record.model.js';

// Get summary of records for dashboard
export const getSummary = asyncHandler(async (req, res) => {
    const records = await Record.find({ user: req.user._id });

    let income = 0, expense = 0;
    records.forEach(record => {
        if (record.type === 'INCOME') {
            income += record.amount;
        } else if (record.type === 'EXPENSE') {
            expense += record.amount;
        }
    });

    res.json({
        totalIncome: income,
        totalExpense: expense,
        netBalance: income - expense
    })
});

// Get category-wise totals for dashboard
export const getCategoryTotals = asyncHandler(async (req, res) => {
    const data = await Record.aggregate([
        {
            $group: {
                id: '$category',
                total: { $sum: '$amount' },
            }
        }
    ]);

    res.json(data);
});

// Get recent records for dashboard
export const getRecentRecords = asyncHandler(async (req, res) => {
    const records = await Record.find()
        .sort({ date: -1 })
        .limit(5);

    res.json(records);
});

// Get monthly trends for dashboard
export const getMonthlyTrends = asyncHandler(async (req, res) => {
    const data = await Record.aggregate([
        {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" }
        }
      },
        { $sort: { "_id": 1 } }
    ]);

    res.json(data);
});