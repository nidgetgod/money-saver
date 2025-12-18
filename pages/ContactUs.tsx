import React, { useState } from 'react';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder - in production, you would send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#f0fcff] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">聯絡我們</h1>

          <div className="prose prose-slate max-w-none mb-10">
            <p className="text-slate-600 leading-relaxed">
              感謝您使用 Money Saver！我們重視每一位使用者的意見與建議。無論您有任何問題、想法或合作提案，都歡迎透過下方表單與我們聯繫。我們會盡快回覆您的訊息。
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">訊息已送出！</h3>
              <p className="text-green-700">感謝您的來信，我們會盡快與您聯繫。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fff0fc] focus:border-transparent transition-all outline-none"
                  placeholder="請輸入您的姓名"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  電子郵件 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fff0fc] focus:border-transparent transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  主旨 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fff0fc] focus:border-transparent transition-all outline-none bg-white"
                >
                  <option value="">請選擇主旨</option>
                  <option value="一般詢問">一般詢問</option>
                  <option value="優惠資訊回報">優惠資訊回報</option>
                  <option value="功能建議">功能建議</option>
                  <option value="錯誤回報">錯誤回報</option>
                  <option value="合作提案">合作提案</option>
                  <option value="其他">其他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  訊息內容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fff0fc] focus:border-transparent transition-all outline-none resize-none"
                  placeholder="請詳細描述您的問題或建議..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 text-white py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all shadow-sm hover:shadow-md"
              >
                送出訊息
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-700 mb-6">其他聯絡方式</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#f0fcff] rounded-xl p-6">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  電子郵件
                </h3>
                <p className="text-slate-600">support@moneysaver.tw</p>
                <p className="text-slate-500 text-sm mt-1">我們會在 1-2 個工作天內回覆</p>
              </div>

              <div className="bg-[#fff0fc] rounded-xl p-6">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  服務時間
                </h3>
                <p className="text-slate-600">週一至週五 9:00 - 18:00</p>
                <p className="text-slate-500 text-sm mt-1">國定假日休息</p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              常見問題
            </h3>
            <p className="text-blue-800 text-sm">
              在聯絡我們之前，您可以先查看我們的常見問題，或許能更快找到您需要的答案。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
