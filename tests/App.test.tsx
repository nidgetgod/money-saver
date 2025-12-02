import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '@/App';
import { DealCategory } from '@/types';

const mockDeals = [
  {
    id: 'TEST001',
    storeName: '麥當勞',
    productName: '四盎司牛肉堡x2件',
    couponCode: 'P01',
    originalPrice: 184,
    discountPrice: 149,
    condition: '供應時段為上午10:30後',
    category: DealCategory.FOOD,
    description: '經典雙享$99起',
    validPeriod: '2025/11/5 - 2025/12/9',
  },
  {
    id: 'TEST002',
    storeName: '屈臣氏',
    productName: '面膜特惠',
    couponCode: null,
    originalPrice: 500,
    discountPrice: 250,
    condition: '會員限定',
    category: DealCategory.BEAUTY,
    description: '買一送一',
    validPeriod: '2025/12/1 - 2025/12/31',
  },
];

describe('App Integration Tests', () => {
  beforeEach(() => {
    vi.resetAllMocks();

    // Mock IntersectionObserver for lazy loading
    global.IntersectionObserver = class IntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback;
      }
      callback: IntersectionObserverCallback;
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      root = null;
      rootMargin = '';
      thresholds = [];
      takeRecords = () => [];
    } as any;

    // Mock fetch
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockDeals,
    });
  });

  it('renders the app successfully', async () => {
    render(<App />);

    // Should show loading initially
    expect(screen.getByText(/精選優惠/i)).toBeInTheDocument();
  });

  it('loads and displays deals', async () => {
    render(<App />);

    // Wait for deals to load by checking for product names (unique to deal cards)
    await waitFor(
      () => {
        expect(screen.getByText('四盎司牛肉堡x2件')).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    expect(screen.getAllByText('麥當勞')).toHaveLength(2); // Once in filter, once in card
    expect(screen.getByText('面膜特惠')).toBeInTheDocument();
  });

  it('displays error message when fetch fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    render(<App />);

    await waitFor(
      () => {
        expect(screen.getByText(/無法讀取優惠資料/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('shows result count after loading', async () => {
    render(<App />);

    await waitFor(
      () => {
        expect(screen.getByText(/共 2 筆結果/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
