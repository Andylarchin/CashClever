import { Wallet, CreditCard, PiggyBank } from 'lucide-react';

interface FinancialOverviewProps {
  totals: {
    income: number;
    expenses: number;
    savings: number;
    lastMonth: {
      income: number;
      expenses: number;
      savings: number;
    };
  };
}

export function FinancialOverview({ totals }: FinancialOverviewProps) {
  const calculateChange = (current: number, previous: number) => {
    const percentage = ((current - previous) / previous) * 100;
    return {
      value: Math.abs(Math.round(percentage)),
      isPositive: percentage > 0,
    };
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      <OverviewCard
        title='Total Income'
        icon={Wallet}
        amount={totals.income}
        lastMonth={totals.lastMonth.income}
        color='text-green-600'
      />
      <OverviewCard
        title='Total Expenses'
        icon={CreditCard}
        amount={totals.expenses}
        lastMonth={totals.lastMonth.expenses}
        color='text-rose-600'
      />
      <OverviewCard
        title='Net Savings'
        icon={PiggyBank}
        amount={totals.savings}
        lastMonth={totals.lastMonth.savings}
        color='text-indigo-600'
      />
    </div>
  );
}

function OverviewCard({ title, icon: Icon, amount, lastMonth, color }: any) {
  const change = ((amount - lastMonth) / lastMonth) * 100;

  return (
    <div className='bg-white p-6 rounded-xl shadow-sm'>
      <div className='flex items-center gap-2 mb-4'>
        <Icon className={`h-5 w-5 ${color}`} />
        <h3 className='text-gray-600'>{title}</h3>
      </div>
      <p className='text-2xl font-semibold mb-2'>${amount.toLocaleString()}</p>
      <div className='flex items-center gap-2'>
        <span className={change > 0 ? 'text-green-600' : 'text-rose-600'}>
          {change > 0 ? '↑' : '↓'} {Math.abs(Math.round(change))}%
        </span>
        <span className='text-gray-500'>
          vs. ${lastMonth.toLocaleString()} last month
        </span>
      </div>
    </div>
  );
}
