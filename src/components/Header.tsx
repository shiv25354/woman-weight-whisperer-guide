
import React from 'react';

const Header = () => {
  return (
    <header className="bg-bmi-purple text-white py-6 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-semibold">
            Women's BMI Guide
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#calculator" className="hover:text-bmi-light-purple transition-colors">Calculator</a></li>
              <li><a href="#categories" className="hover:text-bmi-light-purple transition-colors">BMI Categories</a></li>
              <li><a href="#limitations" className="hover:text-bmi-light-purple transition-colors">Limitations</a></li>
              <li><a href="#alternatives" className="hover:text-bmi-light-purple transition-colors">Alternatives</a></li>
              <li><a href="#faq" className="hover:text-bmi-light-purple transition-colors">FAQs</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
