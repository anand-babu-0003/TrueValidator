import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per month',
    description: 'Perfect for small businesses and startups',
    features: [
      '10,000 email validations per month',
      'Real-time API access',
      'Basic email syntax validation',
      'Domain validation',
      'Email format checking',
      'Standard support'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$99',
    period: 'per month',
    description: 'Ideal for growing businesses',
    features: [
      '50,000 email validations per month',
      'Real-time API access',
      'Advanced validation algorithms',
      'Catch-all domain detection',
      'Disposable email detection',
      'SMTP verification',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited email validations',
      'Dedicated API endpoints',
      'Advanced validation algorithms',
      'Catch-all domain detection',
      'Disposable email detection',
      'SMTP verification',
      'Dedicated account manager',
      'Custom integration support'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

const PricingPreviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that fits your email validation needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`rounded-xl p-8 border ${
                plan.highlighted 
                  ? 'border-blue-500 shadow-lg' 
                  : 'border-gray-200 shadow-sm'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900">
                {plan.name}
              </h3>
              
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                <span className="ml-1 text-xl text-gray-500">
                  {plan.period}
                </span>
              </div>
              
              <p className="mt-2 text-gray-600">
                {plan.description}
              </p>
              
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-medium ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                } transition-colors`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/pricing" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            View full pricing details
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;