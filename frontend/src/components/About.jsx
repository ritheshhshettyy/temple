import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, MapPin, Heart, Star } from 'lucide-react';
import { templeInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-4">
            About Our Sacred Temple
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sri Kundeshwara Swamy 
            <span className="text-orange-600"> Shiva Temple</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A divine sanctuary where devotion meets architectural magnificence, 
            blessed with centuries of spiritual heritage and sacred traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sacred Heritage of Devotion
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {templeInfo.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Temple Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sacred for Marriage</div>
                    <div className="text-sm text-gray-600">Blessing for life partners</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Unique Shiva Linga</div>
                    <div className="text-sm text-gray-600">4 feet black stone</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Visit Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5" />
                    <span>{templeInfo.contact.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <div>
                      <div>Morning: {templeInfo.timings.morning}</div>
                      <div>Evening: {templeInfo.timings.evening}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1565195161077-f5c5f61f9ea2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3NDF8MA&ixlib=rb-4.1.0&q=85"
                alt="Temple Architecture"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-600">1.5 KM</div>
              <div className="text-gray-700 font-medium">From Kundapur City</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600">2006</div>
              <div className="text-gray-700 font-medium">Last Renovation</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "1000+", label: "Daily Devotees", color: "text-orange-600" },
            { number: "50+", label: "Special Events", color: "text-blue-600" },
            { number: "24/7", label: "Divine Blessings", color: "text-green-600" },
            { number: "∞", label: "Spiritual Energy", color: "text-purple-600" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;