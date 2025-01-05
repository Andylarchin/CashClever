import { Pencil, Trash2 } from 'lucide-react';
import { IncomeData } from '../../types/income';

interface IncomeHistoryProps {
  data: IncomeData[];
}

export function IncomeHistory({ data }: IncomeHistoryProps) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <h2 className='text-lg font-semibold mb-6'>Recent Income History</h2>
      <table className='w-full'>
        <thead>
          <tr className='text-left text-sm text-gray-500'>
            <th className='pb-4'>SOURCE</th>
            <th className='pb-4'>AMOUNT</th>
            <th className='pb-4'>DATE</th>
            <th className='pb-4'>STATUS</th>
            <th className='pb-4'>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className='border-t border-gray-100'>
              <td className='py-4'>
                <div className='flex items-center gap-3'>
                  <span className='font-medium'>{item.source}</span>
                </div>
              </td>
              <td>${item.amount.toLocaleString()}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    item.status === 'Received'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>
                <div className='flex gap-2'>
                  <button className='p-1 text-gray-400 hover:text-gray-600'>
                    <Pencil className='h-4 w-4' />
                  </button>
                  <button className='p-1 text-gray-400 hover:text-gray-600'>
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
