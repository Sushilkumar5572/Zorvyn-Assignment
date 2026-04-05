// Record controller functions
import Record from '../models/Record.model.js';
import { createRecord, getAllRecords, getRecordById, updateRecord, deleteRecord } from '../services/record.service.js';
import asyncHandler from '../utils/asyncHandler.js';

// Create a new record
export const createRecordController = asyncHandler(async (req, res) => {
    const record = await createRecord(req.body, req.user._id);
    res.status(201).json(record);
});

// Get all records for the authenticated user
export const getRecordsController = asyncHandler(async (req, res) => {
    const { type, category, from, to, page = 1, limit = 10 } = req.query;
    const query = {};

    if (type) query.type = type;
    if (category) query.category = category;

    if (from || to) {
        query.date = {};
        if (from) query.date.$gte = new Date(from);
        if (to) query.date.$lte = new Date(to);
    }

    const records = await getAllRecords(query)
        .skip((page - 1) * limit)
        .limit(Number(limit))
        .sort({ date: -1 });

    res.json(records);

});

// Get a record by ID
export const getRecordByIdController = asyncHandler(async (req, res) => {
    const record = await getRecordById(req.params.id);

    if (!record) {
        return res.status(404).json({ message: 'Record not found' });
    }

    res.json(record);

});

// Update a record
export const updateRecordController = asyncHandler(async (req, res) => {
    const record = await updateRecord(
        req.params.id,
        req.body
    )

    if (!record) {
        return res.status(404).json({ message: 'Record not found' });
    }

    res.json(record);

});

// Delete a record
export const deleteRecordController = asyncHandler(async (req, res) => {
    const record = await deleteRecord(req.params.id);

    if (!record) {
        return res.status(404).json({ message: 'Record not found' });
    }

    res.json({ message: 'Record deleted' });

});