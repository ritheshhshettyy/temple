import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-orange-800 to-red-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Kundapur, Karnataka</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>0820 258 4176</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} />
            <span>5:30 AM - 12:30 PM | 4:00 PM - 8:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🕉</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Sri Kundeshwara Swamy</h1>
                <p className="text-sm text-gray-600">Shiva Temple</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">
                About Temple
              </a>
              <a href="#history" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">
                History
              </a>
              <a href="#special-days" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">
                Special Days
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">
                Photo Gallery
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">
                Contact Us
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white transition-all duration-300 transform hover:scale-105">
                Book Seva Online
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <a
                href="#home"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Temple
              </a>
              <a
                href="#history"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                History
              </a>
              <a
                href="#special-days"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Special Days
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Photo Gallery
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white transition-all duration-300 mt-4 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Seva Online
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;