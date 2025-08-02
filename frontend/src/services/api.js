import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Temple Information API
export const templeAPI = {
  getTempleInfo: () => apiClient.get('/temple-info'),
};

// Special Days API
export const specialDaysAPI = {
  getSpecialDays: (activeOnly = true) => 
    apiClient.get('/special-days', { params: { active_only: activeOnly } }),
  createSpecialDay: (data) => apiClient.post('/special-days', data),
  updateSpecialDay: (id, data) => apiClient.put(`/special-days/${id}`, data),
};

// Gallery API
export const galleryAPI = {
  getPhotos: (category = null, activeOnly = true) => 
    apiClient.get('/gallery', { 
      params: { 
        category: category === 'All' ? null : category,
        active_only: activeOnly 
      } 
    }),
  addPhoto: (data) => apiClient.post('/gallery', data),
};

// Seva API
export const sevaAPI = {
  getSevaList: (availableOnly = true) => 
    apiClient.get('/seva', { params: { available_only: availableOnly } }),
  createSeva: (data) => apiClient.post('/seva', data),
  bookSeva: (bookingData) => apiClient.post('/seva-booking', bookingData),
  getBooking: (bookingId) => apiClient.get(`/seva-booking/${bookingId}`),
};

// Contact API
export const contactAPI = {
  submitContactForm: (data) => apiClient.post('/contact', data),
  getContactSubmissions: (status = null) => 
    apiClient.get('/contact', { params: { status } }),
};

// Testimonials API
export const testimonialsAPI = {
  getTestimonials: (approvedOnly = true) => 
    apiClient.get('/testimonials', { params: { approved_only: approvedOnly } }),
  submitTestimonial: (data) => apiClient.post('/testimonials', data),
};

// Newsletter API
export const newsletterAPI = {
  subscribe: (email) => 
    apiClient.post('/newsletter/subscribe', null, { params: { email } }),
  unsubscribe: (email) => 
    apiClient.post('/newsletter/unsubscribe', null, { params: { email } }),
};

// Generic API functions
export const api = {
  // Test connection
  testConnection: () => apiClient.get('/'),
  
  // Health check
  healthCheck: () => apiClient.get('/status'),
};

// Error handler utility
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    const message = error.response.data?.detail || error.response.data?.message || 'Server error occurred';
    return {
      status: error.response.status,
      message,
      data: error.response.data
    };
  } else if (error.request) {
    // Request made but no response received
    return {
      status: 0,
      message: 'Network error - please check your connection',
      data: null
    };
  } else {
    // Something else happened
    return {
      status: -1,
      message: error.message || 'Unknown error occurred',
      data: null
    };
  }
};

// Loading state utility
export const createApiState = () => ({
  data: null,
  loading: false,
  error: null,
  success: false
});

// API call wrapper with loading state
export const apiCall = async (apiFunction, setStateFunc) => {
  setStateFunc(prev => ({ ...prev, loading: true, error: null, success: false }));
  
  try {
    const response = await apiFunction();
    setStateFunc(prev => ({ 
      ...prev, 
      data: response.data, 
      loading: false, 
      success: true 
    }));
    return response.data;
  } catch (error) {
    const errorInfo = handleApiError(error);
    setStateFunc(prev => ({ 
      ...prev, 
      error: errorInfo.message, 
      loading: false, 
      success: false 
    }));
    throw error;
  }
};

export default apiClient;