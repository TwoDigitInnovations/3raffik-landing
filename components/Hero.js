import { Play, ArrowRight, TrendingUp, DollarSign, Users, Building2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const Hero = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    // Generate QR code for 3raffik signup
    QRCode.toDataURL('https://3raffik.com/signup', {
      width: 80,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    })
    .then(url => {
      setQrCodeUrl(url);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Transform Your Business with{' '}
              <span className="text-yellow-400">Smart Affiliate</span>{' '}
              Marketing
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect companies with passionate affiliates. Grow sales through referral links, 
              QR codes, and social sharing. Start earning commissions today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Play size={20} />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-sm mb-4">Trusted by growing businesses</p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">1000+ Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold">5000+ Affiliates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="font-semibold">$2M+ Commissions Paid</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            {/* Main Hero Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Business team collaborating on affiliate marketing strategy"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Floating Stats Cards */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">300%</div>
                    <div className="text-sm text-gray-600">Sales Growth</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">$2.1M</div>
                    <div className="text-sm text-gray-600">Commissions Paid</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">5,000+</div>
                    <div className="text-sm text-gray-600">Active Affiliates</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">1,000+</div>
                    <div className="text-sm text-gray-600">Companies</div>
                  </div>
                </div>
              </div>

              {/* QR Code Floating Element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95  rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-gray-200">
                    <div className="w-16 h-16 bg-white p-1">
                      {qrCodeUrl ? (
                        <img 
                          src={qrCodeUrl} 
                          alt="3raffik QR Code" 
                          className="w-full h-full rounded"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 rounded animate-pulse"></div>
                      )}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-800">Scan to Join</div>
                  <div className="text-xs text-gray-600">Start Earning Today</div>
                </div>
              </div>
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
              Live Now!
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Join 6,000+ Users
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;