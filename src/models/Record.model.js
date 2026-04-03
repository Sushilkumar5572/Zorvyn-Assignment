// Model for records
import mongoose from 'mongoose';

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
        enum: ['INCOME', 'EXPENSE'],
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