// User Model
import mongoose from 'mongoose';
import { ROLES } from '../constants/role.constant.js';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ROLES,
        default: ROLES.VIEWER,
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE',
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;