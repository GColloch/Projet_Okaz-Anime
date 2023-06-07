const { Sequelize, DataTypes } = require('sequelize');

// Création de la connexion à la base de données
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Définition du modèle de panier
const CartItem = sequelize.define('CartItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
// Synchronisation du modèle avec la base de données
CartItem.sync()
  .then(() => {
    console.log('Le modèle CartItem est synchronisé avec la base de données.');
  })
  .catch((error) => {
    console.error('Une erreur s\'est produite lors de la synchronisation du modèle CartItem :', error);
  });

// Logique pour ajouter le produit au panier de l'utilisateur dans la base de données
exports.addToCart = (userId, productId) => {
  CartItem.findOne({ where: { userId, productId } })
    .then((cartItem) => {
      if (cartItem) {
        // Si le produit est déjà présent dans le panier, mett à jour la quantité
        cartItem.quantity += 1;
        return cartItem.save();
      } else {
        // Si le produit n'est pas encore dans le panier, crée une nouvelle entrée
        return CartItem.create({ userId, productId, quantity: 1 });
      }
    })
    .then(() => {
      console.log('Le produit a été ajouté au panier de l\'utilisateur avec succès.');
    })
    .catch((error) => {
      console.error('Une erreur s\'est produite lors de l\'ajout du produit au panier de l\'utilisateur :', error);
    });
};

// Logique pour supprimer le produit du panier de l'utilisateur dans la base de données
exports.removeFromCart = (userId, productId) => {
  CartItem.findOne({ where: { userId, productId } })
    .then((cartItem) => {
      if (cartItem) {
        // Supprime l'entrée du panier de l'utilisateur
        return cartItem.destroy();
      }
    })
    .then(() => {
      console.log('Le produit a été supprimé du panier de l\'utilisateur avec succès.');
    })
    .catch((error) => {
      console.error('Une erreur s\'est produite lors de la suppression du produit du panier de l\'utilisateur :', error);
    });
};
