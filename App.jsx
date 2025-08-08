import React, { useState } from 'react';
import RoyalWellnessPortal from './RoyalWellnessPortal';
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';
import OrderTrackingPage from './OrderTrackingPage';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [orderData, setOrderData] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setCurrentPage('booking');
  };

  const handleBookingComplete = (booking) => {
    setBookingData(booking);
    setCurrentPage('payment');
  };

  const handlePaymentComplete = () => {
    setOrderData({
      product: selectedProduct,
      booking: bookingData,
      orderId: `RWP${Date.now().toString().slice(-6)}`,
      status: 'confirmed',
      timestamp: new Date().toISOString()
    });
    setCurrentPage('tracking');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
    setBookingData(null);
    setOrderData(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <RoyalWellnessPortal onProductSelect={handleProductSelect} />;
      case 'booking':
        return (
          <BookingPage
            selectedProduct={selectedProduct}
            onBack={() => setCurrentPage('home')}
            onBookingComplete={handleBookingComplete}
          />
        );
      case 'payment':
        return (
          <PaymentPage
            selectedProduct={selectedProduct}
            onBack={() => setCurrentPage('booking')}
            onPaymentComplete={handlePaymentComplete}
          />
        );
      case 'tracking':
        return (
          <OrderTrackingPage
            orderData={orderData}
            onBack={handleBackToHome}
          />
        );
      default:
        return <RoyalWellnessPortal onProductSelect={handleProductSelect} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
}

export default App;