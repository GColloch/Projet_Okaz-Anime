const API_URL = 'http://localhost:5000/apiPayment';

const PaymentService = {
  makePayment: async (paymentData) => {
    try {
      const response = await fetch(`${API_URL}/payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData),
      });
      if (!response.ok) {
        throw new Error('Payment failed');
      }
    } catch (error) {
      throw new Error('Payment failed');
    }
  },

  getPaymentHistory: async () => {
    try {
      const response = await fetch(`${API_URL}/payment/history`);
      if (!response.ok) {
        throw new Error('Failed to fetch payment history');
      }
      const history = await response.json();
      return history;
    } catch (error) {
      throw new Error('Failed to fetch payment history');
    }
  },
};

export default PaymentService;
