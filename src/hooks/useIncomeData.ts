import { useState, useEffect } from 'react';
import { IncomeData } from '../types/income';

export function useIncomeData() {
  const [incomeData, setIncomeData] = useState<IncomeData[]>(() => {
    const savedData = localStorage.getItem('incomeData');
    return savedData
      ? JSON.parse(savedData)
      : [
          {
            id: '1',
            source: 'Primary Job',
            amount: 4500,
            date: '2025-03-01',
            frequency: 'Monthly',
            status: 'Received',
            notes: '',
          },
          {
            id: '2',
            source: 'Freelancing',
            amount: 1200,
            date: '2025-03-15',
            frequency: 'One-time',
            status: 'Pending',
            notes: '',
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem('incomeData', JSON.stringify(incomeData));
  }, [incomeData]);

  const addIncome = (newIncome: IncomeData) => {
    setIncomeData([...incomeData, newIncome]);
  };

  return { incomeData, addIncome };
}
