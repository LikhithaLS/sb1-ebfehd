import React from 'react';
import { Globe } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Globe className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Wildlife Conservation Explorer</h1>
              <p className="text-sm text-gray-600">Mapping Earth's Endangered Species</p>
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Conservation</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Take Action</a>
          </nav>
        </div>
      </div>
    </header>
  );
}