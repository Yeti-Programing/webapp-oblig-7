import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {res.json({UserID: "12341-asd231-123", Mail: "navn@epost.no"})})
router.get('/:id', (req, res) => {res.json({UserID: "12341-asd231-123", Mail: "navn@epost.no"})})
router.post('/', (req, res) => {res.json({UserID: "12341-asd231-123", Mail: "navn@epost.no"})})

export default router;