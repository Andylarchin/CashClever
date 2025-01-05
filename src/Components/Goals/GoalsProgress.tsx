import React from 'react';
import { LightbulbIcon } from 'lucide-react';

interface GoalProgressProps {
  icon: React.ElementType;
  title: string;
  current: number;
  target: number;
  progress: number;
  date: string;
  tip: string;
  color: 'orange' | 'indigo';
}

export function GoalProgress({
  icon: Icon,
  title,
  current,
  target,
  progress,
  date,
  tip,
  color,
}: GoalProgressProps) {
  const colorClasses = {
    orange: 'bg-orange-600',
    indigo: 'bg-indigo-600',
  };

  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Icon className='h-5 w-5 text-gray-600' />
          <div>
            <h3 className='font-medium'>{title}</h3>
            <p className='text-sm text-gray-500'>{date}</p>
          </div>
        </div>
        <span
          className={`text-sm ${
            color === 'orange' ? 'text-orange-600' : 'text-indigo-600'
          }`}
        >
          {progress}% Achieved
        </span>
      </div>

      <div>
        <div className='flex justify-between text-sm text-gray-600 mb-1'>
          <span>Current: ${current.toLocaleString()}</span>
          <span>Target: ${target.toLocaleString()}</span>
        </div>
        <div className='h-2 bg-gray-100 rounded-full'>
          <div
            className={`h-full rounded-full ${colorClasses[color]}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className='flex items-center gap-2 text-sm text-gray-500'>
        <LightbulbIcon className='h-4 w-4' />
        <span>Tip: {tip}</span>
      </div>
    </div>
  );
}
