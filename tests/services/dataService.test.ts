import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchDeals } from '@/services/dataService';
import { DealCategory } from '@/types';

describe('dataService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('fetchDeals', () => {
    it('fetches and returns deals successfully', async () => {
      const mockDeals = [
        {
          id: 'TEST001',
          storeName: '測試商店',
          productName: '測試產品',
          couponCode: 'TEST123',
          originalPrice: 100,
          discountPrice: 80,
          condition: '測試條件',
          category: DealCategory.FOOD,
          description: '測試描述',
          validPeriod: '2025/01/01 - 2025/12/31',
        },
      ];

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockDeals,
      });

      const deals = await fetchDeals();

      expect(fetch).toHaveBeenCalledWith('./deals.json');
      expect(deals).toEqual(mockDeals);
      expect(deals).toHaveLength(1);
    });

    it('throws error when fetch fails', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        statusText: 'Not Found',
      });

      await expect(fetchDeals()).rejects.toThrow('Failed to fetch deals: Not Found');
    });

    it('throws error when network request fails', async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

      await expect(fetchDeals()).rejects.toThrow('Network error');
    });

    it('logs error when fetch fails', async () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      global.fetch = vi.fn().mockRejectedValue(new Error('Test error'));

      try {
        await fetchDeals();
      } catch (error) {
        // Expected to throw
      }

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error loading deals:',
        expect.any(Error)
      );

      consoleErrorSpy.mockRestore();
    });

    it('handles empty deals array', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [],
      });

      const deals = await fetchDeals();

      expect(deals).toEqual([]);
      expect(deals).toHaveLength(0);
    });

    it('handles malformed JSON gracefully', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => {
          throw new Error('Invalid JSON');
        },
      });

      await expect(fetchDeals()).rejects.toThrow('Invalid JSON');
    });
  });
});
