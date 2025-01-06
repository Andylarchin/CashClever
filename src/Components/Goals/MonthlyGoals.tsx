import { Utensils, PiggyBank } from 'lucide-react';
import { GoalProgress } from './GoalsProgress';

export function MonthlyGoals() {
  const goals = [
    {
      id: 1,
      title: 'Reduce Food Expenses',
      icon: Utensils,
      current: 450,
      target: 350,
      progress: 78,
      date: 'March 2025',
      tip: 'Try meal prepping and buying groceries in bulk',
    },
    {
      id: 2,
      title: 'Monthly Savings',
      icon: PiggyBank,
      current: 800,
      target: 1000,
      progress: 80,
      date: 'March 2025',
      tip: 'Set up automatic transfers on payday',
    },
  ];

  return (
    <div className='bg-white rounded-lg p-6'>
      <h2 className='text-lg font-semibold mb-6'>Monthly Goals</h2>
      <div className='space-y-6'>
        {goals.map((goal) => (
          <GoalProgress
            key={goal.id}
            icon={goal.icon}
            title={goal.title}
            current={goal.current}
            target={goal.target}
            progress={goal.progress}
            date={goal.date}
            tip={goal.tip}
            color='orange'
          />
        ))}
      </div>
    </div>
  );
}
