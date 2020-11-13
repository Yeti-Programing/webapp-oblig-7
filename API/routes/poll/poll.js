import express from 'express';
import { pollController } from '../../controller/poll/index.js';

const router = express.Router();

router.get('/', pollController.polls)
router.get('/:pollid', pollController.getPolls);
router.post('/', pollController.createPoll);

export default router;