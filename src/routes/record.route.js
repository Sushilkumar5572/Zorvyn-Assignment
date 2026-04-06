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

/** * @swagger
 * tags:
 *   name: Records
 *   description: Record management
 */
/** * @swagger
 * /api/records:
 *   post:
 *     summary: Create a new record
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Record created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 *
 *   get:
 *     summary: Get all records for the authenticated user
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Records retrieved successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 *
 * /api/records/{id}:
 *   get:
 *     summary: Get a record by ID
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Record retrieved successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Record not found
 *       500:
 *         description: Internal server error
 *
 *   put:
 *     summary: Update a record by ID
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Record updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Record not found
 *       500:
 *         description: Internal server error
 *
 *   delete:
 *     summary: Delete a record by ID
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Record deleted successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Record not found
 *       500:
 *         description: Internal server error
 */

router.post('/', authorize([ROLES.ADMIN]), createRecordController); // Only Admin can create records
router.get('/', authorize([ROLES.ADMIN, ROLES.ANALYST]), getRecordsController); // Admin and Analyst can view records
router.get('/:id', authorize([ROLES.ADMIN, ROLES.ANALYST]), getRecordByIdController); // Admin and Analyst can view record details
router.put('/:id', authorize([ROLES.ADMIN]), updateRecordController); // Only Admin can update records
router.delete('/:id', authorize([ROLES.ADMIN]), deleteRecordController); // Only Admin can delete records

export default router;