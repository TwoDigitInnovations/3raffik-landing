import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Download } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Companies", href: "#for-companies" },
    { name: "For Affiliates", href: "#for-affiliates" },
    { name: "Pricing", href: "#pricing" },
    { name: "Help Center", href: "#help" },
    { name: "API Documentation", href: "#api" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR Compliance", href: "#gdpr" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold flex items-center mb-4">
                <span className="text-yellow-400">3</span>
                <span className="text-white">raffik</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your business with smart affiliate marketing. Connect companies 
                with passionate affiliates and grow sales through innovative technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300 text-sm">hello@3raffik.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300 text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* App Downloads & Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Get the App</h3>
              
              {/* App Store Badges */}
              <div className="space-y-3 mb-8">
                <button className="bg-black hover:bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-3 transition-colors w-full">
                  <Download className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-black hover:bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-3 transition-colors w-full">
                  <Download className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="font-semibold mb-3">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">Get affiliate marketing tips</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  />
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 3raffik. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <div className="text-gray-400 group-hover:text-black">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs font-bold">SSL</span>
              </div>
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs font-bold">PCI</span>
              </div>
              <span>PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs font-bold">SOC</span>
              </div>
              <span>SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;