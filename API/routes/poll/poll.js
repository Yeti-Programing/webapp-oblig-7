import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {res.json({UserID: "12341-asd231-123", PollID: "Poll-01"})})
router.get('/:id', (req, res) => {res.json({UserID: "12341-asd231-123", PollID: "Poll-02"})})
router.post('/', (req, res) => {res.json({UserID: "12341-asd231-123", PollID: "Poll-03"})})
router.put('/:id', (req, res) => {res.json({UserID: "12341-asd231-123", PollID: "Poll-04"})})

export default router;