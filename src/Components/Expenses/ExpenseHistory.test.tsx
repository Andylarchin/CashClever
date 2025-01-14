import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExpenseHistory } from './ExpenseHistory';
import { useExpenseData } from '../../hooks/useExpenseData';

jest.mock('../../hooks/useExpenseData');

const mockUseExpenseData = useExpenseData as jest.MockedFunction<
  typeof useExpenseData
>;

describe('ExpenseHistory', () => {
  beforeEach(() => {
    mockUseExpenseData.mockReturnValue({
      expenseData: [
        {
          id: '1',
          category: 'Housing',
          amount: 1750,
          date: '2025-03-01',
          paymentMethod: 'Bank Transfer',
          description: 'Monthly Rent',
        },
        {
          id: '2',
          category: 'Food',
          amount: 250,
          date: '2025-03-15',
          paymentMethod: 'Credit Card',
          description: 'Grocery Shopping',
        },
      ],
      deleteExpense: jest.fn(),
    });
  });

  it('should render expense history', () => {
    render(<ExpenseHistory data={mockUseExpenseData().expenseData} />);

    expect(screen.getByText('Housing')).toBeInTheDocument();
    expect(screen.getByText('Food')).toBeInTheDocument();
  });

  it('should call deleteExpense when delete button is clicked', () => {
    const { deleteExpense } = mockUseExpenseData();
    render(<ExpenseHistory data={mockUseExpenseData().expenseData} />);

    fireEvent.click(screen.getAllByRole('button')[1]);

    expect(deleteExpense).toHaveBeenCalledWith('1');
  });
});
