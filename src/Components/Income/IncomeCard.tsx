import React from 'react';

interface IncomeCardProps {
  icon: React.ElementType;
  title: string;
  amount: number;
  subtitle: string;
}

export function IncomeCard({
  icon: Icon,
  title,
  amount,
  subtitle,
}: IncomeCardProps) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <div className='flex items-center gap-3 mb-4'>
        <Icon className='h-5 w-5 text-gray-600' />
        <h3 className='font-medium'>{title}</h3>
      </div>
      <p className='text-2xl font-semibold mb-1'>${amount.toLocaleString()}</p>
      <p className='text-sm text-gray-500'>{subtitle}</p>
    </div>
  );
}
