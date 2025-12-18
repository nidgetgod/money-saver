import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0fcff] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">關於我們</h1>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">我們的使命</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Money Saver 致力於成為您最信賴的省錢助手。我們深知在這個物價不斷上漲的時代，每一分錢都很珍貴。因此，我們精心挑選並整合了台灣各大零售商的最新優惠資訊，包括麥當勞、漢堡王、摩斯漢堡、Costco、屈臣氏等知名品牌，讓您可以輕鬆找到最划算的優惠方案。
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">我們的理念</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              「精選優惠，就像細心呵護的植物」—— 這是 PlantChosen（Money Saver）名稱的由來。我們相信，好的優惠需要細心挑選與整理，就像園丁照顧植物一樣。每一筆優惠資訊都經過我們的篩選與驗證，確保為您帶來真正有價值的省錢情報。
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">我們提供的服務</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-3 mb-6">
              <li><strong>即時優惠更新</strong>：我們定期更新各大商家的最新優惠資訊，確保您不錯過任何好康。</li>
              <li><strong>智慧篩選功能</strong>：透過分類、商店、折扣幅度等多重篩選條件，快速找到您需要的優惠。</li>
              <li><strong>價格追蹤系統</strong>：追蹤商品價格歷史，告訴您現在是否為最佳入手時機。</li>
              <li><strong>一鍵複製優惠碼</strong>：方便快速的優惠碼複製功能，讓您在結帳時更加順暢。</li>
              <li><strong>省錢攻略文章</strong>：分享實用的省錢技巧與消費情報，幫助您做出更明智的購買決策。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">為什麼選擇 Money Saver？</h2>
            <div className="bg-[#fff0fc] rounded-xl p-6 mb-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>完全免費</strong>：所有功能完全免費使用，沒有任何隱藏費用。</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>資訊透明</strong>：我們清楚標示優惠來源與使用條件，不誤導消費者。</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>持續優化</strong>：我們不斷改進功能與介面，提供更好的使用體驗。</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>用戶至上</strong>：您的建議是我們進步的動力，歡迎隨時與我們聯繫。</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">我們的承諾</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              我們承諾持續為您提供最新、最準確的優惠資訊。雖然我們已盡力確保資訊的正確性，但由於商家活動可能隨時變更，實際優惠內容仍以各商家官方公告為準。我們也會持續優化價格追蹤功能，幫助您掌握最佳購買時機，真正做到聰明消費、輕鬆省錢。
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">聯絡我們</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              如果您有任何問題、建議或合作提案，歡迎透過「聯絡我們」頁面與我們取得聯繫。我們重視每一位使用者的意見，並會盡快回覆您的訊息。
            </p>

            <div className="mt-10 pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm">
                最後更新日期：2025年12月18日
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
