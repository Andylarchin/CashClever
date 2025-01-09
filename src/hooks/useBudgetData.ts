import { useState, useEffect } from 'react';

interface BudgetCategory {
  name: string;
  current: number;
  limit: number;
  progress: number;
}

export function useBudgetData() {
  const [budgetData, setBudgetData] = useState<BudgetCategory[]>(() => {
    const savedData = localStorage.getItem('budgetData');
    return savedData
      ? JSON.parse(savedData)
      : [
          { name: 'Housing', current: 1500, limit: 1500, progress: 100 },
          { name: 'Food & Dining', current: 450, limit: 600, progress: 75 },
          { name: 'Transportation', current: 200, limit: 400, progress: 50 },
          { name: 'Entertainment', current: 120, limit: 200, progress: 60 },
        ];
  });

  useEffect(() => {
    localStorage.setItem('budgetData', JSON.stringify(budgetData));
  }, [budgetData]);

  return { budgetData, setBudgetData };
}
