import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

export const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0fcff] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">省錢攻略部落格</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            精選優惠情報、購物秘訣、價格分析，幫助你做出更聰明的消費決策，輕鬆省下每一分錢。
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Category Badge */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-[#fff0fc] text-pink-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-auto px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-700">{post.author}</p>
                      <p className="text-xs text-slate-400">{new Date(post.publishDate).toLocaleDateString('zh-TW')}</p>
                    </div>
                  </div>

                  <div className="text-pink-600 group-hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">想要更多省錢秘訣？</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            訂閱我們的電子報，每週收到最新優惠情報、購物攻略和價格分析，讓你成為聰明消費達人！
          </p>
          <Link
            to="/contact"
            className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors shadow-sm hover:shadow-md"
          >
            聯絡我們
          </Link>
        </div>
      </div>
    </div>
  );
};
