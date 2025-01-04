import React from 'react';
import { PiggyBank } from 'lucide-react';

export function Navigation() {
  return (
    <nav className='container mx-auto px-6 py-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <PiggyBank className='h-8 w-8 text-black' />
          <span className='text-xl font-bold text-black'>CashClever</span>
        </div>
        <button className='px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors'>
          Sign In
        </button>
      </div>
    </nav>
  );
}
