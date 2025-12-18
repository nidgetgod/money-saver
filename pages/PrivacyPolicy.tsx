import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0fcff] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">隱私權政策</h1>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <p className="text-blue-900 text-sm">
              <strong>生效日期：</strong>2025年12月18日<br />
              <strong>最後更新：</strong>2025年12月18日
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">前言</h2>
              <p className="text-slate-600 leading-relaxed">
                Money Saver（以下簡稱「本網站」或「我們」）重視您的隱私權。本隱私權政策說明我們如何收集、使用、揭露及保護您在使用本網站服務時所提供的個人資料。當您使用本網站服務時，即表示您同意本隱私權政策的內容。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">一、資料收集</h2>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">1.1 我們收集的資料類型</h3>
              <div className="bg-slate-50 rounded-xl p-6 mb-4">
                <p className="font-semibold text-slate-700 mb-3">自動收集的資料：</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>瀏覽器類型與版本</li>
                  <li>作業系統資訊</li>
                  <li>IP 位址（匿名化處理）</li>
                  <li>造訪日期與時間</li>
                  <li>瀏覽的頁面與停留時間</li>
                  <li>搜尋關鍵字與篩選條件</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 mb-4">
                <p className="font-semibold text-slate-700 mb-3">您主動提供的資料（如有）：</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>透過聯絡表單提供的姓名與電子郵件</li>
                  <li>訂閱電子報時提供的電子郵件地址</li>
                  <li>意見回饋或問題諮詢的內容</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">1.2 Cookie 與追蹤技術</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                本網站使用 Cookie 及類似技術來改善使用者體驗。Cookie 是儲存在您裝置上的小型文字檔案，可幫助我們記住您的偏好設定。
              </p>
              <div className="bg-[#fff0fc] rounded-xl p-6">
                <p className="font-semibold text-slate-700 mb-2">我們使用的 Cookie 類型：</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>必要性 Cookie：</strong>確保網站基本功能正常運作</li>
                  <li><strong>分析性 Cookie：</strong>了解使用者如何使用網站（例如：Google Analytics）</li>
                  <li><strong>功能性 Cookie：</strong>記住您的偏好設定與篩選條件</li>
                </ul>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">二、資料使用目的</h2>
              <p className="text-slate-600 leading-relaxed mb-4">我們收集的資料僅用於以下合法目的：</p>
              <ul className="list-decimal list-inside text-slate-600 space-y-3">
                <li><strong>提供與改善服務：</strong>確保網站正常運作、優化使用者體驗、開發新功能</li>
                <li><strong>個人化內容：</strong>根據您的瀏覽記錄推薦相關優惠（本機儲存，不上傳伺服器）</li>
                <li><strong>統計分析：</strong>了解使用者行為模式，改進網站內容與功能</li>
                <li><strong>客戶服務：</strong>回應您的詢問、處理意見回饋、解決技術問題</li>
                <li><strong>安全維護：</strong>偵測並防範惡意攻擊、濫用行為或違反使用條款的情形</li>
                <li><strong>法律遵循：</strong>遵守相關法律規定或配合司法機關調查</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">三、資料分享與揭露</h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-4">
                <p className="text-green-900 font-semibold mb-2">✓ 我們的承諾：</p>
                <p className="text-green-800">
                  我們<strong>絕不會</strong>販售、出租或交易您的個人資料給第三方作為行銷用途。
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed mb-4">在以下情況下，我們可能會分享資料：</p>
              <ul className="list-disc list-inside text-slate-600 space-y-3">
                <li><strong>服務提供商：</strong>與協助我們運營網站的第三方服務商（如網站託管商、分析工具提供商）分享，但僅限於提供服務所需的最低限度資料</li>
                <li><strong>法律要求：</strong>在法律要求或為保護本網站、使用者或公眾的權益、安全時</li>
                <li><strong>商業轉讓：</strong>若本網站發生合併、收購或資產出售，您的資料可能會被轉移（我們會事先通知您）</li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-6">
                <p className="text-yellow-900 mb-2"><strong>第三方連結：</strong></p>
                <p className="text-yellow-800 text-sm">
                  本網站可能包含外部連結（如商家官方網站）。我們對這些第三方網站的隱私政策不負責任。請在提供個人資料前，先閱讀該網站的隱私權政策。
                </p>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">四、資料安全</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                我們採取合理的技術與組織措施來保護您的個人資料，包括：
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>使用 HTTPS 加密傳輸協定</li>
                <li>定期進行安全性檢查與更新</li>
                <li>限制員工存取個人資料的權限</li>
                <li>使用防火牆與入侵偵測系統</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                然而，請注意網路傳輸無法保證 100% 安全。我們會盡最大努力保護您的資料，但無法完全保證其絕對安全。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">五、資料保留期限</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                我們僅在必要期間內保留您的個人資料：
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>瀏覽資料：</strong>通常保留 26 個月（符合 Google Analytics 預設設定）</li>
                <li><strong>聯絡表單資料：</strong>保留至您的詢問處理完畢後 2 年</li>
                <li><strong>電子報訂閱：</strong>保留至您取消訂閱為止</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                期限屆滿後，我們會安全地刪除或匿名化處理您的資料，除非法律要求我們保留更長時間。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">六、您的權利</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                根據個人資料保護法，您擁有以下權利：
              </p>
              <div className="bg-slate-50 rounded-xl p-6">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>查詢與請求閱覽：</strong>您可以要求查看我們持有的您的個人資料</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>請求補充或更正：</strong>若您的資料不正確或不完整，可要求更正</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>請求停止處理或刪除：</strong>您可以要求我們停止使用或刪除您的個人資料</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>反對處理：</strong>您可以反對我們基於合法利益處理您的資料</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>資料可攜權：</strong>您可以要求以常見格式接收您的個人資料</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-600 leading-relaxed mt-4">
                如需行使上述權利，請透過「聯絡我們」頁面與我們聯繫。我們會在 30 天內回應您的請求。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">七、未成年人隱私</h2>
              <p className="text-slate-600 leading-relaxed">
                本網站服務主要面向成年人。我們不會故意收集 18 歲以下未成年人的個人資料。若您是未成年人的家長或監護人，發現孩子在未經您同意的情況下提供了個人資料，請立即與我們聯繫，我們會盡快刪除相關資料。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">八、政策變更</h2>
              <p className="text-slate-600 leading-relaxed">
                我們可能會不定期更新本隱私權政策，以反映服務變更或法律要求。重大變更時，我們會在網站上顯著位置公告或透過電子郵件通知您。建議您定期查閱本頁面以了解最新政策。繼續使用本網站即表示您接受更新後的隱私權政策。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">九、聯絡我們</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                如果您對本隱私權政策有任何疑問或疑慮，或希望行使您的權利，請透過以下方式與我們聯繫：
              </p>
              <div className="bg-[#f0fcff] rounded-xl p-6">
                <p className="text-slate-700"><strong>Email：</strong>privacy@moneysaver.tw</p>
                <p className="text-slate-700 mt-2"><strong>聯絡表單：</strong>請前往「聯絡我們」頁面</p>
                <p className="text-slate-700 mt-2"><strong>回應時間：</strong>我們會在收到您的請求後 30 天內回覆</p>
              </div>
            </section>

            <div className="mt-10 pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm">
                本隱私權政策最後更新日期：2025年12月18日<br />
                版本：1.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
