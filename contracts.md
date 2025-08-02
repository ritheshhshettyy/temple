# Sri Kundeshwara Swamy Shiva Temple - Backend API Contracts

## Overview
This document outlines the API contracts and data models needed to transform the frontend from mock data to a fully functional backend-integrated application.

## Current Mock Data Analysis

### 1. Temple Information (`templeInfo`)
**Mock Data:** Basic temple details, contact info, timings
**Backend Need:** Static configuration that can be updated by admin
**API:** GET `/api/temple-info`

### 2. Temple History (`templeHistory`) 
**Mock Data:** History content, significance, unique features
**Backend Need:** CMS-like content management
**API:** GET `/api/temple-history`

### 3. Special Days (`specialDays`)
**Mock Data:** Array of festivals and events with images
**Backend Need:** CRUD operations for events management
**APIs:** 
- GET `/api/special-days` - List all events
- POST `/api/special-days` - Create new event (Admin)
- PUT `/api/special-days/:id` - Update event (Admin)
- DELETE `/api/special-days/:id` - Delete event (Admin)

### 4. Photo Gallery (`photoGallery`)
**Mock Data:** Images with categories, titles, descriptions
**Backend Need:** Image upload and management system
**APIs:**
- GET `/api/gallery` - Get all photos with optional category filter
- POST `/api/gallery` - Upload new photo (Admin)
- PUT `/api/gallery/:id` - Update photo details (Admin)
- DELETE `/api/gallery/:id` - Delete photo (Admin)

### 5. Seva List (`sevaList`)
**Mock Data:** Services with prices and duration
**Backend Need:** Seva management and booking system
**APIs:**
- GET `/api/seva` - List all available seva
- POST `/api/seva` - Add new seva (Admin)
- PUT `/api/seva/:id` - Update seva (Admin)
- POST `/api/seva-booking` - Book seva service

### 6. Testimonials (`testimonials`)
**Mock Data:** User reviews and ratings
**Backend Need:** User-generated content with moderation
**APIs:**
- GET `/api/testimonials` - Get approved testimonials
- POST `/api/testimonials` - Submit new testimonial
- PUT `/api/testimonials/:id/approve` - Approve testimonial (Admin)

## New Backend-Only Features

### 7. Contact Form Submissions
**Purpose:** Handle contact form submissions and send emails
**APIs:**
- POST `/api/contact` - Submit contact form
- GET `/api/contact` - List submissions (Admin)

### 8. Newsletter Subscriptions
**Purpose:** Manage email subscriptions for temple updates
**APIs:**
- POST `/api/newsletter/subscribe` - Subscribe to newsletter
- POST `/api/newsletter/unsubscribe` - Unsubscribe
- GET `/api/newsletter/subscribers` - List subscribers (Admin)

### 9. Seva Bookings
**Purpose:** Handle online seva booking with payment tracking
**APIs:**
- POST `/api/bookings` - Create seva booking
- GET `/api/bookings` - List bookings (Admin)
- GET `/api/bookings/:id` - Get booking details
- PUT `/api/bookings/:id/status` - Update booking status (Admin)

### 10. Admin Authentication
**Purpose:** Secure admin panel access
**APIs:**
- POST `/api/admin/login` - Admin login
- POST `/api/admin/logout` - Admin logout
- GET `/api/admin/profile` - Get admin profile

## Database Models

### TempleInfo
```javascript
{
  _id: ObjectId,
  name: String,
  location: String,
  description: String,
  contact: {
    phone: String,
    email: String,
    address: String
  },
  timings: {
    morning: String,
    evening: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

### SpecialDay
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  date: String,
  image: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Photo
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  image: String,
  category: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Seva
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: String,
  duration: String,
  isAvailable: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### SevaBooking
```javascript
{
  _id: ObjectId,
  sevaId: ObjectId,
  devoteeInfo: {
    name: String,
    email: String,
    phone: String,
    address: String
  },
  bookingDate: Date,
  preferredTime: String,
  status: String, // pending, confirmed, completed, cancelled
  specialRequests: String,
  amount: Number,
  paymentStatus: String,
  createdAt: Date,
  updatedAt: Date
}
```

### ContactSubmission
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  status: String, // new, read, replied
  createdAt: Date,
  updatedAt: Date
}
```

### Testimonial
```javascript
{
  _id: ObjectId,
  name: String,
  location: String,
  message: String,
  rating: Number,
  isApproved: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Newsletter
```javascript
{
  _id: ObjectId,
  email: String,
  isActive: Boolean,
  subscribedAt: Date,
  unsubscribedAt: Date
}
```

### Admin
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String, // hashed
  role: String,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## Frontend Integration Plan

### 1. API Service Layer
Create `src/services/api.js` to handle all API calls and replace mock data imports.

### 2. State Management
Implement loading states, error handling, and data fetching in components.

### 3. Form Handling
Convert mock form submissions to actual API calls with proper validation and feedback.

### 4. Image Upload
Implement image upload functionality for gallery and events (Admin).

### 5. Admin Features
Add admin login and content management capabilities.

## Implementation Priority

1. **Phase 1:** Basic CRUD for temple info, special days, gallery
2. **Phase 2:** Contact form submissions and email functionality  
3. **Phase 3:** Seva booking system
4. **Phase 4:** Admin authentication and panel
5. **Phase 5:** Newsletter and testimonials management

## Security Considerations

- Input validation and sanitization
- Rate limiting for form submissions
- Admin authentication with JWT tokens
- Image upload validation and size limits
- CORS configuration for frontend domain
- Environment variables for sensitive data

## Email Integration

Use email service (like SendGrid or Nodemailer) for:
- Contact form submissions to temple admin
- Booking confirmations to devotees
- Newsletter campaigns
- Admin notifications

## File Upload Strategy

- Use cloud storage (AWS S3 or similar) for images
- Implement image resizing and optimization
- Generate thumbnail versions for gallery
- Secure upload endpoints with authentication