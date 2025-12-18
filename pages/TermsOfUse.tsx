import React from 'react';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0fcff] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">使用者條款</h1>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <p className="text-blue-900 text-sm">
              <strong>生效日期：</strong>2025年12月18日<br />
              <strong>最後更新：</strong>2025年12月18日
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">歡迎使用 Money Saver</h2>
              <p className="text-slate-600 leading-relaxed">
                感謝您使用 Money Saver（以下簡稱「本網站」、「本服務」或「我們」）。本使用者條款（以下簡稱「本條款」）構成您與 Money Saver 之間具有法律約束力的協議。當您存取或使用本網站時，即表示您已閱讀、理解並同意遵守本條款的所有規定。若您不同意本條款，請立即停止使用本服務。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">一、服務說明</h2>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">1.1 服務內容</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Money Saver 是一個優惠資訊整合平台，提供以下服務：
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>整合台灣各大零售商的優惠資訊與促銷活動</li>
                <li>提供商品價格追蹤與歷史價格分析</li>
                <li>優惠券代碼收集與管理</li>
                <li>省錢攻略文章與購物建議</li>
                <li>商品搜尋、分類與篩選功能</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">1.2 免費服務</h3>
              <p className="text-slate-600 leading-relaxed">
                本網站目前提供的所有功能完全免費。我們保留未來可能推出付費進階功能的權利，但會事先通知使用者。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">二、使用資格與帳號</h2>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">2.1 使用資格</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                您必須年滿 18 歲或在您所在司法管轄區的法定成年年齡才能使用本服務。若您未滿 18 歲，必須在家長或監護人的監督下使用本服務。
              </p>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">2.2 帳號安全（若適用）</h3>
              <p className="text-slate-600 leading-relaxed">
                若未來本網站提供會員註冊功能，您需負責維護帳號的保密性與安全性。任何使用您帳號進行的活動，您都需負責。若發現帳號遭未經授權使用，請立即通知我們。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">三、使用規範</h2>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
                <p className="text-red-900 font-semibold mb-3">禁止行為：</p>
                <p className="text-red-800 mb-2">在使用本服務時，您同意<strong>不得</strong>從事以下行為：</p>
              </div>

              <ul className="list-decimal list-inside text-slate-600 space-y-3">
                <li><strong>非法用途：</strong>將本服務用於任何非法目的或違反任何適用法律</li>
                <li><strong>侵犯權利：</strong>侵犯他人的智慧財產權、隱私權或其他合法權益</li>
                <li><strong>惡意攻擊：</strong>嘗試未經授權存取、破壞或干擾本網站的伺服器、系統或網路</li>
                <li><strong>自動化工具：</strong>使用爬蟲、機器人或其他自動化工具大量抓取資料（除非事先取得書面許可）</li>
                <li><strong>散播惡意軟體：</strong>上傳或傳播病毒、木馬程式或任何惡意程式碼</li>
                <li><strong>虛假資訊：</strong>故意提供虛假、誤導或不實的資訊</li>
                <li><strong>濫用服務：</strong>以任何方式濫用或過度使用本服務，影響其他使用者的正常使用</li>
                <li><strong>商業競爭：</strong>將本服務用於開發競爭性服務或產品（除非取得書面授權）</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">四、內容與智慧財產權</h2>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">4.1 本網站內容</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                本網站上的所有內容（包括但不限於文字、圖片、標誌、設計、程式碼、資料庫）均受著作權法及其他智慧財產權法律保護。除非另有明確聲明，否則所有內容的著作權歸 Money Saver 或其授權方所有。
              </p>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">4.2 有限授權</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                我們授予您有限、非專屬、不可轉讓的授權，允許您：
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>為個人、非商業目的使用本網站</li>
                <li>瀏覽與列印本網站內容供個人參考</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                您<strong>不得</strong>未經許可複製、修改、分發、傳播、展示、出版或以其他方式利用本網站內容作商業用途。
              </p>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">4.3 第三方內容</h3>
              <p className="text-slate-600 leading-relaxed">
                本網站展示的商品圖片、商標、品牌名稱等可能屬於第三方（各商家）所有。我們僅在合理使用範圍內展示這些內容，以提供資訊服務。所有商標歸其各自所有者所有。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">五、優惠資訊免責聲明</h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-yellow-900 font-semibold mb-3">重要聲明：</p>
                <ul className="space-y-3 text-yellow-800">
                  <li className="flex items-start">
                    <span className="mr-2">⚠</span>
                    <span><strong>資訊僅供參考：</strong>本網站提供的所有優惠資訊、價格、折扣內容僅供參考。實際優惠內容、使用條件、有效期限等皆以各商家官方公告為準。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⚠</span>
                    <span><strong>資訊可能過時：</strong>我們努力維持資訊的即時性與正確性，但無法保證所有資訊均為最新或完全準確。商家可能隨時變更或終止優惠活動。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⚠</span>
                    <span><strong>價格追蹤限制：</strong>歷史價格資料僅供參考，可能因資料收集方式、時間點差異而與實際情況有所出入。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⚠</span>
                    <span><strong>優惠券有效性：</strong>優惠券代碼的有效性由各商家決定。我們無法保證所有優惠券都能成功使用。</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-600 leading-relaxed mt-4">
                使用本網站資訊前，請務必前往商家官方網站或實體店面確認最新資訊。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">六、免責條款與責任限制</h2>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">6.1 服務提供現況</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                本服務以「現況」（AS IS）與「現有」（AS AVAILABLE）基礎提供。我們不提供任何明示或暗示的保證，包括但不限於適銷性、特定用途適用性或不侵權的保證。
              </p>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">6.2 責任限制</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                在法律允許的最大範圍內，Money Saver 及其關聯方、董事、員工、代理人對以下情形不負任何責任：
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>因使用或無法使用本服務而產生的任何直接、間接、附帶、特殊或衍生性損害</li>
                <li>因資訊不準確、過時或遺漏而造成的損失</li>
                <li>因第三方商家的行為或疏失而產生的損失</li>
                <li>因網路中斷、系統故障或技術問題而導致的損失</li>
                <li>因資料遺失或損壞而產生的損失</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">6.3 第三方連結</h3>
              <p className="text-slate-600 leading-relaxed">
                本網站可能包含第三方網站或服務的連結。這些連結僅為方便使用者而提供。我們對第三方網站的內容、隱私政策或做法不負任何責任。造訪第三方網站的風險由您自行承擔。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">七、服務變更與終止</h2>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">7.1 服務變更</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                我們保留隨時修改、暫停或終止本服務（全部或部分功能）的權利，無需事先通知。我們也可能對服務實施使用限制（如查詢次數、資料存取量等）。
              </p>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">7.2 服務終止</h3>
              <p className="text-slate-600 leading-relaxed">
                我們可能基於任何理由（包括但不限於違反本條款、長期不活動、技術或安全考量），隨時暫停或終止您對本服務的存取權限，無需事先通知或負擔任何責任。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">八、賠償條款</h2>
              <p className="text-slate-600 leading-relaxed">
                您同意賠償並使 Money Saver 及其關聯方、董事、員工、代理人免受因以下原因產生的任何索賠、損失、責任、損害、費用（包括合理的律師費）：
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
                <li>您違反本條款</li>
                <li>您使用本服務的方式</li>
                <li>您侵犯任何第三方的權利</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">九、條款變更</h2>
              <p className="text-slate-600 leading-relaxed">
                我們可能不定期更新本條款。重大變更時，我們會透過網站公告或電子郵件通知您。變更後的條款會在公告後立即生效。繼續使用本服務即表示您接受更新後的條款。若您不同意新條款,請停止使用本服務。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">十、適用法律與爭議解決</h2>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">10.1 適用法律</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                本條款受中華民國法律管轄並依其解釋，不考慮其法律衝突原則。
              </p>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">10.2 爭議解決</h3>
              <p className="text-slate-600 leading-relaxed">
                因本條款產生的任何爭議,雙方應首先嘗試透過友好協商解決。若協商不成,雙方同意以台灣台北地方法院為第一審管轄法院。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">十一、其他條款</h2>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">11.1 完整協議</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                本條款（連同隱私權政策）構成您與 Money Saver 之間關於使用本服務的完整協議，取代所有先前的協議或約定。
              </p>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">11.2 可分割性</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                若本條款的任何條款被認定為無效或不可執行，該條款將在最小必要範圍內修改以使其有效，其餘條款仍完全有效。
              </p>

              <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">11.3 不棄權</h3>
              <p className="text-slate-600 leading-relaxed">
                我們未行使或執行本條款的任何權利或條款，不構成對該權利或條款的放棄。
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">十二、聯絡資訊</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                如果您對本使用者條款有任何疑問或疑慮，請透過以下方式與我們聯繫：
              </p>
              <div className="bg-[#f0fcff] rounded-xl p-6">
                <p className="text-slate-700"><strong>Email：</strong>legal@moneysaver.tw</p>
                <p className="text-slate-700 mt-2"><strong>聯絡表單：</strong>請前往「聯絡我們」頁面</p>
              </div>
            </section>

            <div className="mt-10 pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm">
                本使用者條款最後更新日期：2025年12月18日<br />
                版本：1.0
              </p>
            </div>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-green-900">
                <strong>感謝您閱讀本使用者條款。</strong>使用本服務即表示您已閱讀、理解並同意遵守上述所有條款。祝您使用愉快！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
