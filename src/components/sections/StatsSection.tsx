import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '99.9%', label: 'Validation Accuracy' },
  { value: '2B+', label: 'Emails Validated' },
  { value: '15,000+', label: 'Satisfied Customers' },
  { value: '50+', label: 'Data Points per Email' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Businesses Worldwide
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Our email validation platform delivers industry-leading accuracy and performance.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {stat.value}
              </div>
              <div className="mt-2 text-lg text-blue-100">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 pt-16 border-t border-blue-500">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <img 
              src="https://images.pexels.com/photos/4483609/pexels-photo-4483609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Company logo" 
              className="h-8 md:h-10 opacity-70 grayscale"
            />
            <img 
              src="https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Company logo" 
              className="h-8 md:h-10 opacity-70 grayscale"
            />
            <img 
              src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Company logo" 
              className="h-8 md:h-10 opacity-70 grayscale"
            />
            <img 
              src="https://images.pexels.com/photos/4483607/pexels-photo-4483607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Company logo" 
              className="h-8 md:h-10 opacity-70 grayscale"
            />
            <img 
              src="https://images.pexels.com/photos/4483611/pexels-photo-4483611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Company logo" 
              className="h-8 md:h-10 opacity-70 grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;