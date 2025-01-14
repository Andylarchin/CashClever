import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useExpenseData } from './useExpenseData';

describe('useExpenseData', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with default expense data', () => {
    const { result } = renderHook(() => useExpenseData());
    expect(result.current.expenseData).toHaveLength(2);
  });

  it('should add a new expense', () => {
    const { result } = renderHook(() => useExpenseData());
    const newExpense = {
      id: '3',
      category: 'Utilities',
      amount: 100,
      date: '2025-03-20',
      paymentMethod: 'Credit Card',
      description: 'Electricity Bill',
    };

    act(() => {
      result.current.addExpense(newExpense);
    });

    expect(result.current.expenseData).toHaveLength(3);
    expect(result.current.expenseData[2]).toEqual(newExpense);
  });

  it('should delete an expense', () => {
    const { result } = renderHook(() => useExpenseData());

    act(() => {
      result.current.deleteExpense('1');
    });

    expect(result.current.expenseData).toHaveLength(1);
    expect(result.current.expenseData[0].id).toBe('2');
  });
});
