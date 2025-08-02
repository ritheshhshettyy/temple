import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { X, ChevronLeft, ChevronRight, Camera, Eye } from 'lucide-react';
import { photoGallery } from '../data/mock';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(photoGallery.map(photo => photo.category))];
  
  const filteredPhotos = selectedCategory === 'All' 
    ? photoGallery 
    : photoGallery.filter(photo => photo.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredPhotos.length
      : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium mb-4">
            Sacred Memories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Photo 
            <span className="text-green-600"> Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the divine beauty and architectural magnificence of our sacred temple 
            through these carefully captured moments of devotion and heritage.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <Card 
              key={photo.id}
              className="group cursor-pointer overflow-hidden border-2 border-gray-100 hover:border-green-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={() => openLightbox(photo)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <Badge className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 text-xs">
                    {photo.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {photo.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: filteredPhotos.length, label: "Photos", icon: Camera },
            { number: categories.length - 1, label: "Categories", icon: Eye },
            { number: "HD", label: "Quality", icon: Camera },
            { number: "∞", label: "Memories", icon: Eye }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-green-500 to-teal-600 text-white border-0 inline-block">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Capture Sacred Moments</h4>
              <p className="text-green-100 mb-6 max-w-md">
                Share your temple visit photos and become part of our growing gallery
              </p>
              <button className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Submit Your Photos
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
                <Badge className="bg-white bg-opacity-20 text-white mt-2">
                  {selectedImage.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;