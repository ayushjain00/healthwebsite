import React from 'react';
import { Link } from 'react-router-dom';
import { AtSign, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light mt-20 pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 text-transparent bg-clip-text">
                ResearchNexus
              </span>
            </Link>
            <p className="mt-3 text-gray-400 text-sm">
              The future of research monetization and collaboration, empowering researchers and organizations to share knowledge and innovations.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Explore */}
          <div className="col-span-1">
            <h3 className="text-white font-medium text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Browse Research
                </Link>
              </li>
              <li>
                <Link to="/premium" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Premium Insights
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Community Forums
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Publish Your Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="col-span-1">
            <h3 className="text-white font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-medium text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest research papers and insights.
            </p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                leftIcon={<AtSign size={16} className="text-gray-500" />}
                fullWidth
              />
              <Button 
                variant="primary" 
                size="md"
                rightIcon={<ArrowRight size={16} />} 
                fullWidth
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ResearchNexus. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <p className="text-gray-500 text-sm">
              Empowering the future of research
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;