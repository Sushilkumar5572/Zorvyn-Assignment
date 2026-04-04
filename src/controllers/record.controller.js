// Record controller functions
import Record from '../models/Record.model.js';
import asyncHandler from '../utils/asyncHandler.js';

// Create a new record
export const createRecord = asyncHandler(async (req, res) => {
    const record = await Record.create({
        ...req.body,
        userId: req.user._id
    });
    res.status(201).json(record);
});

// Get all records for the authenticated user
export const getRecords = asyncHandler(async (req, res) => {
    const { type, category, from, to, page = 1, limit = 10 } = req.query;
    const query = {};

    if (type) query.type = type;
    if (category) query.category = category;

    if (from || to) {
        query.date = {};
        if (from) query.date.$gte = new Date(from);
        if (to) query.date.$lte = new Date(to);
    }

    const records = await Record.find({ userId: req.user._id, ...query })
        .skip((page - 1) * limit)
        .limit(Number(limit))
        .sort({ date: -1 });

    res.json(records);

});

// Update a record
export const updateRecord = asyncHandler(async (req, res) => {
    const record = await Record.findByIdAndUpdate(

        req.params.id,
        req.body,
        { new: true }
    );

    if (!record) {
        return res.status(404).json({ message: 'Record not found' });
    }

    res.json(record);

});

// Delete a record
export const deleteRecord = asyncHandler(async (req, res) => {
    const record = await Record.findByIdAndDelete(req.params.id);

    if (!record) {
        return res.status(404).json({ message: 'Record not found' });
    }

    res.json({ message: 'Record deleted' });

});