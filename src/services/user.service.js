// Service layer for user-related operations
import User from '../models/User.model.js';
import bcrypt from 'bcryptjs';

export const createUser = async (userData) => {
    const { name, email, password, role } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();
    return newUser;
};

export const getAllUsers = async () => {
    return await User.find();
};

export const getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

export const getUserById = async (id) => {
    return await User.findById(id);
};

export const updateUser = async (id, updateData) => {
    if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    return await User.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
    );
};

export const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};