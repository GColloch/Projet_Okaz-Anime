import React, { useState } from 'react';
import PaymentService from '../services/PaymentService';

function PaymentForm() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    try {
      await PaymentService.makePayment(paymentData);
      // Traite la réponse de succès
      alert('Paiement effectué avec succès');
      // Réinitialise les champs de paiement
      setPaymentData({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
      });
    } catch (error) {
      // Gére les erreurs de paiement
      alert('Erreur lors du paiement. Veuillez réessayer.');
    }
  };

  const handleInputChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handlePaymentSubmit}>
      <input
        type="text"
        name="cardNumber"
        value={paymentData.cardNumber}
        onChange={handleInputChange}
        placeholder="Numéro de carte"
        required
      />
      <input
        type="text"
        name="expirationDate"
        value={paymentData.expirationDate}
        onChange={handleInputChange}
        placeholder="Date d'expiration"
        required
      />
      <input
        type="text"
        name="cvv"
        value={paymentData.cvv}
        onChange={handleInputChange}
        placeholder="CVV"
        required
      />
      <button type="submit">Payer</button>
    </form>
  );
}

export default PaymentForm;
