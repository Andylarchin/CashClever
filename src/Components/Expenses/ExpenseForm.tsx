import React, { useState } from 'react';
import { ExpenseData } from '../../types/expense';

interface ExpenseFormProps {
  onClose: () => void;
  onSave: (data: ExpenseData) => void;
}

export function ExpenseForm({ onClose, onSave }: ExpenseFormProps) {
  const [formData, setFormData] = useState<ExpenseData>({
    id: Date.now().toString(),
    category: 'Housing',
    amount: 0,
    date: new Date().toISOString().split('T')[0],
    paymentMethod: 'Bank Transfer',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-sm mb-8'>
      <h2 className='text-lg font-semibold mb-6'>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-6 mb-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Category
            </label>
            <select
              className='w-full rounded-lg border-gray-300'
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option>Housing</option>
              <option>Food</option>
              <option>Transportation</option>
              <option>Entertainment</option>
              <option>Others</option>
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
              Payment Method
            </label>
            <select
              className='w-full rounded-lg border-gray-300'
              value={formData.paymentMethod}
              onChange={(e) =>
                setFormData({ ...formData, paymentMethod: e.target.value })
              }
            >
              <option>Bank Transfer</option>
              <option>Credit Card</option>
              <option>Cash</option>
            </select>
          </div>
        </div>
        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Description
          </label>
          <textarea
            className='w-full rounded-lg border-gray-300'
            rows={3}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
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
            className='px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700'
          >
            Save Expense
          </button>
        </div>
      </form>
    </div>
  );
}
