import { useState } from 'react';
import { Layout } from '../../Components/Layout/Layout';
import { ExpenseOverview } from '../../Components/Expenses/ExpensesOverview';
import { ExpenseForm } from '../../Components/Expenses/EXpenseForm';
import { ExpenseHistory } from '../../Components/Expenses/ExpenseHistory';
import { useExpenseData } from '../../hooks/useExpenseData';

export function Expenses() {
  const [showForm, setShowForm] = useState(false);
  const { expenseData, categories, addExpense } = useExpenseData();

  return (
    <Layout>
      <div className='p-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-2xl font-bold'>Expense Management</h1>
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
              className='px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700'
            >
              + Add Expense
            </button>
          </div>
        </div>

        <ExpenseOverview data={expenseData} />

        {showForm && (
          <ExpenseForm
            onClose={() => setShowForm(false)}
            onSave={(data) => {
              addExpense(data);
              setShowForm(false);
            }}
          />
        )}

        <ExpenseHistory data={expenseData} />
      </div>
    </Layout>
  );
}
