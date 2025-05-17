import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  FileText, 
  BookOpen, 
  CheckSquare, 
  Terminal, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';

// Code samples
const apiKeySetupCode = `// Node.js example
const TrueValidator = require('TrueValidator');
const client = new TrueValidator('YOUR_API_KEY');`;

const singleValidationCode = `// Validate a single email
const result = await client.validate('user@example.com');

console.log(result);
/* Output:
{
  "valid": true,
  "status": "valid",
  "address": "user@example.com",
  "domain": "example.com",
  "catchAll": false,
  "disposable": false,
  "role": false,
  "free": false,
  "score": 0.95
}
*/`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const batchValidationCode = `// Batch validation
const emails = [
  'user1@example.com',
  'invalid@example..com',
  'disposable@tempmail.com'
];

const results = await client.validateBatch(emails);`;

const webhookCode = `// Set up a webhook to receive validation results
app.post('/webhook/validation', (req, res) => {
  const { email, result } = req.body;
  
  // Process the validation result
  if (result.valid) {
    // Add email to your verified list
  } else {
    // Handle invalid email
  }
  
  res.status(200).send('Webhook received');
});`;

const DocsPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              API Documentation
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-gray-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everything you need to integrate our email validation service into your application.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="#quickstart" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Quick Start Guide
              </a>
              <a 
                href="#api-reference" 
                className="inline-flex items-center bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                API Reference
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Navigation Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-6">
            <a href="#introduction" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              <BookOpen size={18} className="mr-2" />
              Introduction
            </a>
            <a href="#authentication" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              <Code size={18} className="mr-2" />
              Authentication
            </a>
            <a href="#endpoints" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              <Terminal size={18} className="mr-2" />
              Endpoints
            </a>
            <a href="#webhooks" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              <MessageSquare size={18} className="mr-2" />
              Webhooks
            </a>
            <a href="#sdk" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              <FileText size={18} className="mr-2" />
              SDK References
            </a>
            <a href="#response-codes" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              <CheckSquare size={18} className="mr-2" />
              Response Codes
            </a>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section id="introduction" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Introduction
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The TrueValidator API provides a reliable way to validate email addresses in real-time. Our API checks multiple aspects of an email address, including syntax validation, domain validation, MX record verification, and more.
            </p>
            <p>
              The API is RESTful and returns responses in JSON format. Requests can be made using HTTPS GET or POST methods, and all API endpoints are available on <code>https://api.TrueValidator.com/v1/</code>.
            </p>
            <h3>Features</h3>
            <ul>
              <li>Email syntax validation</li>
              <li>Domain validation and MX record check</li>
              <li>Disposable email detection</li>
              <li>Catch-all domain detection</li>
              <li>Free email provider detection</li>
              <li>Role-based email detection (admin@, support@, etc.)</li>
              <li>SMTP server validation</li>
              <li>Email abuse and spam risk assessment</li>
              <li>Batch processing capabilities</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Quick Start Guide */}
      <section id="quickstart" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quick Start Guide
          </h2>
          
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              1. Get Your API Key
            </h3>
            <p className="text-gray-600 mb-6">
              Sign up for an account at TrueValidator and get your API key from the dashboard.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              2. Set Up the Client
            </h3>
            <div className="bg-gray-900 text-white rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
              <pre>{apiKeySetupCode}</pre>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              3. Validate an Email
            </h3>
            <div className="bg-gray-900 text-white rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
              <pre>{singleValidationCode}</pre>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              4. Next Steps
            </h3>
            <p className="text-gray-600 mb-4">
              Now that you've made your first API call, you can explore more advanced features:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Batch validation for processing multiple emails</li>
              <li>Webhook integration for asynchronous processing</li>
              <li>Custom validation rules and scoring</li>
              <li>Error handling and response parsing</li>
            </ul>
            
            <a 
              href="#api-reference" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              View full API reference
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* API Reference */}
      <section id="api-reference" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            API Reference
          </h2>
          
          <div id="authentication" className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Authentication
            </h3>
            <div className="prose prose-lg max-w-none">
              <p>
                All API requests require authentication using your API key. You can pass your API key in one of the following ways:
              </p>
              <ul>
                <li>As an HTTP header: <code>X-API-Key: YOUR_API_KEY</code></li>
                <li>As a query parameter: <code>?api_key=YOUR_API_KEY</code></li>
                <li>In the request body for POST requests: <code>{'{"api_key": "YOUR_API_KEY"}'}</code></li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-yellow-800">
                  <strong>Important:</strong> Keep your API key secure and never expose it in client-side code.
                </p>
              </div>
            </div>
          </div>
          
          <div id="endpoints" className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Endpoints
            </h3>
            
            <div className="space-y-8">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 font-mono text-sm px-2 py-1 rounded mr-3">GET</span>
                    <span className="font-mono text-gray-800">/v1/validate</span>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Validate a Single Email</h4>
                  <p className="text-gray-600 mb-4">
                    Validates a single email address and returns detailed information about its validity.
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-gray-900 mb-2">Query Parameters</h5>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded mr-2">email</span>
                        <span className="text-gray-600">Required. The email address to validate.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h5 className="font-medium text-gray-900 mb-2">Example Response</h5>
                  <div className="bg-gray-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`{
  "valid": true,
  "status": "valid",
  "address": "user@example.com",
  "domain": "example.com",
  "catchAll": false,
  "disposable": false,
  "role": false,
  "free": false,
  "score": 0.95
}`}</pre>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 font-mono text-sm px-2 py-1 rounded mr-3">POST</span>
                    <span className="font-mono text-gray-800">/v1/validate/batch</span>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Batch Validation</h4>
                  <p className="text-gray-600 mb-4">
                    Validates multiple email addresses in a single request.
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-gray-900 mb-2">Request Body</h5>
                    <div className="bg-gray-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre>{`{
  "emails": [
    "user1@example.com",
    "user2@example.com",
    "invalid@example..com"
  ]
}`}</pre>
                    </div>
                  </div>
                  
                  <h5 className="font-medium text-gray-900 mb-2">Example Response</h5>
                  <div className="bg-gray-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`{
  "results": [
    {
      "address": "user1@example.com",
      "valid": true,
      "status": "valid",
      "domain": "example.com",
      "catchAll": false,
      "disposable": false,
      "role": false,
      "free": false,
      "score": 0.95
    },
    {
      "address": "user2@example.com",
      "valid": true,
      "status": "valid",
      "domain": "example.com",
      "catchAll": false,
      "disposable": false,
      "role": false,
      "free": false,
      "score": 0.92
    },
    {
      "address": "invalid@example..com",
      "valid": false,
      "status": "invalid_format",
      "domain": "example..com",
      "catchAll": null,
      "disposable": null,
      "role": null,
      "free": null,
      "score": 0
    }
  ],
  "meta": {
    "processed": 3,
    "valid": 2,
    "invalid": 1
  }
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div id="webhooks" className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Webhooks
            </h3>
            <p className="text-gray-600 mb-6">
              Webhooks allow you to receive asynchronous notifications when email validation results are ready, which is particularly useful for batch processing of large lists.
            </p>
            
            <div className="bg-gray-900 text-white rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
              <pre>{webhookCode}</pre>
            </div>
            
            <p className="text-gray-600">
              To configure a webhook, go to your dashboard settings and enter the URL where you want to receive webhook notifications.
            </p>
          </div>
          
          <div id="sdk" className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              SDK References
            </h3>
            <p className="text-gray-600 mb-6">
              We provide official client libraries for popular programming languages to make integration easier.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="#" className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Terminal size={20} className="mr-2 text-blue-600" />
                  JavaScript / Node.js
                </h4>
                <p className="text-gray-600">npm install TrueValidator</p>
              </a>
              
              <a href="#" className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Terminal size={20} className="mr-2 text-blue-600" />
                  Python
                </h4>
                <p className="text-gray-600">pip install TrueValidator</p>
              </a>
              
              <a href="#" className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Terminal size={20} className="mr-2 text-blue-600" />
                  PHP
                </h4>
                <p className="text-gray-600">composer require TrueValidator/TrueValidator</p>
              </a>
              
              <a href="#" className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Terminal size={20} className="mr-2 text-blue-600" />
                  Ruby
                </h4>
                <p className="text-gray-600">gem install TrueValidator</p>
              </a>
              
              <a href="#" className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Terminal size={20} className="mr-2 text-blue-600" />
                  Java
                </h4>
                <p className="text-gray-600">Maven/Gradle dependency</p>
              </a>
              
              <a href="#" className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Terminal size={20} className="mr-2 text-blue-600" />
                  Go
                </h4>
                <p className="text-gray-600">go get github.com/TrueValidator/TrueValidator</p>
              </a>
            </div>
          </div>
          
          <div id="response-codes" className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Response Codes
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status Code</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900">200</td>
                    <td className="px-6 py-4 text-sm text-gray-500">OK - The request was successful.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900">400</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Bad Request - The request was invalid or malformed.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900">401</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Unauthorized - API key is missing or invalid.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900">403</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Forbidden - The API key doesn't have permission.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900">429</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Too Many Requests - Rate limit exceeded.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-900">500</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Internal Server Error - Something went wrong on our end.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Help with Integration?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is available to assist you with any questions or issues related to API integration.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Join Developer Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;