import React from 'react';

interface GoalCardProps {
  title: string;
  icon: React.ElementType;
  current: number;
  target: number;
  timeLeft: string;
  progress: number;
}

export function GoalCard({
  title,
  current,
  target,
  timeLeft,
  progress,
}: GoalCardProps) {
  return (
    <div className='bg-gray-50 rounded-lg p-6'>
      <div className='flex items-center space-x-3 mb-4'>
        <h3 className='font-medium'>{title}</h3>
      </div>
      <div className='mb-4'>
        <div className='flex justify-between text-sm text-gray-500 mb-1'>
          <span>${current.toLocaleString()}</span>
          <span>${target.toLocaleString()}</span>
        </div>
        <div className='bg-gray-200 rounded-full h-2'>
          <div
            className='bg-indigo-600 h-2 rounded-full'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className='text-sm text-gray-500'>{timeLeft}</p>
    </div>
  );
}
