const Payment = require('../models/Payment');

const makePayment = async (req, res) => {
  try {
    // Récupére les informations de paiement
    const { cardNumber, expirationDate, cvv } = req.body;

    // Valide et traite les informations de paiement
    if (!cardNumber || !expirationDate || !cvv) {
      return res.status(400).json({ error: 'Invalid payment details' });
    }

    // Enregistrer la transaction dans la base de données
    const payment = new Payment({
      cardNumber,
      expirationDate,
      cvv,
    });
    await payment.save();

    // Envoye une réponse de succès
    res.status(200).json({ message: 'Payment successful' });
  } catch (error) {
    // Gére les erreurs de paiement
    res.status(500).json({ error: 'Payment failed' });
  }
};

module.exports = {
  makePayment,
};
