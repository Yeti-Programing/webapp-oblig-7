import express from 'express';
import { userController } from '../../controller/user/index.js';
import { validateFields } from '../../middleware/userMiddleware.js';

const router = express.Router();

router.get('/', userController.users)
router.get('/mail/:mail', userController.get)
router.get('/id/:id', userController.getId)
router.post('/', validateFields, userController.create)

export default router;