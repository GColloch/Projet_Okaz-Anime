const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route pour ajouter un produit au panier
router.post('/add', authMiddleware, cartController.addToCart);

// Route pour supprimer un produit du panier
router.delete('/remove/:productId', authMiddleware, cartController.removeFromCart);


module.exports = router;
