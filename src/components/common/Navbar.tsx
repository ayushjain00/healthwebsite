import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, Search, User, LogOut } from 'lucide-react';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Upload Research', path: '/upload' },
    { name: 'Explore', path: '/explore' },
    { name: 'Premium Insights', path: '/premium' },
    { name: 'Community', path: '/community' },
    { name: 'About', path: '/about' },
  ];

  const renderAuthButtons = () => {
    if (user) {
      return (
        <div className="relative">
          <button 
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-gray-300 hover:text-white"
          >
            <div className="w-8 h-8 rounded-full bg-primary-500/30 flex items-center justify-center text-primary-200">
              <User size={16} />
            </div>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 py-2 bg-background-light border border-gray-700 rounded-lg shadow-xl z-50 animate-slide-down">
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-background-lighter hover:text-white"
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-background-lighter hover:text-white"
              >
                Profile Settings
              </Link>
              {user.role === 'admin' && (
                <Link
                  to="/admin"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-background-lighter hover:text-white"
                >
                  Admin Panel
                </Link>
              )}
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-background-lighter hover:text-white flex items-center"
              >
                <LogOut size={14} className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <Button variant="ghost" size="sm">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="primary" size="sm">
            Sign Up
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-light bg-opacity-80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 text-transparent bg-clip-text">
                ResearchNexus
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary-300 border-b-2 border-primary-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Navigation Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-gray-300 hover:text-white"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="text-gray-300 hover:text-white"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>
            {renderAuthButtons()}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className="text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background-light bg-opacity-95 backdrop-blur-lg animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-primary-300 bg-background-lighter'
                    : 'text-gray-300 hover:text-white hover:bg-background-lighter'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              {user ? (
                <>
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-500/30 flex items-center justify-center">
                      <User size={20} className="text-primary-200" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{user.name}</div>
                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                  </div>
                </>
              ) : (
                <div className="w-full flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Link to="/login">
                      <Button variant="ghost" size="sm">
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button variant="primary" size="sm">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {user && (
              <div className="mt-3 px-2 space-y-1">
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-background-lighter"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-background-lighter"
                >
                  Profile Settings
                </Link>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-background-lighter"
                  >
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-background-lighter"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;