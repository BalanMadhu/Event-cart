import React, { useState, useEffect } from 'react';
import { Package, CheckCircle, Clock, Truck, MapPin, ArrowLeft, Crown, Calendar, User, Phone, Mail } from 'lucide-react';

const OrderTrackingPage = ({ orderData, onBack }) => {
  const [currentStatus, setCurrentStatus] = useState(0);

  const trackingSteps = [
    { 
      id: 1, 
      title: 'Booking Confirmed', 
      description: 'Your booking has been confirmed and payment processed',
      icon: CheckCircle,
      status: 'completed',
      timestamp: '2024-01-15 10:30 AM'
    },
    { 
      id: 2, 
      title: 'Preparation Started', 
      description: 'Our team is preparing for your royal experience',
      icon: Package,
      status: 'completed',
      timestamp: '2024-01-15 11:00 AM'
    },
    { 
      id: 3, 
      title: 'Ready for Experience', 
      description: 'Everything is set up and ready for your arrival',
      icon: Crown,
      status: 'current',
      timestamp: 'Expected: 2024-01-16 09:00 AM'
    },
    { 
      id: 4, 
      title: 'Experience Complete', 
      description: 'Enjoy your royal wellness experience',
      icon: Truck,
      status: 'pending',
      timestamp: 'Pending'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatus(prev => (prev < trackingSteps.length - 1 ? prev + 1 : prev));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'current': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-gray-400 bg-gray-100';
      default: return 'text-gray-400 bg-gray-100';
    }
  };

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
          <h1 className="text-3xl font-serif text-gray-800 font-bold flex items-center gap-2">
            <Package className="w-8 h-8" />
            Track Your Order
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-2xl mb-6">
              <h2 className="text-xl font-serif font-bold text-gray-800 mb-4">Order Details</h2>
              
              <div className="space-y-4">
                <div className="border-2 border-slate-100 rounded-xl p-4">
                  {/* ī
                   */}
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{orderData?.booking?.date} at {orderData?.booking?.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{orderData?.booking?.attendees} {orderData?.booking?.attendees === 1 ? 'Person' : 'People'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Royal Palace, Heritage District</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Order ID:</span>
                    <span className="text-sm font-mono">#RWP{Date.now().toString().slice(-6)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Total Paid:</span>
                    <span className="text-lg font-bold text-slate-700">{orderData?.product?.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Status:</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      In Progress
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Contact Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-slate-600" />
                  <span>{orderData?.booking?.contactName}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-600" />
                  <span>{orderData?.booking?.contactEmail}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-600" />
                  <span>{orderData?.booking?.contactPhone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-xl font-serif font-bold text-gray-800 mb-6">Order Progress</h2>
              
              <div className="space-y-6">
                {trackingSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = step.status === 'completed';
                  const isCurrent = step.status === 'current';
                  
                  return (
                    <div key={step.id} className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-full ${getStatusColor(step.status)} flex-shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`font-bold ${isCompleted || isCurrent ? 'text-gray-800' : 'text-gray-400'}`}>
                            {step.title}
                          </h3>
                          <span className={`text-sm ${isCompleted || isCurrent ? 'text-gray-600' : 'text-gray-400'}`}>
                            {step.timestamp}
                          </span>
                        </div>
                        <p className={`text-sm ${isCompleted || isCurrent ? 'text-gray-600' : 'text-gray-400'}`}>
                          {step.description}
                        </p>
                        
                        {isCurrent && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                            <p className="text-sm text-blue-700 font-medium">
                              🎉 Your royal experience is being prepared! Please arrive 15 minutes early.
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {/* Connector Line */}
                      {index < trackingSteps.length - 1 && (
                        <div className="absolute left-[27px] mt-16 w-0.5 h-12 bg-gray-200"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Additional Information */}
              <div className="mt-8 p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">Important Information:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Please bring a valid ID for verification</li>
                  <li>• Comfortable clothing recommended</li>
                  <li>• Photography allowed in designated areas</li>
                  <li>• Complimentary refreshments included</li>
                </ul>
              </div>

              {/* Support */}
              <div className="mt-6 p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-cyan-600" />
                  <span className="font-bold text-cyan-800">Need Help?</span>
                </div>
                <p className="text-sm text-cyan-700">
                  Contact our support team at <strong>+91 98765 43210</strong> or email <strong>support@royalwellness.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;