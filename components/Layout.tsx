import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="mt-auto py-8 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link to="/about" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
              關於我們
            </Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
              聯絡我們
            </Link>
            <Link to="/privacy" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
              隱私權政策
            </Link>
            <Link to="/terms" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
              使用者條款
            </Link>
            <Link to="/blog" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
              省錢攻略
            </Link>
          </div>

          <div className="text-center text-slate-400 text-sm">
            <p>© 2025 Money Saver. All rights reserved.</p>
            <div className="mt-4 text-xs text-slate-500 max-w-4xl mx-auto">
              <p className="font-bold mb-2">免責聲明</p>
              <p>
              本網站所提供之優惠資訊（包含但不限於價格、折扣內容、活動期間）僅供參考。 實際活動內容與使用規範皆以各商家官方公告為準。 本網站將盡力維護資訊之正確性，但不保證所有資訊均為即時更新或完全無誤。 對於因使用本網站資訊所生之任何直接或間接損害，本網站不負任何法律責任。
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
