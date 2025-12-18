export interface PriceHistoryEntry {
  date: string;
  price: number;
  discountPrice: number;
}

export interface DealItem {
  id: string;
  storeName: string;
  productName: string;
  couponCode: string | null;
  originalPrice: number;
  discountPrice: number;
  condition: string;
  category: DealCategory;
  description: string;
  validPeriod: string;
  priceHistory?: PriceHistoryEntry[];
}

export enum DealCategory {
  FOOD = '美食',
  ELECTRONICS = '3C家電',
  FASHION = '服飾',
  TRAVEL = '旅遊',
  BEAUTY = '美妝',
  LIFE = '生活',
  OTHER = '其他'
}

export interface CalculatedStats {
  savings: number;
  discountPercentage: number;
}

export interface ChartData {
  name: string;
  value: number;
  fill: string;
}