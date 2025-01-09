import { Pencil, Trash2 } from 'lucide-react';
import { ExpenseData } from '../../types/expense';
import { useExpenseData } from '../../hooks/useExpenseData';

interface ExpenseHistoryProps {
  data: ExpenseData[];
}

export function ExpenseHistory({ data }: ExpenseHistoryProps) {
  const { deleteExpense } = useExpenseData();

  return (
    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <h2 className='text-lg font-semibold mb-6'>Recent Expense History</h2>
      <table className='w-full'>
        <thead>
          <tr className='text-left text-sm text-gray-500'>
            <th className='pb-4'>CATEGORY</th>
            <th className='pb-4'>AMOUNT</th>
            <th className='pb-4'>DATE</th>
            <th className='pb-4'>PAYMENT METHOD</th>
            <th className='pb-4'>DESCRIPTION</th>
            <th className='pb-4'>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className='border-t border-gray-100'>
              <td className='py-4'>
                <div className='flex items-center gap-3'>
                  <span className='font-medium'>{item.category}</span>
                </div>
              </td>
              <td>${item.amount.toLocaleString()}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>{item.paymentMethod}</td>
              <td>{item.description}</td>
              <td>
                <div className='flex gap-2'>
                  <button className='p-1 text-gray-400 hover:text-gray-600'>
                    <Pencil className='h-4 w-4' />
                  </button>
                  <button
                    className='p-1 text-gray-400 hover:text-gray-600'
                    onClick={() => deleteExpense(item.id)}
                  >
                    <Trash2 className='h-4 w-4' />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
