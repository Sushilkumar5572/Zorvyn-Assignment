// Routes for records
import express from 'express';
import {
    createRecordController,
    getRecordsController,
    getRecordByIdController,
    updateRecordController,
    deleteRecordController
} from '../controllers/record.controller.js';
import authenticate from '../middlewares/auth.middleware.js';
import authorize from '../middlewares/role.middleware.js';
import activeUser from '../middlewares/status.middleware.js';
import { ROLES } from '../constants/role.constant.js';

const router = express.Router();

router.use(authenticate);
router.use(activeUser);


router.post('/', authorize([ROLES.ADMIN]), createRecordController); // Only Admin can create records
router.get('/', authorize([ROLES.ADMIN, ROLES.ANALYST]), getRecordsController); // Admin and Analyst can view records
router.get('/:id', authorize([ROLES.ADMIN, ROLES.ANALYST]), getRecordByIdController); // Admin and Analyst can view record details
router.put('/:id', authorize([ROLES.ADMIN]), updateRecordController); // Only Admin can update records
router.delete('/:id', authorize([ROLES.ADMIN]), deleteRecordController); // Only Admin can delete records

export default router;