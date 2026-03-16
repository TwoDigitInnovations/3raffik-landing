import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      description: "Perfect for testing the waters",
      icon: <Star className="w-6 h-6" />,
      color: "border-gray-200",
      bgColor: "bg-white",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      popular: false,
      features: [
        "Up to 10 products",
        "Basic analytics",
        "5% platform fee",
        "Email support",
        "QR code generation",
        "Basic referral links"
      ]
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "For growing businesses",
      icon: <Zap className="w-6 h-6" />,
      color: "border-yellow-400",
      bgColor: "bg-yellow-50",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-black",
      popular: true,
      features: [
        "Unlimited products",
        "Advanced analytics",
        "3% platform fee",
        "Priority support",
        "Custom branding",
        "API access",
        "Advanced reporting",
        "Multi-user accounts"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "For large organizations",
      icon: <Crown className="w-6 h-6" />,
      color: "border-purple-400",
      bgColor: "bg-purple-50",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: false,
      features: [
        "White-label solution",
        "Custom API access",
        "Dedicated account manager",
        "Custom commission rates",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "Training & onboarding"
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business. Start free and scale as you grow. 
            No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.bgColor} ${plan.color} border-2 rounded-3xl p-8 ${plan.popular ? 'scale-105 shadow-2xl' : 'shadow-lg'} hover:shadow-xl transition-all`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 ${plan.popular ? 'bg-yellow-400' : 'bg-gray-100'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className={`${plan.popular ? 'text-black' : 'text-gray-600'}`}>
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-gray-800">{plan.price}</span>
                  {plan.period !== "Contact us" && (
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  )}
                </div>
                {plan.period === "Contact us" && (
                  <p className="text-gray-600">{plan.period}</p>
                )}
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`w-full ${plan.buttonColor} text-white py-4 rounded-full font-semibold transition-colors`}>
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">SSL Security</h4>
                <p className="text-sm text-gray-600">Bank-grade encryption</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">99.9% Uptime</h4>
                <p className="text-sm text-gray-600">Reliable platform</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Mobile App</h4>
                <p className="text-sm text-gray-600">iOS & Android</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Global Reach</h4>
                <p className="text-sm text-gray-600">50+ countries</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600 text-sm">No setup fees for any plan. Start immediately after signing up.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600 text-sm">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-red-400 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Ready to Start Growing?
            </h3>
            <p className="text-lg text-gray-800 mb-8">
              Join thousands of businesses already using 3raffik to scale their affiliate programs
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;