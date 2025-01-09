import { Home, Utensils, Car } from 'lucide-react';
import { ExpenseCategory } from '../../types/expense';

interface ExpenseBreakdownProps {
  categories: ExpenseCategory[];
}

export function ExpenseBreakdown({ categories }: ExpenseBreakdownProps) {
  const getCategoryIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'housing':
        return Home;
      case 'food':
        return Utensils;
      case 'transportation':
        return Car;
      default:
        return Home;
    }
  };

  return (
    <div className='bg-white rounded-lg p-6'>
      <h2 className='text-lg font-semibold mb-6'>Expense Breakdown</h2>
      <div className='space-y-4'>
        {categories.map((category) => {
          const Icon = getCategoryIcon(category.name);
          return (
            <div key={category.name} className='space-y-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Icon className='h-5 w-5 text-gray-600' />
                  <span className='font-medium'>{category.name}</span>
                </div>
                <span className='text-gray-600'>
                  ${category.amount.toLocaleString()}
                </span>
              </div>
              <div className='h-2 bg-gray-100 rounded-full'>
                <div
                  className={`h-full rounded-full ${category.color}`}
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
