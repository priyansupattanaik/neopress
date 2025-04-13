
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-neopress-gray-300 bg-neopress-paperDark py-12 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">
              <span className="text-neopress-red">Neo</span>Press
            </h2>
            <p className="text-neopress-gray-700 mb-4">
              Delivering the news with a classic touch since 2025. NeoPress blends the nostalgia of print 
              with the convenience of digital media.
            </p>
            <p className="font-mono text-xs text-neopress-gray-600">
              © {new Date().getFullYear()} NeoPress. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              {['World', 'Politics', 'Business', 'Technology', 'Culture', 'Science', 'Health', 'Sports'].map((category) => (
                <li key={category}>
                  <Link 
                    to={`/category/${category.toLowerCase()}`}
                    className="text-neopress-gray-700 hover:text-neopress-red transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold mb-4">About</h4>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'Editorial Team', 'Advertise', 'Terms of Use', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-neopress-gray-700 hover:text-neopress-red transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
