import { DealItem, PriceHistoryEntry } from '@/types';

/**
 * Generate mock price history for demonstration purposes
 * In production, this would fetch real historical data from a database
 */
export const generatePriceHistory = (deal: DealItem, daysBack: number = 90): PriceHistoryEntry[] => {
  const history: PriceHistoryEntry[] = [];
  const today = new Date();

  // Generate historical data points (one per week for the past 90 days)
  const dataPoints = Math.floor(daysBack / 7);

  // Calculate price variation range
  const currentDiscount = deal.discountPrice;
  const priceVariation = currentDiscount * 0.15; // 15% variation range

  for (let i = dataPoints; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - (i * 7));

    // Generate realistic price fluctuation
    let historicalPrice: number;

    if (i === 0) {
      // Current price
      historicalPrice = currentDiscount;
    } else {
      // Random price within variation range
      const randomFactor = (Math.random() - 0.5) * 2; // -1 to 1
      historicalPrice = Math.round(currentDiscount + (priceVariation * randomFactor));

      // Ensure price doesn't go below a reasonable minimum
      historicalPrice = Math.max(historicalPrice, currentDiscount * 0.85);
      // Ensure price doesn't exceed original price
      historicalPrice = Math.min(historicalPrice, deal.originalPrice);
    }

    history.push({
      date: date.toISOString().split('T')[0],
      price: deal.originalPrice,
      discountPrice: historicalPrice
    });
  }

  return history;
};

/**
 * Analyze price trends and provide insights
 */
export interface PriceAnalysis {
  isHistoricalLow: boolean;
  lowestPrice: number;
  lowestPriceDate: string;
  averagePrice: number;
  currentVsAverage: number; // percentage
  trend: 'increasing' | 'decreasing' | 'stable';
  recommendation: string;
  savingsPotential: number; // how much could be saved by waiting
}

export const analyzePriceHistory = (deal: DealItem, history: PriceHistoryEntry[]): PriceAnalysis => {
  if (!history || history.length === 0) {
    return {
      isHistoricalLow: false,
      lowestPrice: deal.discountPrice,
      lowestPriceDate: new Date().toISOString().split('T')[0],
      averagePrice: deal.discountPrice,
      currentVsAverage: 0,
      trend: 'stable',
      recommendation: '目前無歷史價格資料可供分析。',
      savingsPotential: 0
    };
  }

  const prices = history.map(h => h.discountPrice);
  const lowestPrice = Math.min(...prices);
  const lowestPriceEntry = history.find(h => h.discountPrice === lowestPrice)!;
  const averagePrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);

  const currentPrice = deal.discountPrice;
  const isHistoricalLow = currentPrice === lowestPrice;
  const currentVsAverage = Math.round(((currentPrice - averagePrice) / averagePrice) * 100);

  // Determine trend based on recent prices (last 4 weeks)
  const recentPrices = prices.slice(-4);
  const recentAverage = recentPrices.reduce((a, b) => a + b, 0) / recentPrices.length;
  const olderPrices = prices.slice(0, -4);
  const olderAverage = olderPrices.length > 0
    ? olderPrices.reduce((a, b) => a + b, 0) / olderPrices.length
    : recentAverage;

  let trend: 'increasing' | 'decreasing' | 'stable';
  if (recentAverage > olderAverage * 1.05) {
    trend = 'increasing';
  } else if (recentAverage < olderAverage * 0.95) {
    trend = 'decreasing';
  } else {
    trend = 'stable';
  }

  // Generate recommendation
  let recommendation: string;
  const savingsPotential = currentPrice - lowestPrice;

  if (isHistoricalLow) {
    recommendation = `恭喜！這是 90 天內的最低價格，現在是最佳入手時機。根據我們的價格追蹤記錄，此商品在過去三個月的平均售價為 NT$${averagePrice.toLocaleString()}，目前價格比平均低 ${Math.abs(currentVsAverage)}%。建議立即購買，以免錯過這個難得的優惠機會。`;
  } else if (currentVsAverage <= -5) {
    recommendation = `目前價格 NT$${currentPrice.toLocaleString()} 低於 90 天平均價格 ${Math.abs(currentVsAverage)}%，是不錯的入手時機。雖然在 ${formatDate(lowestPriceEntry.date)} 曾出現過更低的價格 NT$${lowestPrice.toLocaleString()}，但以目前的折扣來看仍具有相當的吸引力。如果急需此商品，現在購買是合理的選擇。`;
  } else if (currentVsAverage >= 5) {
    recommendation = `建議先加入追蹤清單，稍後再購買。目前價格 NT$${currentPrice.toLocaleString()} 比 90 天平均價格高出 ${currentVsAverage}%。根據歷史紀錄，此商品曾在 ${formatDate(lowestPriceEntry.date)} 出現 NT$${lowestPrice.toLocaleString()} 的低價，若願意等待，有機會節省 NT$${savingsPotential.toLocaleString()}。通常在${getSeasonalHint(deal.category)}會有更好的折扣。`;
  } else {
    recommendation = `目前價格 NT$${currentPrice.toLocaleString()} 接近 90 天平均價格 NT$${averagePrice.toLocaleString()}，屬於正常價格區間。如果有需求可以考慮購買，或者可以再觀察一段時間。歷史最低價為 NT$${lowestPrice.toLocaleString()}（${formatDate(lowestPriceEntry.date)}），價差約 NT$${savingsPotential.toLocaleString()}。`;
  }

  return {
    isHistoricalLow,
    lowestPrice,
    lowestPriceDate: lowestPriceEntry.date,
    averagePrice,
    currentVsAverage,
    trend,
    recommendation,
    savingsPotential
  };
};

