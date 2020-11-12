import express from 'express';
import { getUsers, getUserByMail, createUser } from '../../controller/user/userController.js';
import { validateFields } from '../../middleware/userMiddleware.js'

const router = express.Router();

router.get('/', getUsers)
router.get('/:mail', getUserByMail)
router.post('/', validateFields, createUser)

export default router;