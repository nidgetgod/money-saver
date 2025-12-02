import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilterBar } from '@/components/FilterBar';

describe('FilterBar', () => {
  const mockProps = {
    categories: ['美食', '3C家電', '服飾'],
    stores: ['麥當勞', '屈臣氏', 'Costco'],
    selectedCategory: 'All',
    selectedStore: 'All',
    selectedDiscount: 0,
    onCategoryChange: vi.fn(),
    onStoreChange: vi.fn(),
    onDiscountChange: vi.fn(),
    onReset: vi.fn(),
    resultCount: 42,
  };

  it('renders all filter options', () => {
    render(<FilterBar {...mockProps} />);

    expect(screen.getByText('分類')).toBeInTheDocument();
    expect(screen.getByText('店家')).toBeInTheDocument();
    expect(screen.getByText('折扣力度')).toBeInTheDocument();
  });

  it('displays result count', () => {
    render(<FilterBar {...mockProps} />);

    expect(screen.getByText('共 42 筆結果')).toBeInTheDocument();
  });

  it('calls onCategoryChange when category is selected', () => {
    render(<FilterBar {...mockProps} />);

    const categorySelect = screen.getByDisplayValue('全部類別');
    fireEvent.change(categorySelect, { target: { value: '美食' } });

    expect(mockProps.onCategoryChange).toHaveBeenCalledWith('美食');
  });

  it('calls onStoreChange when store is selected', () => {
    render(<FilterBar {...mockProps} />);

    const storeSelect = screen.getByDisplayValue('全部店家');
    fireEvent.change(storeSelect, { target: { value: '麥當勞' } });

    expect(mockProps.onStoreChange).toHaveBeenCalledWith('麥當勞');
  });

  it('calls onDiscountChange when discount is selected', () => {
    render(<FilterBar {...mockProps} />);

    const discountSelect = screen.getByDisplayValue('不限折扣');
    fireEvent.change(discountSelect, { target: { value: '30' } });

    expect(mockProps.onDiscountChange).toHaveBeenCalledWith(30);
  });

  it('calls onReset when reset button is clicked', () => {
    render(<FilterBar {...mockProps} />);

    const resetButton = screen.getByText('重置');
    fireEvent.click(resetButton);

    expect(mockProps.onReset).toHaveBeenCalled();
  });

  it('renders all category options', () => {
    render(<FilterBar {...mockProps} />);

    expect(screen.getByText('全部類別')).toBeInTheDocument();
    mockProps.categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('renders all store options', () => {
    render(<FilterBar {...mockProps} />);

    expect(screen.getByText('全部店家')).toBeInTheDocument();
    mockProps.stores.forEach(store => {
      expect(screen.getByText(store)).toBeInTheDocument();
    });
  });

  it('renders discount filter options', () => {
    render(<FilterBar {...mockProps} />);

    expect(screen.getByText('不限折扣')).toBeInTheDocument();
    expect(screen.getByText('省 10% 以上')).toBeInTheDocument();
    expect(screen.getByText('省 30% 以上')).toBeInTheDocument();
    expect(screen.getByText('省 50% 以上')).toBeInTheDocument();
    expect(screen.getByText('省 70% 以上')).toBeInTheDocument();
  });

  it('shows selected values correctly', () => {
    const propsWithSelection = {
      ...mockProps,
      selectedCategory: '美食',
      selectedStore: '麥當勞',
      selectedDiscount: 30,
    };

    render(<FilterBar {...propsWithSelection} />);

    const categorySelect = screen.getByDisplayValue('美食') as HTMLSelectElement;
    const storeSelect = screen.getByDisplayValue('麥當勞') as HTMLSelectElement;
    const discountSelect = screen.getByDisplayValue('省 30% 以上') as HTMLSelectElement;

    expect(categorySelect.value).toBe('美食');
    expect(storeSelect.value).toBe('麥當勞');
    expect(discountSelect.value).toBe('30');
  });
});
