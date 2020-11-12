import express from 'express';
import { getUsers, getUserByMail } from '../../controller/user/userController.js';

const router = express.Router();

router.get('/', getUsers)
router.get('/:mail', getUserByMail)
router.post('/', getUsers)

export default router;