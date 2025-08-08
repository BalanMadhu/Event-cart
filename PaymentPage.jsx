import React, { useState } from 'react';
import { CreditCard, Smartphone, Wallet, QrCode, Shield, ArrowLeft, CheckCircle } from 'lucide-react';

const PaymentPage = ({ selectedProduct, onBack, onPaymentComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [promoCode, setPromoCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
    }, 3000);
  };

  const paymentOptions = [
    { id: 'card', icon: CreditCard, label: 'Credit/Debit Card', color: 'blue' },
    { id: 'upi', icon: Smartphone, label: 'UPI Payment', color: 'green' },
    { id: 'wallet', icon: Wallet, label: 'Digital Wallet', color: 'slate' },
    { id: 'qr', icon: QrCode, label: 'QR Code', color: 'cyan' }
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-serif text-gray-800 font-bold">Secure Payment</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-serif font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="border-2 border-slate-100 rounded-xl p-4 mb-6">
              <img
                src={selectedProduct?.image}
                alt={selectedProduct?.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-serif text-lg font-bold text-gray-800 mb-2">
                {selectedProduct?.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{selectedProduct?.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Original Price:</span>
                  <span className="line-through text-gray-400">{selectedProduct?.originalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span className="text-green-600">{selectedProduct?.discount}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-slate-700">{selectedProduct?.price}</span>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Promo Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 p-3 border-2 border-gray-200 rounded-xl focus:border-slate-500 focus:outline-none"
                />
                <button className="px-4 py-3 bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-serif font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-slate-600" />
              Payment Method
            </h2>

            {/* Payment Options */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {paymentOptions.map(({ id, icon: Icon, label, color }) => (
                <button
                  key={id}
                  onClick={() => setPaymentMethod(id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                    paymentMethod === id
                      ? `border-${color}-500 bg-${color}-50 text-${color}-700`
                      : 'border-gray-200 hover:border-slate-300 text-gray-600'
                  }`}
                >
                  <Icon className="w-8 h-8" />
                  <span className="text-sm font-medium text-center">{label}</span>
                </button>
              ))}
            </div>

            {/* Payment Form */}
            {paymentMethod === 'card' && (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Card Number</label>
                  <input
                    type="text"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-slate-500 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Expiry</label>
                    <input
                      type="text"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                      placeholder="MM/YY"
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-slate-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">CVV</label>
                    <input
                      type="text"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                      placeholder="123"
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-slate-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Cardholder Name</label>
                  <input
                    type="text"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">UPI ID</label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'qr' && (
              <div className="text-center mb-6">
                <div className="w-48 h-48 bg-gray-100 rounded-xl mx-auto flex items-center justify-center mb-4">
                  <QrCode className="w-32 h-32 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">Scan QR code with your payment app</p>
              </div>
            )}

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-slate-600 via-cyan-600 to-slate-700 text-white font-bold py-4 rounded-xl hover:from-slate-700 hover:via-cyan-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing Payment...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Pay {selectedProduct?.price}
                  <CheckCircle className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              🔒 Your payment is secured with 256-bit SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;