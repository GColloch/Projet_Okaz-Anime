export const addToCart = async (productId) => {
  try {
    // Logique pour envoyer une requête POST pour ajouter un produit au panier
    const response = await fetch('/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
    } else {
      console.error('Erreur lors de l\'ajout du produit au panier');
    }
  } catch (error) {
    console.error('Erreur lors de la communication avec le serveur', error);
  }
};

export const removeFromCart = async (productId) => {
  try {
    // Logique pour envoyer une requête DELETE pour supprimer un produit du panier
    const response = await fetch(`/cart/remove/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
    } else {
      console.error('Erreur lors de la suppression du produit du panier');
    }
  } catch (error) {
    console.error('Erreur lors de la communication avec le serveur', error);
  }
};
