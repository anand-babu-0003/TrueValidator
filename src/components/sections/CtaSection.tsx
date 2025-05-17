import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Email Deliverability?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start validating your emails today and see the difference in your marketing campaigns.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white border border-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
          
          <p className="mt-6 text-blue-100">
            No credit card required. 7-day free trial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;