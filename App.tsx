import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { DealCard } from './components/DealCard';
import { FilterBar } from './components/FilterBar';
import { fetchDeals } from './services/dataService';
import { DealItem } from './types';

const App: React.FC = () => {
  // Store all loaded deals
  const [allDeals, setAllDeals] = useState<DealItem[]>([]);
  // Loading & Error states
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Search Query State
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter States
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [storeFilter, setStoreFilter] = useState<string>('All');
  const [minDiscountFilter, setMinDiscountFilter] = useState<number>(0);

  // Initial Data Load
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchDeals();
        setAllDeals(data);
        setError(null);
      } catch (err) {
        setError("無法讀取優惠資料，請檢查網路連線或 deals.json 檔案設定。");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // Reset filters when a new search is performed to ensure results are seen
    if (query) {
      setCategoryFilter('All');
      setStoreFilter('All');
    }
  };

  // Derived Data for Filters
  const uniqueCategories = useMemo(() => 
    Array.from(new Set(allDeals.map(d => d.category))).sort(), 
  [allDeals]);

  const uniqueStores = useMemo(() => 
    Array.from(new Set(allDeals.map(d => d.storeName))).sort(), 
  [allDeals]);

  // Main Filtering Logic
  const filteredDeals = useMemo(() => {
    return allDeals.filter(deal => {
      // 1. Text Search Filter (Client side filtering)
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === '' || 
        deal.productName.toLowerCase().includes(query) ||
        deal.storeName.toLowerCase().includes(query) ||
        deal.description.toLowerCase().includes(query);

      // 2. Dropdown Filters
      const matchesCategory = categoryFilter === 'All' || deal.category === categoryFilter;
      const matchesStore = storeFilter === 'All' || deal.storeName === storeFilter;
      
      const savings = deal.originalPrice - deal.discountPrice;
      const discountPercent = (savings / deal.originalPrice) * 100;
      const matchesDiscount = discountPercent >= minDiscountFilter;

      return matchesSearch && matchesCategory && matchesStore && matchesDiscount;
    });
  }, [allDeals, searchQuery, categoryFilter, storeFilter, minDiscountFilter]);

  const handleResetFilters = async () => {
    setCategoryFilter('All');
    setStoreFilter('All');
    setMinDiscountFilter(0);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#f0fcff] pb-20 text-slate-700 font-sans">
      <Header onSearch={handleSearch} isLoading={loading} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Filters */}
        {!loading && !error && allDeals.length > 0 && (
           <FilterBar 
             categories={uniqueCategories}
             stores={uniqueStores}
             selectedCategory={categoryFilter}
             selectedStore={storeFilter}
             selectedDiscount={minDiscountFilter}
             onCategoryChange={setCategoryFilter}
             onStoreChange={setStoreFilter}
             onDiscountChange={setMinDiscountFilter}
             onReset={handleResetFilters}
             resultCount={filteredDeals.length}
           />
        )}

        {/* Content Area */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 h-64 animate-pulse flex flex-col">
                <div className="h-4 bg-slate-100 rounded w-1/3 mb-4"></div>
                <div className="h-6 bg-slate-100 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-slate-100 rounded w-full mb-8"></div>
                <div className="mt-auto h-12 bg-slate-100 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-red-50 text-red-500 p-4 rounded-full mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">資料讀取錯誤</h3>
            <p className="text-slate-500">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              重新整理
            </button>
          </div>
        ) : filteredDeals.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                <div className="inline-block p-4 bg-[#fff0fc] rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-900">沒有找到相關優惠</h3>
                <p className="text-slate-500 mt-1">
                   {searchQuery ? `找不到與 "${searchQuery}" 相關的結果` : "請嘗試調整篩選條件"}
                </p>
                <button 
                    onClick={handleResetFilters}
                    className="mt-4 text-slate-800 font-bold border-b-2 border-[#fff0fc] hover:bg-[#fff0fc] px-2 transition-all"
                >
                    清除所有篩選條件
                </button>
            </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        )}
      </main>
      
      <footer className="mt-12 py-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2025 Money Saver.</p>
          <div className="mt-4 text-xs text-slate-500 max-w-4xl mx-auto">
            <p className="font-bold mb-2">免責聲明</p>
            <p>
            本網站所提供之優惠資訊（包含但不限於價格、折扣內容、活動期間）僅供參考。 實際活動內容與使用規範皆以各商家官方公告為準。 本網站將盡力維護資訊之正確性，但不保證所有資訊均為即時更新或完全無誤。 對於因使用本網站資訊所生之任何直接或間接損害，本網站不負任何法律責任。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;