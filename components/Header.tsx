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
    <div className="sticky top-0 z-50 bg-[#f0fcff]/90 backdrop-blur-md border-b border-[#fff0fc] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 self-start sm:self-auto cursor-pointer group" onClick={() => window.location.reload()}>
            <div className="bg-[#fff0fc] text-slate-800 p-2 rounded-xl group-hover:scale-105 transition-transform border border-pink-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-none tracking-tight">Money Saver</h1>
              <p className="text-xs text-slate-500 font-medium">精選優惠彙整</p>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="w-full sm:max-w-md relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400 group-focus-within:text-pink-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-20 py-2.5 border border-slate-200 rounded-full leading-5 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#fff0fc] focus:border-pink-300 transition-all sm:text-sm shadow-sm"
              placeholder="搜尋優惠商品、店家..."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                onSearch(e.target.value); 
              }}
            />
            <button
              type="submit"
              className="absolute inset-y-1 right-1 px-4 flex items-center bg-slate-800 text-white rounded-full text-sm font-medium hover:bg-slate-700 focus:outline-none transition-all"
            >
              搜尋
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};