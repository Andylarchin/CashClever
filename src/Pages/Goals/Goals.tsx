import { Layout } from '../../Components/Layout/Layout';
import { MonthlyGoals } from '../../Components/Goals/MonthlyGoals';
import { YearlyGoals } from '../../Components/Goals/YearlyGoals';
import { GoalTips } from '../../Components/Goals/GoalsTips';

export function Goals() {
  return (
    <Layout>
      <div className='p-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-2xl font-bold'>Financial Goals</h1>
          <button className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2'>
            + Create New Goal
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          <MonthlyGoals />
          <YearlyGoals />
        </div>

        <GoalTips />
      </div>
    </Layout>
  );
}
