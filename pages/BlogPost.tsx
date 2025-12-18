import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import ReactMarkdown from 'react-markdown';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (exclude current post)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f0fcff] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回部落格
        </Link>

        {/* Article */}
        <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Header */}
          <div className="p-8 md:p-12 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-[#fff0fc] text-pink-700 text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-slate-400">{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">{post.author}</p>
                  <p className="text-sm text-slate-400">
                    {new Date(post.publishDate).toLocaleDateString('zh-TW', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 prose prose-slate max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
              <p className="text-blue-900 leading-relaxed">
                <strong>文章摘要：</strong>{post.excerpt}
              </p>
            </div>

            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-slate-800 mt-8 mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 pb-2 border-b-2 border-pink-100">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-slate-600 leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-4 text-slate-600">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-slate-600">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600 my-4">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-800">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto mb-4">
                    {children}
                  </pre>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-slate-800">{children}</strong>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-lg">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-slate-50">{children}</thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="divide-y divide-slate-200">{children}</tbody>
                ),
                tr: ({ children }) => (
                  <tr>{children}</tr>
                ),
                th: ({ children }) => (
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-4 py-3 text-sm text-slate-600">{children}</td>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Share Section */}
          <div className="px-8 md:px-12 py-6 bg-slate-50 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-3">覺得這篇文章有幫助嗎？分享給朋友吧！</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  const url = window.location.href;
                  const text = `${post.title} - Money Saver`;
                  if (navigator.share) {
                    navigator.share({ title: text, url });
                  } else {
                    navigator.clipboard.writeText(url);
                    alert('連結已複製到剪貼簿！');
                  }
                }}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors"
              >
                分享文章
              </button>
              <Link
                to="/"
                className="px-4 py-2 bg-[#fff0fc] text-pink-700 rounded-lg text-sm font-medium hover:bg-pink-100 transition-colors"
              >
                查看更多優惠
              </Link>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">相關文章</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all duration-300">
                    <span className="inline-block px-2 py-1 bg-[#fff0fc] text-pink-700 text-xs font-semibold rounded-full mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
