import { Upload, Users, DollarSign, Share2, QrCode, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple 3-step process. No complicated setup, no hidden fees.
          </p>
        </div>

        {/* Simple 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Upload className="w-10 h-10 text-black" />
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Upload Products</h3>
            <p className="text-gray-600 leading-relaxed">
              Companies upload their products and set commission rates. Takes 2 minutes to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <QrCode className="w-10 h-10 text-black" />
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Share QR Codes</h3>
            <p className="text-gray-600 leading-relaxed">
              Affiliates get unique QR codes and links. Share on social media, websites, or anywhere.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-10 h-10 text-black" />
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Earn Money</h3>
            <p className="text-gray-600 leading-relaxed">
              When someone buys through your link, you earn commission. Payments are automatic.
            </p>
          </div>
        </div>

        {/* Two Columns - For Companies & Affiliates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* For Companies */}
          <div className="bg-yellow-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">For Companies</h3>
              <p className="text-gray-700">Get more sales without spending on ads</p>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-bold text-black mb-2">Upload Products</h4>
                <p className="text-gray-700">Add your products in 2 minutes</p>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-bold text-black mb-2">Affiliates Share</h4>
                <p className="text-gray-700">Our users promote your products</p>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-bold text-black mb-2">You Get Sales</h4>
                <p className="text-gray-700">Pay commission only when you sell</p>
              </div>
            </div>

            <button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-full font-bold mt-8 transition-colors">
              Start Selling
            </button>
          </div>

          {/* For Affiliates */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">For Affiliates</h3>
              <p className="text-gray-700">Make money sharing products you like</p>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-bold text-black mb-2">Pick Products</h4>
                <p className="text-gray-700">Choose what you want to share</p>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-bold text-black mb-2">Get QR Code</h4>
                <p className="text-gray-700">Share your unique link anywhere</p>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-bold text-black mb-2">Earn Money</h4>
                <p className="text-gray-700">Get paid when people buy</p>
              </div>
            </div>

            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-4 rounded-full font-bold mt-8 transition-colors">
              Start Earning
            </button>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="text-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">2 min</div>
              <div className="text-gray-600">Setup Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">15%</div>
              <div className="text-gray-600">Average Commission</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">24h</div>
              <div className="text-gray-600">Payment Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;