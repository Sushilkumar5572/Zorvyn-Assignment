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

const router = express.Router();

router.use(authenticate);
router.use(activeUser);


// Create new user (Admin only)
router.post('/', authorize('ADMIN'), createNewUser);

// Get all users (Admin only)
router.get('/', authorize('ADMIN'), getUsers);

// Update user Role or Status (Admin only)
router.put('/:id', authorize('ADMIN'), updateUserDetails);

// Delete user (Admin only)
router.delete('/:id', authorize('ADMIN'), deleteUserById);

// Get user by ID (Admin only)
router.get('/:id', authorize('ADMIN'), getUserDetails);

export default router;
