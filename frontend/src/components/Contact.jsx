import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, Navigation } from 'lucide-react';
import { templeInfo } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (mock for now)
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact 
            <span className="text-blue-600"> Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plan your visit, book seva, or get answers to your questions. 
            We're here to assist you on your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Temple Info Card */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Temple Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-700 leading-relaxed">{templeInfo.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-700">{templeInfo.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-700">{templeInfo.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Temple Timings</h4>
                      <div className="text-gray-700">
                        <p>Morning: {templeInfo.timings.morning}</p>
                        <p>Evening: {templeInfo.timings.evening}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white border-opacity-30 justify-start"
                    variant="outline"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button 
                    className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white border-opacity-30 justify-start"
                    variant="outline"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Temple
                  </Button>
                  <Button 
                    className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white border-opacity-30 justify-start"
                    variant="outline"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Book Seva
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-gray-100 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      rows={6}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-2 border-gray-100 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gray-200">
                {/* Google Maps Embed Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-2">Temple Location</h4>
                    <p className="text-blue-100 mb-4">Kundapur, Karnataka</p>
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-2 border-green-100 hover:border-green-200 transition-colors duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Easy Access</h4>
              <p className="text-gray-600 text-sm">
                Located just 1.5 km from Kundapur city center
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-blue-100 hover:border-blue-200 transition-colors duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">
                Call us anytime for urgent temple related queries
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-purple-100 hover:border-purple-200 transition-colors duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h4>
              <p className="text-gray-600 text-sm">
                We respond to all emails within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;