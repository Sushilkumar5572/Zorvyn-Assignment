// Record service for business logic related to records
import Record from '../models/Record.model.js';

// Create a new record
const createRecord = async (recordData, userId) => {
    const record = new Record({ ...recordData, userId });
    return await record.save();
};

// Get all records
const getAllRecords = async (query) => {
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
    await Record.findByIdAndDelete(id);
};

export {
    createRecord,
    getAllRecords,
    getRecordsByUserId,
    getRecordById,
    updateRecord,
    deleteRecord
}