const cartModel = require('../models/cartModel');

exports.addToCart = (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  // Logique pour ajouter le produit au panier dans la base de données
  cartModel.addToCart(userId, productId);

  res.status(200).json({ message: 'Produit ajouté au panier avec succès' });
};

exports.removeFromCart = (req, res) => {
  const { productId } = req.params;
  const userId = req.user.id; 

  // Logique pour supprimer le produit du panier dans la base de données
  cartModel.removeFromCart(userId, productId);

  res.status(200).json({ message: 'Produit supprimé du panier avec succès' });
};
