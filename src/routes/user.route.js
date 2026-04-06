// User Routes
import express from 'express';
import {
    createNewUser,
    getUsers,
    updateUserDetails,
    deleteUserById,
    getUserDetails
} from '../controllers/user.controller.js';
import authorize from '../middlewares/role.middleware.js';
import authenticate from '../middlewares/auth.middleware.js';
import activeUser from '../middlewares/status.middleware.js';
import { ROLES } from '../constants/role.constant.js';

const router = express.Router();

router.use(authenticate);
router.use(activeUser);
router.use(authorize(ROLES.ADMIN));


// Create new user (Admin only)
router.post('/', createNewUser);

// Get all users (Admin only)
router.get('/', getUsers);

// Update user Role or Status (Admin only)
router.put('/:id', updateUserDetails);

// Delete user (Admin only)
router.delete('/:id', deleteUserById);

// Get user by ID (Admin only)
router.get('/:id', getUserDetails);

export default router;
