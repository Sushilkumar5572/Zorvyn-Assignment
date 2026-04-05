// Controller for authentication
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';
import asyncHandler from '../utils/asyncHandler.js';
import { createUser, getUserByEmail } from '../services/user.service.js';

export const register = asyncHandler(async (req, res) => {

    const newUser = await createUser(req.body);
    res.status(201).json({ message: 'User registered successfully', user: newUser });

});

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = await getUserByEmail(email);

    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken(user);

    res.status(200).json({
        message: 'Login successful',
        token
    });

});
