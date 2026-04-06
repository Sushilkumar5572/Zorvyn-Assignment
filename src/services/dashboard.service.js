// Service layer for dashboard related operations
import Record from '../models/Record.model.js';
import { getAllRecords } from './record.service.js';

// Get summary of records for dashboard
const getSummary = async () => {
    const records = await getAllRecords({});

    let income = 0, expense = 0;
    records.forEach(record => {
        if (record.type === 'INCOME') {
            income += record.amount;
        } else if (record.type === 'EXPENSE') {
            expense += record.amount;
        }
    });

    return {
        totalIncome: income,
        totalExpense: expense,
        netBalance: income - expense
    };
};

// Get category-wise totals for dashboard
const getCategoryTotals = async () => {
    const data = await Record.aggregate([
        {
            $group: {
                _id: '$category',
                total: { $sum: '$amount' },
            }
        }
    ]);

    return data;
};

// Get recent records for dashboard
const getRecentRecords = async () => {
    const records = await Record.find()
        .sort({ date: -1 })
        .limit(5);

    return records;
};

// Get monthly trends for dashboard
const getMonthlyTrends = async () => {
    const data = await Record.aggregate([
        {
            $group: {
                _id: { $month: "$date" },
                total: { $sum: "$amount" }
            }
        },
        { $sort: { "_id": 1 } }
    ]);

    return data;
};

export {
    getSummary,
    getCategoryTotals,
    getRecentRecords,
    getMonthlyTrends
};