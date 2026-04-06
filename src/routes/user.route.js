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
router.use(authorize([ROLES.ADMIN])); // Only Admin can manage users

router.post('/', createNewUser);
router.get('/', getUsers);
router.put('/:id', updateUserDetails);
router.delete('/:id', deleteUserById);
router.get('/:id', getUserDetails);

export default router;
