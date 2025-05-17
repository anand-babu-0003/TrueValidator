import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface EmailValidatorProps {
  onValidationComplete?: (result: ValidationResult) => void;
}

export interface ValidationResult {
  valid: boolean;
  status: 'valid' | 'invalid' | 'risky';
  message: string;
}

const EmailValidator: React.FC<EmailValidatorProps> = ({ onValidationComplete }) => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = () => {
    if (!email) {
      const invalidResult = {
        valid: false,
        status: 'invalid' as const,
        message: 'Please enter an email address.'
      };
      setResult(invalidResult);
      onValidationComplete?.(invalidResult);
      return;
    }

    setLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Simple validation for demonstration
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let validationResult: ValidationResult;
      
      if (emailRegex.test(email)) {
        // In a real application, this would call an API
        const fakeDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com'];
        const suspiciousDomains = ['tempmail.com', 'throwaway.com', 'mailinator.com'];
        const domain = email.split('@')[1];
        
        if (fakeDomains.includes(domain)) {
          validationResult = {
            valid: true,
            status: 'valid',
            message: 'Email is valid and safe to use.'
          };
        } else if (suspiciousDomains.includes(domain)) {
          validationResult = {
            valid: false,
            status: 'risky',
            message: 'This appears to be a disposable email address.'
          };
        } else {
          validationResult = {
            valid: false,
            status: 'risky',
            message: 'Domain appears suspicious or unverifiable.'
          };
        }
      } else {
        validationResult = {
          valid: false,
          status: 'invalid',
          message: 'Invalid email format.'
        };
      }
      
      setResult(validationResult);
      onValidationComplete?.(validationResult);
      setLoading(false);
    }, 1000);
  };

  const getStatusIcon = () => {
    if (!result) return null;
    
    switch (result.status) {
      case 'valid':
        return <CheckCircle size={20} className="text-green-600" />;
      case 'invalid':
        return <XCircle size={20} className="text-red-600" />;
      case 'risky':
        return <AlertCircle size={20} className="text-yellow-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    if (!result) return '';
    
    switch (result.status) {
      case 'valid':
        return 'bg-green-50 text-green-800 border-green-100';
      case 'invalid':
        return 'bg-red-50 text-red-800 border-red-100';
      case 'risky':
        return 'bg-yellow-50 text-yellow-800 border-yellow-100';
      default:
        return '';
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="flex-grow px-4 py-3 border border-gray-300 rounded-lg sm:rounded-r-none focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={validateEmail}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg sm:rounded-l-none font-medium hover:bg-blue-700 transition-colors disabled:opacity-70"
        >
          {loading ? 'Validating...' : 'Validate'}
        </button>
      </div>
      
      {result && (
        <div className={`mt-4 p-4 rounded-lg border ${getStatusColor()}`}>
          <div className="flex items-start">
            <span className="mt-0.5 mr-2">{getStatusIcon()}</span>
            <div>
              <p className="font-medium">
                {result.status === 'valid' 
                  ? 'Valid Email' 
                  : result.status === 'invalid' 
                    ? 'Invalid Email'
                    : 'Risky Email'}
              </p>
              <p className="text-sm mt-1">{result.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailValidator;