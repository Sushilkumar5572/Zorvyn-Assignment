// Record service for business logic related to records
import Record from '../models/Record.model.js';

// Create a new record
const createRecord = async (recordData, userId) => {
    const record = new Record({ ...recordData, userId });
    return await record.save();
};

// Get all records
const getAllRecords = async (filters) => {
    const query = {};

    if (filters.type) query.type = filters.type;
    if (filters.category) query.category = filters.category;

    if (filters.from || filters.to) {
        query.date = {};
        if (filters.from) query.date.$gte = new Date(filters.from);
        if (filters.to) query.date.$lte = new Date(filters.to);
    }

    return await Record.find(query);
};

// Get records by user ID
const getRecordsByUserId = async (userId) => {
    return await Record.find({ userId });
};

// Get record by ID
const getRecordById = async (id) => {
    return await Record.findById(id);
};

// Update a record by ID
const updateRecord = async (id, updateData) => {
    return await Record.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete a record by ID
const deleteRecord = async (id) => {
    return await Record.findByIdAndDelete(id);
};

export {
    createRecord,
    getAllRecords,
    getRecordsByUserId,
    getRecordById,
    updateRecord,
    deleteRecord
};