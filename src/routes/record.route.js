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

const router = express.Router();

router.use(authenticate);
router.use(activeUser);


router.post('/', authorize(['ADMIN']), createRecordController);
router.get('/', authorize(['ADMIN', 'ANALYST']), getRecordsController);
router.get('/:id', authorize(['ADMIN', 'ANALYST']), getRecordByIdController);
router.put('/:id', authorize(['ADMIN']), updateRecordController);
router.delete('/:id', authorize(['ADMIN']), deleteRecordController);

export default router;