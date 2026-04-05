// Model for records
import mongoose from 'mongoose';
import { TYPE } from '../constants/recordType.constant.js';

const recordSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: TYPE,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    note: {
        type: String,
    }
}, { timestamps: true });

const Record = mongoose.model('Record', recordSchema);
export default Record;