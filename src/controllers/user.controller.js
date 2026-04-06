// Controller for user-related operations
import asyncHandler from '../utils/asyncHandler.js';
import { getUserById, updateUser, deleteUser, createUser, getUserByEmail, getAllUsers } from '../services/user.service.js';

export const createNewUser = asyncHandler(async (req, res) => {

    const exist = await getUserByEmail(req.body.email);
    if (exist) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = await createUser(req.body);
    res.status(201).json({ message: 'User created successfully', user: newUser });
});

// Get all users
export const getUsers = asyncHandler(async (req, res) => {
    const users = await getAllUsers();
    res.status(200).json({ message: 'Users fetched successfully', users });
});

// Update user Role or Status
export const updateUserDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const updatedUser = await updateUser(id, updateData);
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
});

// Delete user
export const deleteUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (id === req.user._id.toString()) {
        return res.status(400).json({ message: 'You cannot delete your own account' });
    }

    await deleteUser(id);
    res.status(200).json({ message: 'User deleted successfully' });
});

// Get user by ID
export const getUserDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const user = await getUserById(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User details fetched successfully', user });
});

