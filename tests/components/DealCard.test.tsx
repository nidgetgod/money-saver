import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { DealCard } from '@/components/DealCard';
import { DealItem, DealCategory } from '@/types';

const mockDeal: DealItem = {
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
};

describe('DealCard', () => {
  beforeEach(() => {
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('renders deal information correctly', () => {
    render(<DealCard deal={mockDeal} />);

    expect(screen.getByText('測試商店')).toBeInTheDocument();
    expect(screen.getByText('測試產品')).toBeInTheDocument();
    expect(screen.getByText('測試描述')).toBeInTheDocument();
    expect(screen.getByText('測試條件')).toBeInTheDocument();
    expect(screen.getByText(DealCategory.FOOD)).toBeInTheDocument();
  });

  it('calculates and displays discount percentage correctly', () => {
    render(<DealCard deal={mockDeal} />);

    // 20% discount: (100-80)/100 = 20%
    expect(screen.getByText('-20%')).toBeInTheDocument();
  });

  it('displays prices correctly', () => {
    render(<DealCard deal={mockDeal} />);

    expect(screen.getByText('NT$100')).toBeInTheDocument();
    expect(screen.getByText('NT$80')).toBeInTheDocument();
  });

  it('displays valid period', () => {
    render(<DealCard deal={mockDeal} />);

    expect(screen.getByText(/期限: 2025\/01\/01 - 2025\/12\/31/)).toBeInTheDocument();
  });

  it('copies coupon code to clipboard when button clicked', async () => {
    render(<DealCard deal={mockDeal} />);

    const copyButton = screen.getByText('TEST123').closest('button');
    expect(copyButton).toBeInTheDocument();

    fireEvent.click(copyButton!);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('TEST123');

    await waitFor(() => {
      expect(screen.getByText('已複製代碼')).toBeInTheDocument();
    });
  });

  it('shows "已複製代碼" message temporarily after copying', async () => {
    vi.useFakeTimers();
    render(<DealCard deal={mockDeal} />);

    const copyButton = screen.getByText('TEST123').closest('button');
    fireEvent.click(copyButton!);

    // Check that message appears immediately
    expect(screen.getByText('已複製代碼')).toBeInTheDocument();

    // Fast-forward 2 seconds using act
    await act(async () => {
      await vi.advanceTimersByTimeAsync(2000);
    });

    // Check that message has disappeared
    expect(screen.queryByText('已複製代碼')).not.toBeInTheDocument();
    expect(screen.getByText('TEST123')).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('displays "無需優惠碼" when couponCode is null', () => {
    const dealWithoutCoupon = { ...mockDeal, couponCode: null };
    render(<DealCard deal={dealWithoutCoupon} />);

    expect(screen.getByText('無需優惠碼')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('handles large price values correctly', () => {
    const expensiveDeal = {
      ...mockDeal,
      originalPrice: 10000,
      discountPrice: 8500,
    };
    render(<DealCard deal={expensiveDeal} />);

    expect(screen.getByText('NT$10,000')).toBeInTheDocument();
    expect(screen.getByText('NT$8,500')).toBeInTheDocument();
    expect(screen.getByText('-15%')).toBeInTheDocument();
  });
});
