import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, User, Building, AtSign } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, signup, loading, error } = useAuth();
  
  const isLogin = location.pathname === '/login';
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: UserRole.Researcher,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await signup(formData.email, formData.password, formData.name, formData.role as UserRole);
      }
      
      // Redirect to dashboard after successful auth
      navigate('/dashboard');
    } catch (err) {
      console.error('Authentication error:', err);
    }
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-300">
            {isLogin 
              ? 'Sign in to access your research dashboard' 
              : 'Join the community of innovative researchers'}
          </p>
        </div>
        
        <div className="bg-background-light rounded-xl border border-gray-800 p-6 shadow-xl">
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  leftIcon={<User size={18} className="text-gray-500" />}
                  label="Full Name"
                  required
                  fullWidth
                />
              </div>
            )}
            
            <div className="mb-4">
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                leftIcon={<Mail size={18} className="text-gray-500" />}
                label="Email Address"
                required
                fullWidth
              />
            </div>
            
            <div className="mb-4">
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                leftIcon={<Lock size={18} className="text-gray-500" />}
                label="Password"
                required
                fullWidth
              />
            </div>
            
            {!isLogin && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label 
                    className={`flex items-center p-3 border ${
                      formData.role === UserRole.Researcher 
                        ? 'border-primary-500 bg-primary-500/10' 
                        : 'border-gray-700 bg-background-lighter'
                    } rounded-lg cursor-pointer transition-colors`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={UserRole.Researcher}
                      checked={formData.role === UserRole.Researcher}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <AtSign size={18} className={`mr-2 ${
                      formData.role === UserRole.Researcher ? 'text-primary-400' : 'text-gray-400'
                    }`} />
                    <span className={formData.role === UserRole.Researcher ? 'text-primary-300' : 'text-gray-300'}>
                      Researcher
                    </span>
                  </label>
                  
                  <label 
                    className={`flex items-center p-3 border ${
                      formData.role === UserRole.Company 
                        ? 'border-secondary-500 bg-secondary-500/10' 
                        : 'border-gray-700 bg-background-lighter'
                    } rounded-lg cursor-pointer transition-colors`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={UserRole.Company}
                      checked={formData.role === UserRole.Company}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <Building size={18} className={`mr-2 ${
                      formData.role === UserRole.Company ? 'text-secondary-400' : 'text-gray-400'
                    }`} />
                    <span className={formData.role === UserRole.Company ? 'text-secondary-300' : 'text-gray-300'}>
                      Company
                    </span>
                  </label>
                </div>
              </div>
            )}
            
            {error && (
              <div className="mb-4 p-3 bg-error-500/10 border border-error-500 rounded-lg text-error-400 text-sm">
                {error}
              </div>
            )}
            
            <Button
              type="submit"
              variant={isLogin ? 'primary' : 'secondary'}
              size="lg"
              isLoading={loading}
              fullWidth
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-400">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <a 
                  onClick={() => navigate('/signup')}
                  className="text-primary-400 hover:text-primary-300 cursor-pointer"
                >
                  Sign up
                </a>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <a 
                  onClick={() => navigate('/login')}
                  className="text-primary-400 hover:text-primary-300 cursor-pointer"
                >
                  Sign in
                </a>
              </>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            For testing, you can use:<br />
            <span className="text-gray-400">researcher@example.com</span> for a researcher account<br />
            <span className="text-gray-400">company@example.com</span> for a company account<br />
            <span className="text-gray-400">admin@example.com</span> for an admin account<br />
            with any password.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;