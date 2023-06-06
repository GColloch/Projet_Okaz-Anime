import React, { useEffect, useState } from 'react';
import PaymentService from '../services/PaymentService';

function PaymentHistory() {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      const history = await PaymentService.getPaymentHistory();
      setPaymentHistory(history);
    } catch (error) {
      setError('Failed to fetch payment history');
    }
  };

  return (
    <div>
      <h2>Historique des paiements</h2>
      {error && <p>{error}</p>}
      {paymentHistory.map((payment) => (
        <div key={payment._id}>
          <p>Date: {payment.timestamp}</p>
          <p>Numéro de carte: {payment.cardNumber}</p>
          <p>Date d'expiration: {payment.expirationDate}</p>
          <p>CVV: {payment.cvv}</p>
        </div>
      ))}
    </div>
  );
}

export default PaymentHistory;