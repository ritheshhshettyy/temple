import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Crown, Calendar, Gem, MapPin } from 'lucide-react';
import { templeHistory } from '../data/mock';

const History = () => {
  return (
    <section id="history" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">
            Sacred Heritage
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            History of the 
            <span className="text-blue-600"> Temple</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the ancient origins and rich cultural heritage that spans centuries, 
            built by devotion and blessed by divine grace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Historical Content */}
          <div className="space-y-8">
            {/* Main History */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Ancient Origins</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {templeHistory.content}
                </p>
              </CardContent>
            </Card>

            {/* Significance */}
            <Card className="border-2 border-orange-100 hover:border-orange-200 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Religious Significance</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {templeHistory.significance}
                </p>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="border-2 border-green-100 hover:border-green-200 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Recent Developments</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">2006 - Major Renovation</div>
                      <div className="text-gray-600">Government of Karnataka restored the temple</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Ancient Era - Construction</div>
                      <div className="text-gray-600">Built by King Kundavarma</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Unique Features */}
          <div className="space-y-8">
            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Unique Features</h3>
                </div>
                <div className="space-y-4">
                  {templeHistory.uniqueFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1566890910598-c5768889e83e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxzaGl2YSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3MzN8MA&ixlib=rb-4.1.0&q=85"
                alt="Sacred Shiva Statue"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Sacred Black Stone Linga</h4>
                <p className="text-gray-200">Carved from pure black stone, 4 feet in height</p>
              </div>
            </div>

            {/* Architectural Heritage */}
            <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Architectural Heritage</h3>
                <p className="leading-relaxed text-amber-50">
                  The temple showcases traditional Karnataka architectural styles with intricate 
                  carvings and sacred geometry. The proximity to Panchagangavalli River adds to 
                  its spiritual significance and natural beauty.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Ancient</div>
                    <div className="text-amber-200">Architecture</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Sacred</div>
                    <div className="text-amber-200">Geometry</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;