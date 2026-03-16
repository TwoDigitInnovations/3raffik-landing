import { Smartphone, Download, QrCode, BarChart3, Wallet, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const AppShowcase = () => {
  const [qrData, setQrData] = useState('');

  const appFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Track Performance",
      description: "See your stats in real-time"
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "Generate QR Codes",
      description: "Create codes instantly"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Browse Products",
      description: "Find products to promote"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Check Earnings",
      description: "Monitor your money"
    }
  ];

  // Simulate QR scanning animation
  useEffect(() => {
    const interval = setInterval(() => {
      setQrData(prev => prev === '' ? 'https://3raffik.com/aff/xyz123' : '');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              3raffik Mobile App
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Manage your affiliate business anywhere. Generate QR codes, track earnings, 
              and promote products from your phone.
            </p>

            {/* App Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {appFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="text-black">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-black mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-colors">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-colors">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* QR Code for Download */}
            <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-2xl mb-6">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-black rounded grid grid-cols-4 gap-px p-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'} rounded-sm`}></div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-black">Scan to Download</h4>
                <p className="text-sm text-gray-600">Get the app instantly</p>
              </div>
            </div>

            {/* App Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-bold">4.8/5</span> • 2,500+ reviews
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="relative">
            <div className="flex justify-center items-center gap-8">
              {/* Phone 1 - Dashboard */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-black h-8 flex items-center justify-between px-6 text-white text-xs">
                      <span>9:41</span>
                      <span>100%</span>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4 h-full bg-gradient-to-b from-yellow-50 to-white">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="font-bold text-lg text-black">Dashboard</h3>
                          <p className="text-sm text-black">Welcome back!</p>
                        </div>
                        <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="text-2xl font-bold text-black">$1,250</div>
                          <div className="text-xs text-black">This Month</div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="text-2xl font-bold text-black">47</div>
                          <div className="text-xs text-black">Sales</div>
                        </div>
                      </div>

                      {/* Chart Area */}
                      <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                        <div className="text-sm font-semibold mb-2 text-black">Earnings</div>
                        <div className="h-20 bg-yellow-100 rounded-lg flex items-end justify-between px-2 pb-2">
                          {[...Array(7)].map((_, i) => (
                            <div key={i} className={`w-4 bg-yellow-400 rounded-t`} style={{height: `${Math.random() * 60 + 20}px`}}></div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-yellow-400 text-black p-3 rounded-xl text-sm font-semibold">
                          Generate QR
                        </button>
                        <button className="border border-gray-200 text-black p-3 rounded-xl text-sm font-semibold">
                          Share Link
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - QR Scanner */}
              <div className="relative -ml-16 mt-12">
                <div className="w-64 h-[520px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-black h-8 flex items-center justify-between px-6 text-white text-xs">
                      <span>9:41</span>
                      <span>100%</span>
                    </div>
                    
                    {/* QR Scanner Interface */}
                    <div className="relative h-full bg-black flex flex-col items-center justify-center p-4">
                      {/* Scanner Viewfinder */}
                      <div className="relative w-48 h-48 border-2 border-yellow-400 rounded-2xl mb-6">
                        {/* Corner indicators */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-yellow-400 rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-yellow-400 rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-yellow-400 rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-400 rounded-br-lg"></div>
                        
                        {/* Scanning line animation */}
                        <div className="absolute inset-2 overflow-hidden rounded-xl">
                          <div className="w-full h-0.5 bg-yellow-400 animate-pulse absolute top-1/2 transform -translate-y-1/2"></div>
                        </div>
                        
                        {/* QR Code when detected */}
                        {qrData && (
                          <div className="absolute inset-4 bg-white rounded-lg p-2 flex items-center justify-center">
                            <div className="w-full h-full bg-black rounded grid grid-cols-8 gap-px p-1">
                              {[...Array(64)].map((_, i) => (
                                <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'} rounded-sm`}></div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Scanner Status */}
                      <div className="text-center mb-4">
                        <p className="text-white text-sm font-semibold">
                          {qrData ? 'QR Code Detected!' : 'Scan QR Code'}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {qrData ? 'Tap to open link' : 'Point camera at QR code'}
                        </p>
                      </div>
                      
                      {/* Detected URL */}
                      {qrData && (
                        <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-xs font-semibold">
                          3raffik.com/aff/xyz123
                        </div>
                      )}
                      
                      {/* Scanner Controls */}
                      <div className="absolute bottom-8 flex gap-4">
                        <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-white rounded"></div>
                        </button>
                        <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                          <QrCode className="w-6 h-6 text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              New Update!
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
              Free Download
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;