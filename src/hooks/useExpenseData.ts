import { useState, useEffect } from 'react';
import { ExpenseData, ExpenseCategory } from '../types/expense';

export function useExpenseData() {
  const [expenseData, setExpenseData] = useState<ExpenseData[]>(() => {
    const savedData = localStorage.getItem('expenseData');
    return savedData
      ? JSON.parse(savedData)
      : [
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
        ];
  });

  const [categories, setCategories] = useState<ExpenseCategory[]>(() => {
    const savedCategories = localStorage.getItem('expenseCategories');
    return savedCategories
      ? JSON.parse(savedCategories)
      : [
          {
            name: 'Housing',
            percentage: 35,
            amount: 1750,
            color: 'bg-blue-600',
          },
          { name: 'Food', percentage: 20, amount: 1000, color: 'bg-green-600' },
          {
            name: 'Transportation',
            percentage: 15,
            amount: 750,
            color: 'bg-yellow-600',
          },
          {
            name: 'Entertainment',
            percentage: 15,
            amount: 750,
            color: 'bg-purple-600',
          },
          { name: 'Others', percentage: 15, amount: 750, color: 'bg-red-600' },
        ];
  });

  useEffect(() => {
    localStorage.setItem('expenseData', JSON.stringify(expenseData));
    localStorage.setItem('expenseCategories', JSON.stringify(categories));
  }, [expenseData, categories]);

  const addExpense = (newExpense: ExpenseData) => {
    setExpenseData([...expenseData, newExpense]);
    updateCategories(newExpense);
  };

  const deleteExpense = (id: string) => {
    const updatedData = expenseData.filter((expense) => expense.id !== id);
    setExpenseData(updatedData);
  };

  const updateCategories = (expense: ExpenseData) => {
    const updatedCategories = categories.map((cat) => {
      if (cat.name === expense.category) {
        return { ...cat, amount: cat.amount + expense.amount };
      }
      return cat;
    });
    setCategories(updatedCategories);
  };

  return { expenseData, categories, addExpense, deleteExpense };
}
