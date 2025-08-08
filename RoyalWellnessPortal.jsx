import React, { useState, useEffect } from 'react';
import { Star, Crown, Gem, Scroll, CreditCard, Smartphone, Wallet, Shield, Calendar, Users, QrCode, Tag, Clock, MapPin, Heart, Filter } from 'lucide-react';

const RoyalWellnessPortal = ({ onProductSelect }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showPaymentPanel, setShowPaymentPanel] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [attendeeCount, setAttendeeCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');


  const products = [
    { id: 1, title: "Royal Ayurvedic Retreat", description: "Experience authentic Ayurvedic therapies with full-body massages, steam treatments, and personalized wellness consultations. Includes traditional yoga sessions, meditation, and organic meals prepared according to Ayurvedic principles.", price: "₹25,999", originalPrice: "₹32,999", rating: 4.9, reviews: 127, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop", category: "wellness", badge: "PREMIUM", discount: "23% OFF", availability: "Available" },
    { id: 2, title: "Imperial Cultural Package", description: "Journey through heritage palaces with exclusive royal dining and cultural performances. Includes guided tours, traditional banquets, classical dance shows, and hands-on craft workshops.", price: "₹18,499", originalPrice: "₹24,999", rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop", category: "cultural", badge: "BESTSELLER", discount: "26% OFF", availability: "Limited" },
    { id: 3, title: "Sapphire Celebration Event", description: "Luxurious venue with exquisite royal décor, crystal chandeliers, and elegant ambiance. Includes professional event planning, gourmet catering, live entertainment, and photography services.", price: "₹45,999", originalPrice: "₹59,999", rating: 5.0, reviews: 203, image: "https://images.unsplash.com/photo-1519167758481-83f29c8498c5?w=400&h=300&fit=crop", category: "events", badge: "EXCLUSIVE", discount: "23% OFF", availability: "Available" },
    { id: 4, title: "Golden Meditation Sanctuary", description: "Serene meditation sessions in gold-adorned chambers with spiritual guidance", price: "₹12,999", originalPrice: "₹16,999", rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", category: "wellness", badge: "PEACEFUL", discount: "24% OFF", availability: "Available" },
    { id: 5, title: "Royal Heritage Walk", description: "Guided tours through ancient royal corridors with historical storytelling", price: "₹8,999", originalPrice: "₹11,999", rating: 4.6, reviews: 234, image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop", category: "cultural", badge: "POPULAR", discount: "25% OFF", availability: "Available" },
    { id: 6, title: "Diamond Wellness Kit", description: "Premium wellness products infused with precious gems and royal essences", price: "₹35,999", originalPrice: "₹45,999", rating: 4.9, reviews: 98, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", category: "wellness", badge: "LUXURY", discount: "22% OFF", availability: "Limited" },
    { id: 7, title: "Emerald Garden Ceremony", description: "Outdoor royal ceremonies in emerald gardens with traditional rituals", price: "₹28,999", originalPrice: "₹36,999", rating: 4.8, reviews: 167, image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop", category: "events", badge: "NATURE", discount: "22% OFF", availability: "Available" },
    { id: 8, title: "Ruby Rejuvenation Spa", description: "Exclusive spa treatments with ruby-infused oils and royal massage techniques", price: "₹22,999", originalPrice: "₹29,999", rating: 4.9, reviews: 189, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop", category: "wellness", badge: "REJUVENATE", discount: "23% OFF", availability: "Available" },
    { id: 9, title: "Pearl Palace Experience", description: "Overnight stay in pearl-decorated chambers with royal breakfast service", price: "₹42,999", originalPrice: "₹54,999", rating: 5.0, reviews: 145, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop", category: "cultural", badge: "OVERNIGHT", discount: "22% OFF", availability: "Limited" },
    { id: 10, title: "Amethyst Healing Circle", description: "Group healing sessions with amethyst crystals and royal healing masters", price: "₹15,999", originalPrice: "₹19,999", rating: 4.7, reviews: 178, image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=300&fit=crop", category: "wellness", badge: "HEALING", discount: "20% OFF", availability: "Available" },
    { id: 11, title: "Royal Culinary Journey", description: "Multi-course royal dining experience with traditional recipes and presentations", price: "₹19,999", originalPrice: "₹25,999", rating: 4.8, reviews: 267, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop", category: "cultural", badge: "CULINARY", discount: "23% OFF", availability: "Available" },
    { id: 12, title: "Topaz Transformation Retreat", description: "7-day transformation program with topaz energy healing and royal lifestyle", price: "₹65,999", originalPrice: "₹84,999", rating: 5.0, reviews: 87, image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop", category: "wellness", badge: "TRANSFORM", discount: "22% OFF", availability: "Limited" },
    { id: 13, title: "Opal Celebration Package", description: "Complete celebration package with opal decorations and royal entertainment", price: "₹38,999", originalPrice: "₹49,999", rating: 4.9, reviews: 134, image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop", category: "events", badge: "CELEBRATE", discount: "22% OFF", availability: "Available" },
    { id: 14, title: "Jade Wellness Collection", description: "Curated collection of jade-infused wellness products for home royal treatment", price: "₹24,999", originalPrice: "₹31,999", rating: 4.7, reviews: 198, image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&h=300&fit=crop", category: "wellness", badge: "COLLECTION", discount: "22% OFF", availability: "Available" },
    { id: 15, title: "Crystal Palace Workshop", description: "Learn royal crafts and traditions in crystal-adorned workshop spaces", price: "₹16,999", originalPrice: "₹21,999", rating: 4.6, reviews: 156, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop", category: "cultural", badge: "WORKSHOP", discount: "23% OFF", availability: "Available" },
    { id: 16, title: "Royal Moonlight Ceremony", description: "Exclusive moonlight ceremonies with royal blessings and traditional music", price: "₹32,999", originalPrice: "₹42,999", rating: 4.9, reviews: 112, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", category: "events", badge: "MOONLIGHT", discount: "23% OFF", availability: "Limited" }
  ];

  const categories = [
    { id: 'all', label: 'All Products', icon: Crown },
    { id: 'wellness', label: 'Wellness', icon: Heart },
    { id: 'cultural', label: 'Cultural', icon: Scroll },
    { id: 'events', label: 'Events', icon: Gem }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };



  const StarRating = ({ rating, reviews }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
      ))}
      <span className="text-sm text-gray-600 ml-1">({reviews})</span>
    </div>
  );

  const PaymentPanel = () => (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 w-80 bg-white rounded-2xl shadow-2xl border-4 border-slate-200 transition-all duration-500 z-40 ${showPaymentPanel ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className="bg-white p-4 rounded-t-xl border-b border-gray-200">
        <h3 className="font-serif text-lg font-bold flex items-center gap-2 text-gray-800">
          <Shield className="w-5 h-5" />
          Secure Payment
        </h3>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { id: 'card', icon: CreditCard, label: 'Card', color: 'blue' },
            { id: 'upi', icon: Smartphone, label: 'UPI', color: 'green' },
            { id: 'wallet', icon: Wallet, label: 'Wallet', color: 'slate' },
            { id: 'qr', icon: QrCode, label: 'QR Pay', color: 'cyan' }
          ].map(({ id, icon: Icon, label, color }) => (
            <button
              key={id}
              onClick={() => setPaymentMethod(id)}
              className={`p-3 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                paymentMethod === id
                  ? (color === 'blue' ? 'border-blue-500 bg-blue-50 text-blue-700' :
                     color === 'green' ? 'border-green-500 bg-green-50 text-green-700' :
                     color === 'slate' ? 'border-slate-500 bg-slate-50 text-slate-700' :
                     'border-cyan-500 bg-cyan-50 text-cyan-700')
                  : 'border-gray-200 hover:border-slate-300 text-gray-600'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Tag className="w-4 h-4" />
            Promo Code
          </label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-slate-500 focus:outline-none"
          />
        </div>

        <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
          Apply & Pay
        </button>
      </div>
    </div>
  );

  const BookingSection = ({ product }) => (
    <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-xl p-6 border-2 border-slate-200">
      <h4 className="font-serif text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-slate-600" />
        Book Your Experience
      </h4>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-slate-500 focus:outline-none"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center gap-2">
            <Users className="w-4 h-4" />
            Attendees
          </label>
          <select
            value={attendeeCount}
            onChange={(e) => setAttendeeCount(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-slate-500 focus:outline-none"
          >
            {[1,2,3,4,5,6,7,8,9,10].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 text-sm">
        <Clock className="w-4 h-4 text-green-600" />
        <span className={`font-medium ${product?.availability === 'Limited' ? 'text-orange-600' : 'text-green-600'}`}>
          {product?.availability} - Real-time booking
        </span>
      </div>

      <button
        onClick={() => setShowPaymentPanel(true)}
        className="w-full bg-gradient-to-r from-slate-600 via-cyan-600 to-slate-700 text-white font-bold py-4 rounded-xl hover:from-slate-700 hover:via-cyan-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
      >
        <Crown className="w-5 h-5" />
        Book Now - {product?.price}
        <Gem className="w-5 h-5" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Description Nav Bar */}
          <nav className="bg-gradient-to-r from-slate-100 to-cyan-50 rounded-xl p-4 mb-8 border border-slate-200">
            <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Premium Locations
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Secure Booking
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                24/7 Support
              </span>
            </div>
          </nav>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Crown className="w-8 h-8 text-slate-600" />
              <h1 className="text-3xl md:text-4xl font-serif text-gray-800 font-bold">
                Exclusive Experience Hub
              </h1>
              <Crown className="w-8 h-8 text-slate-600" />
            </div>
            <p className="text-lg text-gray-600 mb-6">Book premium wellness retreats, cultural journeys, and luxury events</p>
            
            {/* Category Filter */}
            <div className="flex justify-center gap-3 mb-6">
              {categories.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === id
                      ? 'bg-slate-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Product List */}
          <div className="space-y-12 mb-12">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-slate-400 min-h-[400px]"
              >
                <div className="p-8">
                  {/* Content Layout - Image Left, All Text Right */}
                  <div className="flex gap-8">
                    {/* Left Side - Image Only */}
                    <div className="w-1/2">
                      <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-slate-600 text-white px-3 py-2 rounded-lg text-sm font-bold">
                            {product.badge}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-bold">
                            {product.discount}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* Right Side - All Text Content */}
                    <div className="w-1/2 flex flex-col">
                      {/* Header Content */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-3xl font-serif font-bold text-gray-800">
                            {product.title}
                          </h3>
                          <button
                            onClick={() => toggleFavorite(product.id)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 ml-4"
                          >
                            <Heart className={`w-6 h-6 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <StarRating rating={product.rating} reviews={product.reviews} />
                          <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                            product.availability === 'Limited' 
                              ? 'bg-orange-100 text-orange-700' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {product.availability}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-3xl font-bold text-slate-700">{product.price}</span>
                          <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="flex-1 mb-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Booking Button */}
                      <div className="mt-auto pt-6 border-t-2 border-gray-200">
                        <button
                          onClick={() => onProductSelect ? onProductSelect(product) : setSelectedProduct(product)}
                          className="w-full bg-gradient-to-r from-slate-600 via-cyan-600 to-slate-700 hover:from-slate-700 hover:via-cyan-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 text-lg"
                        >
                          <Crown className="w-6 h-6" />
                          Book This Experience
                          <Gem className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Detail Modal */}
          {selectedProduct && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="bg-gradient-to-r from-slate-600 to-cyan-600 p-6 text-white rounded-t-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-serif font-bold flex items-center gap-2">
                      <Crown className="w-6 h-6" />
                      {selectedProduct.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="text-white hover:text-slate-200 text-2xl p-2 rounded-full hover:bg-white/20"
                    >
                      ×
                    </button>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">{selectedProduct.description}</p>
                      <StarRating rating={selectedProduct.rating} reviews={selectedProduct.reviews} />
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-slate-700">{selectedProduct.price}</span>
                        <span className="text-xl text-gray-400 line-through">{selectedProduct.originalPrice}</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                          {selectedProduct.discount}
                        </span>
                      </div>
                    </div>
                  </div>

                  <BookingSection product={selectedProduct} />
                </div>
              </div>
            </div>
          )}

          <PaymentPanel />

          {/* Floating Payment Toggle */}
          <button
            onClick={() => setShowPaymentPanel(!showPaymentPanel)}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-slate-600 to-cyan-600 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 z-30"
          >
            <CreditCard className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoyalWellnessPortal;