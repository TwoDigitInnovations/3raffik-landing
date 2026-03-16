import { TrendingUp, DollarSign, Globe } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Increase Sales by 300%",
      description: "Leverage affiliate networks to reach new customers and multiply your sales potential",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Zero Marketing Costs",
      description: "Pay only for successful conversions. No upfront costs, no wasted ad spend",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Reach",
      description: "Access affiliates worldwide through our mobile app and expand internationally",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Why Businesses Choose 3raffik
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their growth with our affiliate marketing platform
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className={`${benefit.bgColor} rounded-3xl p-8 mb-6 hover:scale-105 transition-transform`}>
                <div className={`bg-gradient-to-br ${benefit.color} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Real Results from Real Businesses
              </h3>
              <p className="text-lg text-gray-600">
                See what our platform has achieved for companies like yours
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-600 mb-2">300%</div>
                <div className="text-gray-600 font-medium">Average Sales Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">$2M+</div>
                <div className="text-gray-600 font-medium">Total Commissions Paid</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                TC
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">TechCorp</h4>
                <p className="text-sm text-gray-500">E-commerce</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">
              "Increased our online sales by 250% in just 3 months. The affiliate network is incredible!"
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                FS
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">FashionStore</h4>
                <p className="text-sm text-gray-500">Retail</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">
              "From 0 to 100 affiliates in 2 months. 3raffik made scaling our program effortless."
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                HS
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">HealthSupps</h4>
                <p className="text-sm text-gray-500">Health & Wellness</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">
              "The QR code feature revolutionized how our affiliates share products. Sales doubled!"
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors">
            Start Growing Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;