import React, { useState, useEffect } from 'react';
import { Star, Crown, Gem, Scroll, CreditCard, Smartphone, Wallet, Shield, X, ChevronLeft, ChevronRight } from 'lucide-react';

const RoyalProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {   
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

  const products = [
    {
      id: 1,
      title: "Royal Wellness Retreat",
      description: "Indulge in a majestic spa experience with ancient healing traditions",
      price: "₹25,999",
      originalPrice: "₹32,999",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
      badge: "PREMIUM",
      discount: "23% OFF"
    },
    {
      id: 2,
      title: "Imperial Cultural Package",
      description: "Explore heritage palaces with exclusive royal dining experiences",
      price: "₹18,499",
      originalPrice: "₹24,999",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
      badge: "BESTSELLER",
      discount: "26% OFF"
    },
    {
      id: 3,
      title: "Sapphire Celebration Event",
      description: "Luxurious venue with royal décor for your special occasions",
      price: "₹45,999",
      originalPrice: "₹59,999",
      rating: 5.0,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
      badge: "EXCLUSIVE",
      discount: "23% OFF"
    }
  ];

  const StarRating = ({ rating, reviews }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">({reviews})</span>
    </div>
  );

  const PaymentOptions = () => (
    <div className="space-y-3">
      <h4 className="font-serif text-lg text-gray-800 flex items-center gap-2">
        <Shield className="w-5 h-5 text-purple-600" />
        Secure Payment Options
      </h4>
      <div className="grid grid-cols-3 gap-2">
        {[
          { id: 'card', icon: CreditCard, label: 'Card' },
          { id: 'upi', icon: Smartphone, label: 'UPI' },
          { id: 'wallet', icon: Wallet, label: 'Wallet' }
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setPaymentMethod(id)}
            className={`p-3 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-1 ${
              paymentMethod === id
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-purple-300 text-gray-600'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold">
              Royal Experiences
            </h1>
            <Crown className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-xl text-purple-200 font-light">Curated luxury for the discerning connoisseur</p>
        </div>

        {/* Product Grid */}
        <div className={`${isMobile ? 'block' : 'grid lg:grid-cols-3 gap-8'} mb-12`}>
          {isMobile && (
            <div className="flex justify-center items-center gap-4 mb-6">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-white font-medium">
                {currentSlide + 1} / {products.length}
              </span>
              <button
                onClick={() => setCurrentSlide(Math.min(products.length - 1, currentSlide + 1))}
                disabled={currentSlide === products.length - 1}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next product"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
          {products.map((product, index) => (
            isMobile && index !== currentSlide ? null : (
            <div
              key={product.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 ${!isMobile ? 'hover:-translate-y-2' : ''} border-2 border-purple-100 hover:border-purple-300 ${isMobile ? 'mx-4' : ''}`}
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                minHeight: isMobile ? '500px' : 'auto'
              }}
              role="article"
              aria-labelledby={`product-${product.id}-title`}
            >
              {/* Ornate Border - Hidden on mobile for performance */}
              {!isMobile && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full bg-white rounded-xl"></div>
                </div>
              )}
              
              <div className="relative z-10 p-6">
                {/* Badge */}
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Gem className="w-3 h-3" />
                    {product.badge}
                  </div>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    {product.discount}
                  </div>
                </div>

                {/* Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden">
                 
                  */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 id={`product-${product.id}-title`} className="text-xl font-serif font-bold text-gray-800 leading-tight">
                      {product.title}
                    </h3>
                    <Scroll className="w-5 h-5 text-purple-600 flex-shrink-0 ml-2" aria-hidden="true" />
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <StarRating rating={product.rating} reviews={product.reviews} />

                  {/* Pricing */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-purple-700">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className={`w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 ${!isMobile ? 'transform hover:scale-105' : ''} shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95`}
                    aria-label={`Book ${product.title} for ${product.price}`}
                  >
                    <Crown className="w-5 h-5" aria-hidden="true" />
                    Book Now
                    <Gem className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            )
          ))}
        </div>

        {/* Booking Modal */}
        {selectedProduct && (
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setSelectedProduct(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            <div className={`bg-white rounded-2xl ${isMobile ? 'w-full h-full' : 'max-w-md w-full max-h-[90vh]'} overflow-y-auto shadow-2xl border-4 border-purple-200`}>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white rounded-t-xl">
                <div className="flex items-center justify-between">
                  <h3 id="booking-modal-title" className="text-xl font-serif font-bold flex items-center gap-2">
                    <Crown className="w-6 h-6" aria-hidden="true" />
                    Complete Booking
                  </h3>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-white hover:text-purple-200 p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Close booking modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Selected Product */}
                <div className="border-2 border-purple-100 rounded-xl p-4 bg-purple-50">
                  <h4 className="font-serif text-lg font-bold text-gray-800 mb-2">
                    {selectedProduct.title}
                  </h4>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-700">
                      {selectedProduct.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {selectedProduct.originalPrice}
                    </span>
                  </div>
                </div>

                <PaymentOptions />

                {/* Booking Button */}
                <button 
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                      alert('Booking confirmed! You will receive a confirmation email shortly.');
                      setSelectedProduct(null);
                    }, 2000);
                  }}
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 ${!isMobile && !isLoading ? 'transform hover:scale-105' : ''} shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:cursor-not-allowed`}
                  aria-label="Complete secure booking"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" aria-hidden="true" />
                      Secure Booking
                      <Gem className="w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  🔒 Your payment is secured with 256-bit SSL encryption
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoyalProductShowcase;