import React from 'react';
import { CheckCircle } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <CheckCircle size={28} className="text-blue-600" />
    </div>
  );
};

export default Logo;