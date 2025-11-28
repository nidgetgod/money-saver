import React from 'react';

interface FilterBarProps {
  categories: string[];
  stores: string[];
  selectedCategory: string;
  selectedStore: string;
  selectedDiscount: number;
  onCategoryChange: (val: string) => void;
  onStoreChange: (val: string) => void;
  onDiscountChange: (val: number) => void;
  onReset: () => void;
  resultCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  stores,
  selectedCategory,
  selectedStore,
  selectedDiscount,
  onCategoryChange,
  onStoreChange,
  onDiscountChange,
  onReset,
  resultCount
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end justify-between">
        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          {/* Category Filter */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-[140px]">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">分類</label>
            <select
              className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-[#fff0fc] focus:border-pink-400 block w-full p-2.5 transition-colors cursor-pointer"
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
            >
              <option value="All">全部類別</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Store Filter */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-[140px]">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">店家</label>
            <select
              className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-[#fff0fc] focus:border-pink-400 block w-full p-2.5 transition-colors cursor-pointer"
              value={selectedStore}
              onChange={(e) => onStoreChange(e.target.value)}
            >
              <option value="All">全部店家</option>
              {stores.map(store => (
                <option key={store} value={store}>{store}</option>
              ))}
            </select>
          </div>

          {/* Discount Filter */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-[140px]">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">折扣力度</label>
            <select
              className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-[#fff0fc] focus:border-pink-400 block w-full p-2.5 transition-colors cursor-pointer"
              value={selectedDiscount}
              onChange={(e) => onDiscountChange(Number(e.target.value))}
            >
              <option value={0}>不限折扣</option>
              <option value={10}>省 10% 以上</option>
              <option value={30}>省 30% 以上</option>
              <option value={50}>省 50% 以上</option>
              <option value={70}>省 70% 以上</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-slate-100 pt-4 lg:pt-0">
          <span className="text-sm text-slate-500 font-medium">
            共 {resultCount} 筆結果
          </span>
          
          <button
            onClick={onReset}
            className="text-sm text-slate-600 hover:text-slate-900 font-medium px-4 py-2 rounded-lg hover:bg-[#fff0fc] transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            重置
          </button>
        </div>
      </div>
    </div>
  );
};