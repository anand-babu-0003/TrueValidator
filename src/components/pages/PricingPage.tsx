import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, HelpCircle } from 'lucide-react';

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

const faqs = [
  {
    question: "What happens if I exceed my monthly validation limit?",
    answer: "If you exceed your monthly limit, you can purchase additional validations at a per-validation rate, or upgrade to a higher plan for more included validations."
  },
  {
    question: "How accurate is your email validation?",
    answer: "Our email validation service has a 99.9% accuracy rate, with both syntactic and semantic validation methods to ensure maximum reliability."
  },
  {
    question: "Can I validate emails in real-time during user registration?",
    answer: "Yes, our API allows for real-time validation during user registration or form submission with response times typically under 200ms."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 7-day free trial for all plans that includes 1,000 validations so you can test our service before committing."
  },
  {
    question: "How do you handle data privacy and GDPR compliance?",
    answer: "We are fully GDPR compliant and do not store the email addresses you validate. All data is processed securely and in accordance with our privacy policy."
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can upgrade your plan at any time and the change will take effect immediately. Downgrades will take effect at the start of your next billing cycle."
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-gray-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choose the plan that fits your email validation needs.
              All plans include a 7-day free trial.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Plans Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                animate={{ opacity: 1, y: 0 }}
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
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Additional Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Enhance your email validation with these add-on services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                API Integration Support
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert assistance implementing our API into your systems from our technical team.
              </p>
              <p className="font-semibold text-gray-900">Starting at $299</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Custom Data Exports
              </h3>
              <p className="text-gray-600 mb-4">
                Receive customized reports and data exports tailored to your specific business needs.
              </p>
              <p className="font-semibold text-gray-900">Starting at $199/month</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Email List Cleansing
              </h3>
              <p className="text-gray-600 mb-4">
                One-time service to deep clean your existing email database with detailed reporting.
              </p>
              <p className="font-semibold text-gray-900">$0.005 per email</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Find answers to common questions about our plans and services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <HelpCircle size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600 pl-7">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions about our pricing?
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Sign up now and start validating emails with our 7-day free trial. No credit card required.
            </p>
            
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;