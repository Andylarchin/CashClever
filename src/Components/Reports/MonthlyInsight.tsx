import { AlertTriangle, TrendingUp } from 'lucide-react';
import { ExpenseData } from '../../types/expense';

interface MonthlyInsightsProps {
  expenses: ExpenseData[];
}

export function MonthlyInsights({ expenses }: MonthlyInsightsProps) {
  return (
    <div className='bg-white rounded-lg p-6'>
      <h2 className='text-lg font-semibold mb-6'>Monthly Insights</h2>

      <div className='space-y-4'>
        <div className='bg-yellow-50 border border-yellow-100 rounded-lg p-4'>
          <div className='flex items-center gap-2 text-yellow-800 mb-2'>
            <AlertTriangle className='h-5 w-5' />
            <h3 className='font-medium'>Spending Alert</h3>
          </div>
          <p className='text-yellow-700'>
            Food expenses increased by 15% compared to last month
          </p>
        </div>

        <div className='bg-green-50 border border-green-100 rounded-lg p-4'>
          <div className='flex items-center gap-2 text-green-800 mb-2'>
            <TrendingUp className='h-5 w-5' />
            <h3 className='font-medium'>Positive Trend</h3>
          </div>
          <p className='text-green-700'>
            Successfully reduced entertainment expenses by 20%
          </p>
        </div>
      </div>
    </div>
  );
}
