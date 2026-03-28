const express = require('express');
const router = express.Router();
const { logTransaction, getHistory } = require('../controllers/transactionController');

router.post('/', logTransaction);
router.get('/', getHistory);

module.exports = router;