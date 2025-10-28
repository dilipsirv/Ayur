import { useState } from 'react';
import { Menu, X, Sparkles, LayoutDashboard, Settings } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 font-bold text-xl group"
          >
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-xl group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              AyurWell
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => window.location.href = '/'}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => window.location.href = '/dashboard'}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium flex items-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </button>
            <button 
              onClick={() => window.location.href = '/admin'}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Admin
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => window.location.href = '/dashboard'}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <button 
              onClick={() => {
                window.location.href = '/';
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => {
                window.location.href = '/dashboard';
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium flex items-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </button>
            <button 
              onClick={() => {
                window.location.href = '/admin';
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Admin
            </button>
            <button 
              onClick={() => {
                window.location.href = '/dashboard';
                setMobileMenuOpen(false);
              }}
              className="block w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold text-center mt-4"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
}