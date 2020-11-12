import express from 'express';
import { userController } from '../../controller/user/index.js';

const router = express.Router();

router.get('/', userController.users)
router.get('/:mail', userController.get)
router.post('/', userController.create)

export default router;