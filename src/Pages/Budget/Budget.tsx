import {
  LayoutDashboard,
  Wallet,
  PiggyBank,
  BarChart2,
  Bell,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SidebarLink = ({
  icon: Icon,
  label,
  active = false,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) => (
  <Link
    to='#'
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
      active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
    }`}
  >
    <Icon className='h-5 w-5' />
    <span>{label}</span>
  </Link>
);

export default function Dashboard() {
  return (
    <div className='flex h-screen bg-gray-50'>
      {/* Sidebar */}
      <div className='w-64 border-r border-gray-200 bg-white'>
        <div className='p-4'>
          <div className='flex items-center space-x-2 mb-8'>
            <PiggyBank className='h-8 w-8 text-indigo-600' />
            <span className='text-xl font-bold'>BudgetPro</span>
          </div>
          <nav className='space-y-1'>
            <SidebarLink icon={LayoutDashboard} label='Dashboard' active />
            <SidebarLink icon={Wallet} label='Income' />
            <SidebarLink icon={PiggyBank} label='Expenses' />
            <SidebarLink icon={BarChart2} label='Reports' />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 overflow-auto'>
        {/* Top Navigation */}
        <div className='bg-white border-b border-gray-200 px-8 py-4'>
          <div className='flex justify-end items-center space-x-4'>
            <button className='p-2 text-gray-600 hover:text-gray-900'>
              <Bell className='h-5 w-5' />
            </button>
            <button className='p-2'>
              <img
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=32&h=32&q=80'
                alt='User'
                className='h-8 w-8 rounded-full'
              />
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className='p-8'>
          {/* Overview Cards */}
          <div className='grid grid-cols-4 gap-6 mb-8'>
            <OverviewCard
              title='Total Balance'
              amount='24,562.00'
              change={{ value: 12, text: 'from last month' }}
              type='positive'
            />
            <OverviewCard
              title='Monthly Income'
              amount='8,350.00'
              change={{ value: 8, text: 'from last month' }}
              type='positive'
            />
            <OverviewCard
              title='Monthly Expenses'
              amount='4,890.00'
              change={{ value: 15, text: 'from last month' }}
              type='negative'
            />
            <OverviewCard
              title='Savings Goal'
              amount='12,000.00'
              progress={65}
            />
          </div>

          <div className='grid grid-cols-2 gap-6'>
            {/* Recent Transactions */}
            <div className='bg-white rounded-lg p-6'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-lg font-semibold'>Recent Transactions</h2>
                <button className='text-indigo-600 hover:text-indigo-700'>
                  View All
                </button>
              </div>
              <TransactionsList />
            </div>

            {/* Budget Overview */}
            <div className='bg-white rounded-lg p-6'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-lg font-semibold'>Budget Overview</h2>
                <button className='text-indigo-600 hover:text-indigo-700'>
                  Manage
                </button>
              </div>
              <BudgetOverview />
            </div>
          </div>

          {/* Financial Goals */}
          <div className='mt-6'>
            <div className='bg-white rounded-lg p-6'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-lg font-semibold'>Financial Goals</h2>
                <button className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'>
                  + Add New Goal
                </button>
              </div>
              <div className='grid grid-cols-3 gap-6'>
                <GoalCard
                  title='House Down Payment'
                  icon={PiggyBank}
                  current={25000}
                  target={40000}
                  timeLeft='8 months left'
                  progress={62.5}
                />
                <GoalCard
                  title='Vacation Fund'
                  icon={PiggyBank}
                  current={3000}
                  target={5000}
                  timeLeft='3 months left'
                  progress={60}
                />
                <GoalCard
                  title='Emergency Fund'
                  icon={PiggyBank}
                  current={8000}
                  target={10000}
                  timeLeft='Ongoing'
                  progress={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewCard({ title, amount, change, type, progress }: any) {
  return (
    <div className='bg-white rounded-lg p-6'>
      <h3 className='text-sm text-gray-500 mb-2'>{title}</h3>
      <div className='flex items-end justify-between'>
        <div>
          <p className='text-2xl font-semibold'>${amount}</p>
          {change && (
            <p
              className={`text-sm ${
                type === 'positive' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {type === 'positive' ? '↑' : '↓'} {change.value}% {change.text}
            </p>
          )}
        </div>
      </div>
      {progress !== undefined && (
        <div className='mt-4 bg-gray-200 rounded-full h-2'>
          <div
            className='bg-indigo-600 h-2 rounded-full'
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}

function TransactionsList() {
  const transactions = [
    {
      type: 'income',
      name: 'Salary Deposit',
      amount: 4250.0,
      date: 'Mar 1, 2025',
    },
    {
      type: 'expense',
      name: 'Rent Payment',
      amount: 1500.0,
      date: 'Mar 1, 2025',
    },
    {
      type: 'expense',
      name: 'Grocery Shopping',
      amount: 245.5,
      date: 'Feb 28, 2025',
    },
  ];

  return (
    <div className='space-y-4'>
      {transactions.map((transaction, index) => (
        <div key={index} className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <div
              className={`p-2 rounded-lg ${
                transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
              }`}
            >
              {transaction.type === 'income' ? '↓' : '↑'}
            </div>
            <div>
              <p className='font-medium'>{transaction.name}</p>
              <p className='text-sm text-gray-500'>{transaction.date}</p>
            </div>
          </div>
          <p
            className={`font-medium ${
              transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {transaction.type === 'income' ? '+' : '-'}$
            {transaction.amount.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}

function BudgetOverview() {
  const categories = [
    { name: 'Housing', current: 1500, limit: 1500, progress: 100 },
    { name: 'Food & Dining', current: 450, limit: 600, progress: 75 },
    { name: 'Transportation', current: 200, limit: 400, progress: 50 },
    { name: 'Entertainment', current: 120, limit: 200, progress: 60 },
  ];

  return (
    <div className='space-y-4'>
      {categories.map((category, index) => (
        <div key={index} className='space-y-2'>
          <div className='flex justify-between'>
            <span className='font-medium'>{category.name}</span>
            <span className='text-gray-500'>
              ${category.current} / ${category.limit}
            </span>
          </div>
          <div className='bg-gray-200 rounded-full h-2'>
            <div
              className='bg-indigo-600 h-2 rounded-full'
              style={{ width: `${category.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function GoalCard({
  title,
  icon: Icon,
  current,
  target,
  timeLeft,
  progress,
}: any) {
  return (
    <div className='bg-gray-50 rounded-lg p-6'>
      <div className='flex items-center space-x-3 mb-4'>
        <Icon className='h-5 w-5 text-indigo-600' />
        <h3 className='font-medium'>{title}</h3>
      </div>
      <div className='mb-4'>
        <div className='flex justify-between text-sm text-gray-500 mb-1'>
          <span>${current.toLocaleString()}</span>
          <span>${target.toLocaleString()}</span>
        </div>
        <div className='bg-gray-200 rounded-full h-2'>
          <div
            className='bg-indigo-600 h-2 rounded-full'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className='text-sm text-gray-500'>{timeLeft}</p>
    </div>
  );
}
