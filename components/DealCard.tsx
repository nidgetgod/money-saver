import React, { useState } from 'react';
import { DealItem } from '../types';

interface DealCardProps {
  deal: DealItem;
}

export const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const [copied, setCopied] = useState(false);

  const savings = deal.originalPrice - deal.discountPrice;
  const discountPercent = Math.round((savings / deal.originalPrice) * 100);
  
  // Generate a deterministic placeholder image based on category
  const getImageUrl = (category: string) => {
    const seed = category.length + deal.storeName.length + (deal.productName ? deal.productName.length : 0);
    return `https://picsum.photos/seed/${seed}/400/250`;
  };

  const handleCopy = () => {
    if (deal.couponCode) {
      navigator.clipboard.writeText(deal.couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full group">
      <div className="relative overflow-hidden">
        <img 
          src={getImageUrl(deal.category)} 
          alt={deal.productName} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700 shadow-sm">
          {deal.storeName}
        </div>
        <div className="absolute top-3 right-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          -{discountPercent}%
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
            {deal.category}
          </span>
          {/* Explicit Store Name in body */}
          <span className="text-xs font-semibold text-indigo-600">
            {deal.storeName}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-800 mb-1 leading-snug line-clamp-2">{deal.productName}</h3>
        <p className="text-sm text-slate-500 mb-3 line-clamp-2">{deal.description}</p>
        
        {/* Promotion Period */}
        <div className="flex items-center gap-1.5 mb-4 text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{deal.validPeriod}</span>
        </div>
        
        <div className="mt-auto">
          {/* Price Section */}
          <div className="flex items-end justify-between mb-2 pt-2 border-t border-slate-50">
             <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 mb-0.5">原價</span>
                <span className="text-sm text-slate-400 line-through">NT${deal.originalPrice.toLocaleString()}</span>
             </div>
             <div className="flex flex-col items-end">
                <span className="text-[10px] text-rose-500 font-bold mb-0.5">優惠價</span>
                <span className="text-2xl font-bold text-slate-900 leading-none">NT${deal.discountPrice.toLocaleString()}</span>
             </div>
          </div>

          {/* Savings & Discount % Display */}
          <div className="flex justify-between items-center mb-3 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
             <span className="text-xs font-medium text-emerald-700">
               省下 NT${savings.toLocaleString()}
             </span>
             <span className="text-xs font-bold text-emerald-700">
               折扣 {discountPercent}%
             </span>
          </div>

          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-500">使用條件</span>
              <span className="text-xs font-medium text-slate-700 text-right">{deal.condition}</span>
            </div>
            
            {deal.couponCode ? (
              <button 
                onClick={handleCopy}
                className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 
                  ${copied 
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'}`}
              >
                {copied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    已複製代碼
                  </>
                ) : (
                  <>
                    <span className="font-mono tracking-wider">{deal.couponCode}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </>
                )}
              </button>
            ) : (
              <div className="w-full py-2 px-4 rounded-lg bg-slate-200 text-slate-500 text-sm font-medium text-center cursor-not-allowed">
                無需優惠碼
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};