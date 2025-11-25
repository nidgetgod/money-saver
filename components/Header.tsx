import React, { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 self-start sm:self-auto cursor-pointer" onClick={() => window.location.reload()}>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-none">Money Saver</h1>
              <p className="text-xs text-slate-500 font-medium">精選優惠彙整</p>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="w-full sm:max-w-md relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-20 py-2.5 border border-slate-200 rounded-full leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all sm:text-sm"
              placeholder="搜尋優惠商品、店家..."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                // Optional: Auto-search as you type for instant feel
                onSearch(e.target.value); 
              }}
            />
            <button
              type="submit"
              className="absolute inset-y-1 right-1 px-4 flex items-center bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
            >
              搜尋
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};