import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [validationResult, setValidationResult] = useState<
    null | { valid: boolean; message: string }
  >(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setValidationResult(null);
  };

  const validateEmail = () => {
    if (!email) {
      setValidationResult({ valid: false, message: 'Please enter an email address.' });
      return;
    }

    // Simple validation for demonstration
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      // In a real application, this would call an API
      const fakeDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com'];
      const domain = email.split('@')[1];
      
      if (fakeDomains.includes(domain)) {
        setValidationResult({ valid: true, message: 'Email looks valid! Safe to send.' });
      } else {
        setValidationResult({ valid: false, message: 'Domain appears invalid or risky.' });
      }
    } else {
      setValidationResult({ valid: false, message: 'Invalid email format.' });
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Validate Emails.<br />
              <span className="text-blue-600">Zero</span> Bounces.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Improve deliverability, protect your sender reputation, and maximize your email ROI with our accurate email validation service.
            </p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="#" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Start Free Trial hhhh
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a href="#demo" className="mt-4 sm:mt-0 sm:ml-4 text-blue-600 font-medium flex items-center justify-center hover:text-blue-800 transition-colors">
                Try Live Demo
              </a>
            </motion.div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <span className="ml-2 text-gray-700">99.9% Accuracy</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <span className="ml-2 text-gray-700">GDPR Compliant</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="demo"
          >
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Try It For Free</h2>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Validate any email address
                </label>
                <div className="flex">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="name@example.com"
                    className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={validateEmail}
                    className="bg-blue-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Validate
                  </button>
                </div>
              </div>
              
              {validationResult && (
                <div 
                  className={`p-4 rounded-lg ${
                    validationResult.valid 
                      ? 'bg-green-50 text-green-800 border border-green-100' 
                      : 'bg-red-50 text-red-800 border border-red-100'
                  }`}
                >
                  <div className="flex items-start">
                    {validationResult.valid ? (
                      <CheckCircle size={20} className="text-green-600 mt-0.5 mr-2" />
                    ) : (
                      <XCircle size={20} className="text-red-600 mt-0.5 mr-2" />
                    )}
                    <div>
                      <p className="font-medium">{validationResult.valid ? 'Valid Email' : 'Invalid Email'}</p>
                      <p className="text-sm mt-1">{validationResult.message}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-6 text-center text-sm text-gray-500">
                Our complete API offers 50+ data points for each email validation
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;