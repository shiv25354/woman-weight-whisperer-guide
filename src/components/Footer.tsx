
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Women's BMI Guide</h3>
            <p className="text-gray-300">
              A comprehensive guide to understanding BMI for women
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <h4 className="text-lg font-medium mb-2">Important Links</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#calculator" className="text-gray-300 hover:text-white transition-colors">Calculator</a>
              <a href="#categories" className="text-gray-300 hover:text-white transition-colors">BMI Categories</a>
              <a href="#limitations" className="text-gray-300 hover:text-white transition-colors">Limitations</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Women's BMI Guide. For informational purposes only. Not a substitute for professional medical advice.</p>
          <p className="mt-1 text-sm">
            Always consult with healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
