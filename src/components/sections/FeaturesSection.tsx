import React from 'react';
import { 
  CheckCircle, 
  Shield, 
  AlertTriangle, 
  BarChart4, 
  Clock, 
  Database 
} from 'lucide-react';

const features = [
  {
    icon: <CheckCircle size={24} className="text-blue-600" />,
    title: 'Accurate Validation',
    description: 'Identify and correct invalid, disposable, and risky email addresses with 99.9% accuracy.'
  },
  {
    icon: <Shield size={24} className="text-blue-600" />,
    title: 'Fraud Prevention',
    description: 'Detect fraudulent signups and protect your forms from abuse and spam submissions.'
  },
  {
    icon: <AlertTriangle size={24} className="text-blue-600" />,
    title: 'Bounce Detection',
    description: 'Predict and prevent email bounces before they happen to maintain your sender score.'
  },
  {
    icon: <BarChart4 size={24} className="text-blue-600" />,
    title: 'Detailed Analytics',
    description: 'Get comprehensive insights into your email list quality and validation results.'
  },
  {
    icon: <Clock size={24} className="text-blue-600" />,
    title: 'Real-time API',
    description: 'Validate emails in real-time at point of collection with our fast, reliable API.'
  },
  {
    icon: <Database size={24} className="text-blue-600" />,
    title: 'Bulk Processing',
    description: 'Clean your entire email database with our high-speed bulk validation system.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Email Validation?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive email verification that helps you maintain a clean list and improve deliverability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Learn more about our features
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;