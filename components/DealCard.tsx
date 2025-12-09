import React, { useState } from 'react';
import { DealItem } from '../types';

interface DealCardProps {
  deal: DealItem;
}

export const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const [copied, setCopied] = useState(false);

  const savings = deal.originalPrice - deal.discountPrice;
  const discountPercent = Math.round((savings / deal.originalPrice) * 100);

  const handleCopy = () => {
    if (deal.couponCode) {
      navigator.clipboard.writeText(deal.couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full group p-5">
      
      {/* Header: Store & Category */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 tracking-wide text-sm border-b-2 border-[#fff0fc] px-0.5">
                {deal.storeName}
            </span>
        </div>
        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded-full">
            {deal.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug">
          {deal.productLink ? (
            <a
              href={deal.productLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-colors duration-200 underline decoration-pink-200 hover:decoration-pink-400 decoration-2 underline-offset-2"
            >
              {deal.productName}
            </a>
          ) : (
            deal.productName
          )}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed whitespace-pre-line">
          {deal.description}
      </p>
      
      <div className="mt-auto">
        {/* Savings Box - High Impact (Lime for Money) */}
        <div className="bg-[#fcfff0] rounded-lg p-3 mb-4 flex justify-between items-center border border-lime-100 relative overflow-hidden">
           {/* Decorative background element */}
           <div className="absolute -right-4 -top-4 w-12 h-12 bg-lime-200 rounded-full opacity-20"></div>

           <div className="flex flex-col relative z-10">
              <span className="text-[10px] uppercase tracking-wider text-lime-800 font-semibold opacity-70">折扣 Savings</span>
              <div className="flex items-baseline gap-1">
                 <span className="text-2xl font-bold text-lime-900">-{discountPercent}%</span>
              </div>
           </div>
           
           <div className="h-8 w-px bg-lime-200 mx-2"></div>
           
           <div className="flex flex-col items-end relative z-10">
              <span className="text-[10px] text-slate-400 line-through">NT${deal.originalPrice.toLocaleString()}</span>
              <span className="text-lg font-bold text-slate-900">NT${deal.discountPrice.toLocaleString()}</span>
           </div>
        </div>

        {/* Valid Period */}
        <div className="flex items-center gap-1.5 mb-3 text-xs text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="truncate">期限: {deal.validPeriod}</span>
        </div>

        {/* Condition & Button */}
        <div className="pt-3 border-t border-slate-100">
           <div className="mb-3">
             <span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded inline-block">
               {deal.condition}
             </span>
           </div>
          
          {deal.couponCode ? (
            <button 
              onClick={handleCopy}
              className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 
                ${copied 
                  ? 'bg-[#f0fdf4] text-green-700 border border-green-200' 
                  : 'bg-slate-800 text-white hover:bg-slate-700 shadow-sm hover:shadow active:scale-[0.98]'}`}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </>
              )}
            </button>
          ) : (
            <div className="w-full py-2.5 px-4 rounded-lg bg-slate-50 text-slate-400 text-sm font-medium text-center cursor-default border border-slate-100">
              無需優惠碼
            </div>
          )}
        </div>
      </div>
    </div>
  );
};