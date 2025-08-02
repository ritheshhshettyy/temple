import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { templeInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🕉</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sri Kundeshwara Swamy</h3>
                <p className="text-gray-400 text-sm">Shiva Temple</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experience divine blessings at one of Karnataka's most sacred Shiva temples, 
              where spirituality meets architectural grandeur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  About Temple
                </a>
              </li>
              <li>
                <a href="#history" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  History
                </a>
              </li>
              <li>
                <a href="#special-days" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Special Days
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Temple Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Online Seva Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Abhishekam
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Rudrabhishekam
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Satyanarayana Pooja
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Marriage Ceremonies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Special Prayers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {templeInfo.contact.address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300">{templeInfo.contact.phone}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300">{templeInfo.contact.email}</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Morning: {templeInfo.timings.morning}</p>
                  <p>Evening: {templeInfo.timings.evening}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 Sri Kundeshwara Swamy Shiva Temple. All Rights Reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Refund Policy
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for devotees</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;