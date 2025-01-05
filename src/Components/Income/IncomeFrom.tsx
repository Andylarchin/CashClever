import React, { useState } from 'react';
import { IncomeData } from '../../types/income';

interface IncomeFormProps {
  onClose: () => void;
  onSave: (data: IncomeData) => void;
}

export function IncomeForm({ onClose, onSave }: IncomeFormProps) {
  const [formData, setFormData] = useState<IncomeData>({
    id: Date.now().toString(),
    source: 'Primary Job',
    amount: 0,
    date: new Date().toISOString().split('T')[0],
    frequency: 'One-time',
    notes: '',
    status: 'Pending',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-sm mb-8'>
      <h2 className='text-lg font-semibold mb-6'>Add New Income</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-6 mb-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Income Source
            </label>
            <select
              className='w-full rounded-lg border-gray-300'
              value={formData.source}
              onChange={(e) =>
                setFormData({ ...formData, source: e.target.value })
              }
            >
              <option>Primary Job</option>
              <option>Freelancing</option>
              <option>Other Sources</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Amount
            </label>
            <div className='relative'>
              <span className='absolute left-3 top-2'>$</span>
              <input
                type='number'
                className='w-full rounded-lg border-gray-300 pl-7'
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: Number(e.target.value) })
                }
              />
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Date
            </label>
            <input
              type='date'
              className='w-full rounded-lg border-gray-300'
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Frequency
            </label>
            <select
              className='w-full rounded-lg border-gray-300'
              value={formData.frequency}
              onChange={(e) =>
                setFormData({ ...formData, frequency: e.target.value })
              }
            >
              <option>One-time</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Notes
          </label>
          <textarea
            className='w-full rounded-lg border-gray-300'
            rows={3}
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            placeholder='Add any additional notes...'
          />
        </div>
        <div className='flex justify-end gap-4'>
          <button
            type='button'
            onClick={onClose}
            className='px-4 py-2 text-gray-700 hover:text-gray-900'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'
          >
            Save Income
          </button>
        </div>
      </form>
    </div>
  );
}
