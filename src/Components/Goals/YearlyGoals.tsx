import React from 'react';
import { Home, GraduationCap } from 'lucide-react';
import { GoalProgress } from './GoalsProgress';

export function YearlyGoals() {
  const goals = [
    {
      id: 1,
      title: 'House Down Payment',
      icon: Home,
      current: 25000,
      target: 40000,
      progress: 62.5,
      timeLeft: '8 months left',
      tip: 'Consider a side hustle for extra income',
    },
    {
      id: 2,
      title: 'Educational Fund',
      icon: GraduationCap,
      current: 5000,
      target: 12000,
      progress: 41.6,
      timeLeft: 'Ongoing',
      tip: 'Look for educational tax benefits',
    },
  ];

  return (
    <div className='bg-white rounded-lg p-6'>
      <h2 className='text-lg font-semibold mb-6'>Yearly Goals 2025</h2>
      <div className='space-y-6'>
        {goals.map((goal) => (
          <GoalProgress
            key={goal.id}
            icon={goal.icon}
            title={goal.title}
            current={goal.current}
            target={goal.target}
            progress={goal.progress}
            date={goal.timeLeft}
            tip={goal.tip}
            color='indigo'
          />
        ))}
      </div>
    </div>
  );
}
