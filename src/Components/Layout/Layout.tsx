import React from 'react';
import {
  LayoutDashboard,
  Wallet,
  Target,
  BarChart2,
  Bell,
  Wallet2,
} from 'lucide-react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useUserProfile } from '../../hooks/UseUserProfile';

const SidebarLink = ({
  icon: Icon,
  label,
  to,
}: {
  icon: any;
  label: string;
  to: string;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
        isActive
          ? 'bg-indigo-50 text-indigo-600'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <Icon className='h-5 w-5' />
      <span>{label}</span>
    </Link>
  );
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { profile } = useUserProfile();

  const navigate = useNavigate();

  return (
    <div className='flex h-screen bg-gray-50'>
      <div className='w-64 border-r border-gray-200 bg-white'>
        <div className='p-4'>
          <div className='flex items-center space-x-2 mb-8'>
            <Wallet className='h-8 w-8 text-indigo-600' />
            <span className='text-xl font-bold'>CashClever</span>
          </div>
          <nav className='space-y-1'>
            <SidebarLink
              icon={LayoutDashboard}
              label='Dashboard'
              to='/dashboard'
            />
            <SidebarLink icon={Wallet} label='Income' to='/income' />
            <SidebarLink icon={Wallet2} label='Expenses' to='/expenses' />
            <SidebarLink icon={Target} label='Goals' to='/goals' />
            <SidebarLink icon={BarChart2} label='Reports' to='/reports' />
          </nav>
        </div>
      </div>

      <div className='flex-1 overflow-auto'>
        <div className='bg-white border-b border-gray-200 px-8 py-4'>
          <div className='flex justify-end items-center space-x-4'>
            <button className='p-2 text-gray-600 hover:text-gray-900'>
              <Bell className='h-5 w-5' />
            </button>
            <button className='p-2'>
              <img
                src={profile.avatar}
                alt='User'
                className='h-8 w-8 rounded-full'
                onClick={() => {
                  navigate('/profile');
                }}
              />
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
