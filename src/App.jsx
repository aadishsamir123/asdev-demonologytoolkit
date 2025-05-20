import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GhostFinder from './pages/tools/GhostFinder';

// Create a WikiRedirect component to handle the redirection
const WikiRedirect = () => {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://demonologyroblox.fandom.com/';
    }, 1000);
    
    return () => clearTimeout(redirectTimer);
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting to Wiki...</h1>
        <p className="text-xl">You will be redirected to the Roblox Demonology Wiki shortly.</p>
        <p className="text-xl">NOTE: Content on the Wiki is not managed by the owners of this webpage. By going to Fandom, you agree to their Terms of Service.</p>
        <div className="mt-4">
          <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools/ghost-finder" element={<GhostFinder />} />
          <Route path="/tools/wiki-redirect" element={<WikiRedirect />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-xl">The page you are looking for doesn't exist.</p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
