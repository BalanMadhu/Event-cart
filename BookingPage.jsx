import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

// Amazon-style CSS classes
const amazonStyles = `
  .a-size-large {
    font-size: 21px !important;
    line-height: 1.3 !important;
  }
  .a-spacing-none {
    margin-bottom: 0 !important;
  }
  .product-title-word-break {
    word-wrap: break-word !important;
    color: #0F1111 !important;
    font-weight: 400 !important;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = amazonStyles;
  document.head.appendChild(styleSheet);
}

const BookingPage = ({ selectedProduct, onBack, onBookingComplete }) => {
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    attendees: 1,
    specialRequests: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    bookingType: 'advance',
    depositAmount: 0
  });

  const handleBooking = () => {
    onBookingComplete(bookingDetails);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b bg-white">
        <button onClick={onBack} className="text-gray-700">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl text-gray-800">Book Experience</h1>
      </div>

      {/* Full Screen Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={selectedProduct?.image}
            alt={selectedProduct?.title}
            className="w-full h-screen object-cover"
          />
        </div>


       {/* Madhu24mca054 */}
        */}
        {/* Product Details & Booking */}
        <div className="p-6 bg-white">
          <div className="space-y-6">
            <h1 id="title" className="a-size-large a-spacing-none">
              <span id="productTitle" className="a-size-large product-title-word-break">
                {selectedProduct?.title}
              </span>
            </h1>
            <p className="text-gray-600 leading-relaxed mt-2">{selectedProduct?.description}</p>
            
            <div className="flex items-center gap-2 mt-4">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">{selectedProduct?.rating} ★</span>
              <span className="text-gray-600 text-sm">{selectedProduct?.reviews} ratings & reviews</span>
            </div>
            
            <div className="text-green-600 text-sm font-medium">Special price</div>
            
            <div className="flex items-center gap-3">
              <span className="text-4xl font-medium">{selectedProduct?.price}</span>
              <span className="text-xl text-gray-500 line-through">{selectedProduct?.originalPrice}</span>
              <span className="text-green-600 font-medium text-lg">{selectedProduct?.discount}</span>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Available offers</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 p-3 bg-green-50 rounded">
                  <span className="text-green-600 font-medium">Bank Offer</span>
                  <span>10% off on HDFC Bank Credit Card, up to ₹1,500</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-blue-50 rounded">
                  <span className="text-blue-600 font-medium">Special Price</span>
                  <span>Get extra 5% off (price inclusive of discount)</span>
                </div>
              </div>
            </div>
            
            
            <div className="border-t pt-6">
              <h3 className="font-medium mb-4 text-lg">Booking Details</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Date</label>
                  <input
                    type="date"
                    value={bookingDetails.date}
                    onChange={(e) => setBookingDetails({...bookingDetails, date: e.target.value})}
                    className="w-full p-3 border rounded-lg"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Guests</label>
                  <select
                    value={bookingDetails.attendees}
                    onChange={(e) => setBookingDetails({...bookingDetails, attendees: e.target.value})}
                    className="w-full p-3 border rounded-lg"
                  >
                    {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  value={bookingDetails.contactName}
                  onChange={(e) => setBookingDetails({...bookingDetails, contactName: e.target.value})}
                  placeholder="Full Name"
                  className="p-3 border rounded-lg"
                />
                <input
                  type="email"
                  value={bookingDetails.contactEmail}
                  onChange={(e) => setBookingDetails({...bookingDetails, contactEmail: e.target.value})}
                  placeholder="Email"
                  className="p-3 border rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              {/* <button className="w- bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-1 px-6 rounded-lg font-medium text-lg transition-all duration-300">
                ADD TO CART
              </button> */}
              <button onClick={handleBooking} className="w-46 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white py-2 px-7 rounded-lg font-medium text-lg transition-all duration-300">
                BOOK NOW
              </button>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="font-medium mb-3 text-lg">Product Details</h3>
              <p className="text-gray-600 leading-relaxed">{selectedProduct?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;