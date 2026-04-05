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


// Create new user (Admin only)
router.post('/', authorize([ROLES.ADMIN]), createNewUser);

// Get all users (Admin only)
router.get('/', authorize([ROLES.ADMIN]), getUsers);

// Update user Role or Status (Admin only)
router.put('/:id', authorize([ROLES.ADMIN]), updateUserDetails);

// Delete user (Admin only)
router.delete('/:id', authorize([ROLES.ADMIN]), deleteUserById);

// Get user by ID (Admin only)
router.get('/:id', authorize([ROLES.ADMIN]), getUserDetails);

export default router;
