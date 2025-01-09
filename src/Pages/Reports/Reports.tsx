import { Layout } from '../../Components/Layout/Layout';
import { FinancialOverview } from '../../Components/Reports/FinancialOverview';
import { ExpenseBreakdown } from '../../Components/Reports/ExpenseBreakdown';
import { MonthlyInsights } from '../../Components/Reports/MonthlyInsight';
import { useIncomeData } from '../../hooks/useIncomeData';
import { useExpenseData } from '../../hooks/useExpenseData';
import { Recommendations } from '../../Components/Reports/Reccomendations';

export function Reports() {
  const { expenseData, categories } = useExpenseData();
  const { incomeData } = useIncomeData();

  const calculateTotals = () => {
    const totalIncome = incomeData.reduce((sum, item) => sum + item.amount, 0);
    const totalExpenses = expenseData.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    const netSavings = totalIncome - totalExpenses;

    return {
      income: totalIncome,
      expenses: totalExpenses,
      savings: netSavings,
      lastMonth: {
        income: totalIncome * 0.9,
        expenses: totalExpenses * 0.92,
        savings: totalIncome * 0.9 - totalExpenses * 0.92,
      },
    };
  };

  const totals = calculateTotals();

  return (
    <Layout>
      <div className='p-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-2xl font-bold'>Financial Reports</h1>
          <div className='flex gap-4 items-center'>
            <select className='rounded-lg border-gray-300 text-sm'>
              <option>2025</option>
              <option>2024</option>
            </select>
            <select className='rounded-lg border-gray-300 text-sm'>
              <option>March</option>
              <option>February</option>
              <option>January</option>
            </select>
          </div>
        </div>

        <FinancialOverview totals={totals} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          <ExpenseBreakdown categories={categories} />
          <MonthlyInsights expenses={expenseData} />
        </div>

        <Recommendations />
      </div>
    </Layout>
  );
}
