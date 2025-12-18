import React, { useState, useMemo } from 'react';
import { DealItem } from '../types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { generatePriceHistory, analyzePriceHistory } from '@/services/priceHistoryService';

interface DealCardProps {
  deal: DealItem;
}

export const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const [copied, setCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const savings = deal.originalPrice - deal.discountPrice;
  const discountPercent = Math.round((savings / deal.originalPrice) * 100);

  // Generate price history and analysis
  const priceHistory = useMemo(() => {
    return deal.priceHistory || generatePriceHistory(deal);
  }, [deal]);

  const analysis = useMemo(() => {
    return analyzePriceHistory(deal, priceHistory);
  }, [deal, priceHistory]);

  // Prepare chart data
  const chartData = useMemo(() => {
    return priceHistory.map(entry => ({
      date: new Date(entry.date).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' }),
      價格: entry.discountPrice
    }));
  }, [priceHistory]);

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

      {/* Historical Low Price Badge */}
      {analysis.isHistoricalLow && (
        <div className="mb-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-2 flex items-center gap-2">
          <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-semibold text-orange-800">90天最低價！</span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug">
          {deal.productName}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed whitespace-pre-line">
          {deal.description}
      </p>

      <div className="mt-auto">
        {/* Savings Box */}
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

        {/* Price Analysis Badge */}
        <div className="mb-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-blue-900 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              價格追蹤分析
            </span>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 hover:text-blue-800 text-xs font-medium"
            >
              {showDetails ? '收起' : '查看詳情'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-slate-500">90天均價</span>
              <p className="font-semibold text-slate-700">NT${analysis.averagePrice.toLocaleString()}</p>
            </div>
            <div>
              <span className="text-slate-500">歷史低價</span>
              <p className="font-semibold text-slate-700">NT${analysis.lowestPrice.toLocaleString()}</p>
            </div>
          </div>

          {/* Price comparison indicator */}
          <div className="mt-2 pt-2 border-t border-blue-100">
            {analysis.currentVsAverage <= -5 ? (
              <span className="text-xs text-green-700 font-medium flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                好價格！低於平均 {Math.abs(analysis.currentVsAverage)}%
              </span>
            ) : analysis.currentVsAverage >= 5 ? (
              <span className="text-xs text-orange-700 font-medium flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                高於平均 {analysis.currentVsAverage}%，建議等待
              </span>
            ) : (
              <span className="text-xs text-blue-700 font-medium">
                價格正常，接近 90 天平均
              </span>
            )}
          </div>
        </div>

        {/* Detailed Price Analysis (expandable) */}
        {showDetails && (
          <div className="mb-4 bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
            {/* Price Chart */}
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="價格"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Text Analysis */}
            <div className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-800 mb-2 flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                購買建議
              </p>
              <p>{analysis.recommendation}</p>
            </div>

            {/* Savings Potential */}
            {analysis.savingsPotential > 0 && (
              <div className="text-xs bg-amber-50 border border-amber-200 rounded-lg p-2">
                <span className="text-amber-900">
                  💡 若等到歷史低價，可節省 <strong>NT${analysis.savingsPotential.toLocaleString()}</strong>
                </span>
              </div>
            )}
          </div>
        )}

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
