import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Star, Clock, Heart } from 'lucide-react';
import { specialDays } from '../data/mock';

const SpecialDays = () => {
  return (
    <section id="special-days" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2 text-sm font-medium mb-4">
            Sacred Celebrations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Special Days &
            <span className="text-indigo-600"> Festivals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience divine celebrations and sacred rituals that connect devotees 
            with centuries-old traditions and spiritual energy.
          </p>
        </div>

        {/* Featured Festival */}
        <div className="mb-16">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 text-white">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-yellow-300" />
                    </div>
                    <Badge className="bg-yellow-400 text-yellow-900 px-3 py-1">
                      Main Festival
                    </Badge>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                    {specialDays[0].name}
                  </h3>
                  <p className="text-orange-100 text-lg leading-relaxed mb-6">
                    {specialDays[0].description}
                  </p>
                  <div className="flex items-center space-x-2 text-orange-200">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{specialDays[0].date}</span>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={specialDays[0].image}
                    alt={specialDays[0].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Special Days */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {specialDays.slice(1).map((day, index) => (
            <Card 
              key={day.id} 
              className="border-2 border-gray-100 hover:border-indigo-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={day.image}
                  alt={day.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white bg-opacity-90 text-gray-800 px-3 py-1">
                    {day.date}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                    {index === 0 && <Heart className="w-5 h-5 text-white" />}
                    {index === 1 && <Clock className="w-5 h-5 text-white" />}
                    {index === 2 && <Star className="w-5 h-5 text-white" />}
                    {index === 3 && <Calendar className="w-5 h-5 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{day.name}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {day.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-indigo-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{day.date}</span>
                  </div>
                  <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                    Sacred Day
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Daily Rituals</h4>
              <p className="text-blue-100">
                Morning and evening prayers conducted daily with traditional Vedic chants
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Marriage Blessings</h4>
              <p className="text-purple-100">
                Special ceremonies for couples seeking divine blessings for married life
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Special Offerings</h4>
              <p className="text-orange-100">
                Milk abhishekam and special pujas available for devotees seeking blessings
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Festival Calendar CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-0 inline-block">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold mb-4">Stay Connected</h4>
              <p className="text-gray-300 mb-6 max-w-md">
                Get notified about upcoming festivals and special events at our sacred temple
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  Subscribe to Updates
                </button>
                <button className="border border-gray-400 text-gray-300 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  Download Calendar
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecialDays;