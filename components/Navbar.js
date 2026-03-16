import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <span className="text-yellow-400">3</span>
              <span className="text-black">raffik</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-black px-3 py-2 text-sm font-bold transition-colors">
                How It Works
              </a>
              <a href="#for-companies" className="text-gray-600 hover:text-black px-3 py-2 text-sm font-bold transition-colors">
                For Companies
              </a>
              <a href="#for-affiliates" className="text-gray-600 hover:text-black px-3 py-2 text-sm font-bold transition-colors">
                For Affiliates
              </a>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-black px-3 py-2 text-sm font-bold transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black p-2 transition-colors"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-black block px-3 py-3 text-base font-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#for-companies" 
              className="text-gray-600 hover:text-black block px-3 py-3 text-base font-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Companies
            </a>
            <a 
              href="#for-affiliates" 
              className="text-gray-600 hover:text-black block px-3 py-3 text-base font-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Affiliates
            </a>
            <Link 
              href="/privacy-policy" 
              className="text-gray-600 hover:text-black block px-3 py-3 text-base font-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-3">
                <button 
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full text-base font-bold transition-colors w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;