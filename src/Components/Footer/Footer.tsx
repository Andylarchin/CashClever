import React from 'react';
import { PiggyBank, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <PiggyBank className='h-8 w-8 text-indigo-400' />
              <span className='text-xl font-bold text-white'>CashClever</span>
            </div>
            <p className='text-sm'>
              Making financial freedom accessible to everyone through smart
              budgeting tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-indigo-400 transition-colors'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400 transition-colors'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400 transition-colors'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400 transition-colors'>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Support</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-indigo-400 transition-colors'>
                  Help Center
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400 transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400 transition-colors'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-indigo-400 transition-colors'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Connect With Us</h3>
            <div className='flex space-x-4'>
              <a href='#' className='hover:text-indigo-400 transition-colors'>
                <Twitter className='h-5 w-5' />
              </a>
              <a href='#' className='hover:text-indigo-400 transition-colors'>
                <Facebook className='h-5 w-5' />
              </a>
              <a href='#' className='hover:text-indigo-400 transition-colors'>
                <Instagram className='h-5 w-5' />
              </a>
              <a href='#' className='hover:text-indigo-400 transition-colors'>
                <Mail className='h-5 w-5' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-sm text-center'>
          <p>
            &copy; {new Date().getFullYear()} CashClever. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
