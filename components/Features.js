import { 
  BarChart3, 
  Target, 
  Users, 
  DollarSign, 
  Smartphone, 
  Shield,
  QrCode,
  Link,
  TrendingUp,
  CreditCard,
  Share2,
  Gift
} from 'lucide-react';

const Features = () => {
  const companyFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "See your sales and performance live"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Campaign Management",
      description: "Create and manage your campaigns easily"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Affiliate Network",
      description: "Access thousands of affiliates"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Auto Commission",
      description: "Automatic payments to affiliates"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App",
      description: "Manage everything on your phone"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Bank-level security for all transactions"
    }
  ];

  const affiliateFeatures = [
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "QR Code Generator",
      description: "Create QR codes instantly"
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Custom Links",
      description: "Get your personal tracking links"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Stats",
      description: "Track your earnings and clicks"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Digital Wallet",
      description: "Manage and withdraw your money"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Sharing",
      description: "Share directly to social media"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Bonus Programs",
      description: "Earn extra rewards and bonuses"
    }
  ];

  const FeatureCard = ({ feature, isCompany }) => (
    <div className="bg-white rounded-xl p-6 text-center">
      <div className={`w-12 h-12 ${isCompany ? 'bg-yellow-400' : 'bg-black'} rounded-lg flex items-center justify-center mx-auto mb-4`}>
        <div className={`${isCompany ? 'text-black' : 'text-white'}`}>
          {feature.icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-sm">{feature.description}</p>
    </div>
  );

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple tools that help companies and affiliates make money together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Companies */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-4">For Companies</h3>
              <p className="text-lg text-gray-600">
                Tools to grow your business with affiliates
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companyFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} isCompany={true} />
              ))}
            </div>
          </div>

          {/* For Affiliates */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-4">For Affiliates</h3>
              <p className="text-lg text-gray-600">
                Everything you need to earn money
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {affiliateFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} isCompany={false} />
              ))}
            </div>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-black mb-8">
              Why Choose 3raffik?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">99.9%</div>
                <div className="text-gray-600">Always Online</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">$2M+</div>
                <div className="text-gray-600">Paid Out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;