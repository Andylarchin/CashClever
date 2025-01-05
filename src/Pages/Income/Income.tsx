import { useState } from 'react';
import { Layout } from '../../Components/Layout/Layout';
import { IncomeOverview } from '../../Components/Income/IncomeOverview';
import { IncomeForm } from '../../Components/Income/IncomeFrom';
import { IncomeHistory } from '../../Components/Income/IncomeHistory';
import { useIncomeData } from '../../hooks/useIncomeData';

export function Income() {
  const [showForm, setShowForm] = useState(false);
  const { incomeData, addIncome } = useIncomeData();

  return (
    <Layout>
      <div className='p-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-2xl font-bold'>Income Management</h1>
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
            <button
              onClick={() => setShowForm(true)}
              className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'
            >
              + Add Income
            </button>
          </div>
        </div>

        <IncomeOverview data={incomeData} />

        {showForm && (
          <IncomeForm
            onClose={() => setShowForm(false)}
            onSave={(data) => {
              addIncome(data);
              setShowForm(false);
            }}
          />
        )}

        <IncomeHistory data={incomeData} />
      </div>
    </Layout>
  );
}
