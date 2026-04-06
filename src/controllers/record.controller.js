// Record controller functions
import { createRecord, getAllRecords, getRecordById, updateRecord, deleteRecord } from '../services/record.service.js';
import asyncHandler from '../utils/asyncHandler.js';

// Create a new record
export const createRecordController = asyncHandler(async (req, res) => {
    const record = await createRecord(req.body, req.user._id);
    res.status(201).json({ message: 'Record created successfully', data: record });
});

// Get all records for the authenticated user
export const getRecordsController = asyncHandler(async (req, res) => {
    const filters = req.query;
    const records = await getAllRecords(filters);

    res.status(200).json({ message: 'Records retrieved successfully', data: records });
});

// Get a record by ID
export const getRecordByIdController = asyncHandler(async (req, res) => {
    const record = await getRecordById(req.params.id);

    if (!record) {
        return res.status(404).json({ message: 'Record not found' });
    }

    res.status(200).json({ message: 'Record retrieved successfully', data: record });

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

    res.status(200).json({ message: 'Record updated', data: record });

});

// Delete a record
export const deleteRecordController = asyncHandler(async (req, res) => {
    const record = await deleteRecord(req.params.id);

    if (!record) {
        return res.status(404).json({ message: 'Record not found' });
    }

    res.status(200).json({ message: 'Record deleted', data: record });

});