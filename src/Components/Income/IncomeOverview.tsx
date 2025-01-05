import { Briefcase, Code, Wallet } from 'lucide-react';
import { IncomeCard } from './IncomeCard';
import { IncomeData } from '../../types/income';

interface IncomeOverviewProps {
  data: IncomeData[];
}

export function IncomeOverview({ data }: IncomeOverviewProps) {
  const calculateTotal = (source: string) => {
    return data
      .filter((item) => item.source === source)
      .reduce((sum, item) => sum + item.amount, 0);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
      <IncomeCard
        icon={Briefcase}
        title='Primary Job'
        amount={calculateTotal('Primary Job')}
        subtitle='Monthly Salary'
      />
      <IncomeCard
        icon={Code}
        title='Freelancing'
        amount={calculateTotal('Freelancing')}
        subtitle='Variable Income'
      />
      <IncomeCard
        icon={Wallet}
        title='Other Sources'
        amount={calculateTotal('Other Sources')}
        subtitle='Investments & Others'
      />
    </div>
  );
}
