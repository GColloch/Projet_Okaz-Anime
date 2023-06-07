const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

// Route pour effectuer un paiement
router.post('/payment', PaymentController.makePayment);

// Route pour récupérer l'historique des paiements
router.get('/payment/history', PaymentController.getPaymentHistory);

module.exports = router;
