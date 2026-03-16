import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the commission system work?",
      answer: "Our commission system is transparent and automated. When a customer makes a purchase through an affiliate's referral link or QR code, the affiliate earns a predetermined commission percentage. Payments are processed automatically and can be withdrawn to your digital wallet or bank account."
    },
    {
      question: "Is there a minimum payout amount?",
      answer: "Yes, the minimum payout amount is $25 for most payment methods. This helps reduce transaction fees and ensures efficient processing. You can track your earnings in real-time through our dashboard and mobile app."
    },
    {
      question: "Can I track my affiliate performance?",
      answer: "Absolutely! Our platform provides comprehensive analytics including click-through rates, conversion rates, earnings per click, and detailed performance metrics. Both companies and affiliates have access to real-time dashboards with actionable insights."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support multiple payment methods including PayPal, bank transfers, digital wallets, and major credit cards. Payment processing is secure and compliant with international financial regulations."
    },
    {
      question: "How do I generate QR codes?",
      answer: "QR code generation is simple and instant. In your dashboard or mobile app, select the product you want to promote, click 'Generate QR Code,' and you'll receive a unique QR code that tracks back to your affiliate account. You can customize and download codes in various formats."
    },
    {
      question: "Is the platform available globally?",
      answer: "Yes, 3raffik operates in over 50 countries worldwide. Our platform supports multiple currencies and languages, making it easy for international businesses and affiliates to collaborate and grow together."
    },
    {
      question: "How quickly do I get approved as an affiliate?",
      answer: "Most affiliate applications are reviewed and approved within 24-48 hours. We have a streamlined verification process that ensures quality while maintaining quick turnaround times. You'll receive an email notification once approved."
    },
    {
      question: "Can I promote multiple companies at once?",
      answer: "Yes! Affiliates can join multiple campaigns and promote products from different companies simultaneously. Our platform makes it easy to manage multiple partnerships and track performance across all your campaigns."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Find everything you need to know about 3raffik.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-yellow-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our support team is here to help you succeed. Get in touch with us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-full font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;