// Controller for authentication
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';
import asyncHandler from '../utils/asyncHandler.js';
import { createUser, getUserByEmail } from '../services/user.service.js';
import { ROLES } from '../constants/role.constant.js';

// Register new user as VIEWER by default
export const register = asyncHandler(async (req, res) => {

    req.body.role = ROLES.VIEWER; // Default role for new users
    const newUser = await createUser(req.body);
    res.status(201).json({ message: 'User registered successfully', user: newUser });

});

// Login user and return JWT token
export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Enter Email and Password' });
    }

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
