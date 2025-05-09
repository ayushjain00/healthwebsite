import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import DashboardPage from './pages/DashboardPage';
import AuthPage from './pages/AuthPage';
import AIChatbot from './components/ai/AIChatbot';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-background text-gray-100">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/signup" element={<AuthPage />} />
              {/* Additional routes would be added here */}
              <Route path="*" element={<div className="pt-24 text-center">Page not found</div>} />
            </Routes>
          </main>
          <Footer />
          <AIChatbot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;