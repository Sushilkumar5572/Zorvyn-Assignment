// Routes for records
import express from 'express';
import { getRecords, createRecord, updateRecord, deleteRecord } from '../controllers/record.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import allowedRoles from '../middlewares/role.middleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', allowedRoles(['ADMIN']), createRecord);
router.get('/', allowedRoles(['ADMIN', 'ANALYST']), getRecords);
router.put('/:id', allowedRoles(['ADMIN']), updateRecord);
router.delete('/:id', allowedRoles(['ADMIN']), deleteRecord);

export default router;