/**
 * Format date to readable Chinese format
 */
const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year} 年 ${month} 月 ${day} 日`;
};

/**
 * Get seasonal hint based on category
 */
const getSeasonalHint = (category: string): string => {
  switch (category) {
    case '美食':
      return '週末或月底';
    case '3C家電':
      return '雙11、週年慶或換季時';
    case '服飾':
      return '換季或年中/年末大促';
    case '旅遊':
      return '平日或淡季';
    case '美妝':
      return '母親節、週年慶或品牌日';
    case '生活':
      return '月底或特殊節日';
    default:
      return '促銷活動期間';
  }
};

/**
 * Calculate potential savings based on price history
 */
export const calculateSavingsPotential = (
  currentPrice: number,
  history: PriceHistoryEntry[]
): {
  maxSavings: number;
  avgSavings: number;
  bestDayOfWeek: string;
} => {
  if (!history || history.length === 0) {
    return { maxSavings: 0, avgSavings: 0, bestDayOfWeek: '未知' };
  }

  const prices = history.map(h => h.discountPrice);
  const minPrice = Math.min(...prices);
  const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;

  const maxSavings = currentPrice - minPrice;
  const avgSavings = currentPrice - avgPrice;

  // Analyze which day of week typically has best prices
  const dayPrices: { [key: string]: number[] } = {
    '週日': [], '週一': [], '週二': [], '週三': [], '週四': [], '週五': [], '週六': []
  };

  history.forEach(entry => {
    const date = new Date(entry.date);
    const dayIndex = date.getDay();
    const dayNames = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    dayPrices[dayNames[dayIndex]].push(entry.discountPrice);
  });

  let bestDay = '週末';
  let lowestAvg = Infinity;

  Object.entries(dayPrices).forEach(([day, pricesOnDay]) => {
    if (pricesOnDay.length > 0) {
      const avg = pricesOnDay.reduce((a, b) => a + b, 0) / pricesOnDay.length;
      if (avg < lowestAvg) {
        lowestAvg = avg;
        bestDay = day;
      }
    }
  });

  return {
    maxSavings: Math.round(maxSavings),
    avgSavings: Math.round(avgSavings),
    bestDayOfWeek: bestDay
  };
};
