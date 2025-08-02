import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558659616-7742131dcfbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzaGl2YSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3MzN8MA&ixlib=rb-4.1.0&q=85"
          alt="Sri Kundeshwara Swamy Shiva Temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white border-opacity-20">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">Ancient Shiva Temple</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Sri Kundeshwara Swamy
            <span className="block text-orange-400 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Shiva Temple
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience divine blessings at one of Karnataka's most sacred Shiva temples, 
            where spirituality meets architectural grandeur
          </p>

          {/* Location & Timing Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-white">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-lg">Kundapur, Karnataka</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Clock className="w-5 h-5 text-orange-400" />
              <span className="text-lg">5:30 AM - 8:30 PM</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Book Seva Online
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              Explore Temple
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">4 Feet</div>
              <div className="text-white">Sacred Black Stone Shiva Linga</div>
            </Card>
            <Card className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">1000+</div>
              <div className="text-white">Years of Spiritual Heritage</div>
            </Card>
            <Card className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">Daily</div>
              <div className="text-white">Sacred Rituals & Prayers</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;