import { useState, useEffect } from 'react';
import { PiggyBank } from 'lucide-react';

interface Goal {
  id: number;
  title: string;
  icon: React.ElementType;
  current: number;
  target: number;
  progress: number;
  timeLeft: string;
}

export function useGoalsData() {
  const [goalsData, setGoalsData] = useState<Goal[]>(() => {
    const savedData = localStorage.getItem('goalsData');
    return savedData
      ? JSON.parse(savedData)
      : [
          {
            id: 1,
            title: 'House Down Payment',
            icon: PiggyBank,
            current: 25000,
            target: 40000,
            progress: 62.5,
            timeLeft: '8 months left',
          },
          {
            id: 2,
            title: 'Vacation Fund',
            icon: PiggyBank,
            current: 3000,
            target: 5000,
            progress: 60,
            timeLeft: '3 months left',
          },
          {
            id: 3,
            title: 'Emergency Fund',
            icon: PiggyBank,
            current: 8000,
            target: 10000,
            progress: 80,
            timeLeft: 'Ongoing',
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem('goalsData', JSON.stringify(goalsData));
  }, [goalsData]);

  return { goalsData, setGoalsData };
}
