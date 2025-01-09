import { Home, Utensils, Car } from 'lucide-react';
import { ExpenseCard } from './ExpenseCard';
import { ExpenseData } from '../../types/expense';

interface ExpenseOverviewProps {
  data: ExpenseData[];
}

export function ExpenseOverview({ data }: ExpenseOverviewProps) {
  const calculateTotal = (category: string) => {
    return data
      .filter((item) => item.category === category)
      .reduce((sum, item) => sum + item.amount, 0);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
      <ExpenseCard
        icon={Home}
        title='Housing'
        amount={calculateTotal('Housing')}
        subtitle='Monthly Rent'
      />
      <ExpenseCard
        icon={Utensils}
        title='Food'
        amount={calculateTotal('Food')}
        subtitle='Groceries & Dining'
      />
      <ExpenseCard
        icon={Car}
        title='Transportation'
        amount={calculateTotal('Transportation')}
        subtitle='Fuel & Maintenance'
      />
    </div>
  );
}
