import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "SJ",
      rating: 5,
      text: "3raffik helped us increase our online sales by 250% in just 3 months. The platform is easy to use and support is great.",
      bgColor: "bg-yellow-400"
    },
    {
      name: "Mike Chen",
      role: "Digital Marketer",
      company: "Freelance",
      image: "MC",
      rating: 5,
      text: "I've earned over $5,000 in commissions using 3raffik. The QR code feature makes sharing so easy and payments are fast.",
      bgColor: "bg-black"
    },
    {
      name: "David Rodriguez",
      role: "E-commerce Owner",
      company: "Fashion Forward",
      image: "DR",
      rating: 5,
      text: "From 0 to 100 affiliates in 2 months. 3raffik made scaling our affiliate program simple and profitable.",
      bgColor: "bg-yellow-400"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from companies and affiliates using 3raffik to grow their business.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg">
              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 ${testimonial.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <span className={`${testimonial.bgColor === 'bg-black' ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {testimonial.image}
                  </span>
                </div>
                <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-black mb-8">
            Trusted by Thousands
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-600 mb-2">1,000+</div>
              <div className="text-gray-600 text-sm">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-600 mb-2">5,000+</div>
              <div className="text-gray-600 text-sm">Affiliates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-600 mb-2">50K+</div>
              <div className="text-gray-600 text-sm">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Happy Users</div>
            </div>
          </div>
        </div>

        {/* More Reviews */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">AL</span>
            </div>
            <h4 className="font-bold text-black mb-2">Anna Lee</h4>
            <p className="text-gray-600 text-sm mb-3">Fitness Influencer</p>
            <p className="text-gray-600 text-sm italic">
              "The mobile app is perfect. I can generate QR codes and track earnings while training clients!"
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">JW</span>
            </div>
            <h4 className="font-bold text-black mb-2">James Wilson</h4>
            <p className="text-gray-600 text-sm mb-3">CEO, StartupXYZ</p>
            <p className="text-gray-600 text-sm italic">
              "3raffik's analytics helped us find our best affiliates and optimize our commission rates perfectly."
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-bold transition-colors">
              Join Our Success Stories
            </button>
            <button className="border-2 border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-full text-lg font-bold transition-colors">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;