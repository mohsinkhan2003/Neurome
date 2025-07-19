import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Bell } from 'lucide-react';
import CricpbLogo from './CricpbLogo';
import LiveMatchTicker from './LiveMatchTicker';

const Header: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || (path === '/dashboard' && location.pathname === '/');
  };
  
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <CricpbLogo />
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent tracking-tight">
                  Cricpb
                </h1>
                <p className="text-xs text-blue-100 font-semibold tracking-wide uppercase">Ultimate Cricket Portal</p>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/dashboard" 
              className={`hover:text-yellow-400 transition-colors font-medium px-3 py-2 rounded-md ${
                isActive('/dashboard') ? 'bg-blue-700 text-yellow-400' : ''
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/matches" 
              className={`hover:text-yellow-400 transition-colors font-medium px-3 py-2 rounded-md ${
                isActive('/matches') ? 'bg-blue-700 text-yellow-400' : ''
              }`}
            >
              Matches
            </Link>
            <Link 
              to="/teams" 
              className={`hover:text-yellow-400 transition-colors font-medium px-3 py-2 rounded-md ${
                isActive('/teams') ? 'bg-blue-700 text-yellow-400' : ''
              }`}
            >
              Teams
            </Link>
            <Link 
              to="/players" 
              className={`hover:text-yellow-400 transition-colors font-medium px-3 py-2 rounded-md ${
                isActive('/players') ? 'bg-blue-700 text-yellow-400' : ''
              }`}
            >
              Players
            </Link>
            <Link 
              to="/news" 
              className={`hover:text-yellow-400 transition-colors font-medium px-3 py-2 rounded-md ${
                isActive('/news') ? 'bg-blue-700 text-yellow-400' : ''
              }`}
            >
              News
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 cursor-pointer hover:text-yellow-400 transition-colors hover:scale-110" />
            <Menu className="h-6 w-6 md:hidden cursor-pointer hover:text-yellow-400 transition-colors" />
          </div>
        </div>
      </div>
      <LiveMatchTicker />
    </header>
  );
};

export default Header;