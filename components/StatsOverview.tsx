import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { DealItem, DealCategory } from '../types';

interface StatsOverviewProps {
  deals: DealItem[];
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ deals }) => {
  if (deals.length === 0) return null;

  // Calculate total savings
  const totalSavings = deals.reduce((acc, deal) => acc + (deal.originalPrice - deal.discountPrice), 0);
  
  // Data for Category Distribution (Pie)
  const categoryCount = deals.reduce((acc, deal) => {
    acc[deal.category] = (acc[deal.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.keys(categoryCount).map((key) => ({
    name: key,
    value: categoryCount[key],
  }));

  // Data for Discount Magnitude (Bar) - Top 5 items by savings
  const barData = [...deals]
    .sort((a, b) => (b.originalPrice - b.discountPrice) - (a.originalPrice - a.discountPrice))
    .slice(0, 5)
    .map(deal => ({
      name: deal.productName.substring(0, 6) + '...',
      savings: deal.originalPrice - deal.discountPrice
    }));

  const COLORS = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#3b82f6'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Stats Card 1: Total Potential Savings */}
      <div className="bg-indigo-600 rounded-2xl p-6 text-white flex flex-col justify-center shadow-lg shadow-indigo-200">
        <h3 className="text-indigo-100 font-medium mb-2">本頁總共可省下</h3>
        <div className="text-4xl font-bold mb-1">NT${totalSavings.toLocaleString()}</div>
        <p className="text-sm text-indigo-200 opacity-80">搜集了 {deals.length} 個熱門優惠</p>
      </div>

      {/* Stats Card 2: Category Distribution */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-slate-700 font-bold mb-4 text-sm">優惠種類分佈</h3>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ fontSize: '12px', fontWeight: 600, color: '#334155' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Card 3: Top Savings */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-slate-700 font-bold mb-4 text-sm">最高省錢排行 (NT$)</h3>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} layout="vertical" margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={70} tick={{fontSize: 10}} interval={0} />
              <Tooltip 
                 cursor={{fill: '#f8fafc'}}
                 contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="savings" fill="#10b981" radius={[0, 4, 4, 0]} barSize={15} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};