import React from 'react';

function TestimonialCard({
  quote,
  author,
  role,
  image,
}: {
  quote: string;
  author: string;
  role: string;
  image: string;
}) {
  return (
    <div className='bg-white p-6 rounded-xl shadow-sm'>
      <p className='text-gray-600 italic mb-4'>"{quote}"</p>
      <div className='flex items-center'>
        <img src={image} alt={author} className='w-12 h-12 rounded-full mr-4' />
        <div>
          <h4 className='font-semibold text-gray-900'>{author}</h4>
          <p className='text-gray-500 text-sm'>{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className='bg-gray-50 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Trusted by Thousands
          </h2>
          <p className='text-gray-600'>
            Join over 50,000+ users who have taken control of their finances
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          <TestimonialCard
            quote='CashClever helped me save for my dream vacation in just 6 months!'
            author='Sarah M.'
            role='Freelancer'
            image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150'
          />
          <TestimonialCard
            quote="The best budgeting app I've ever used. Simple yet powerful."
            author='Michael R.'
            role='Small Business Owner'
            image='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150'
          />
          <TestimonialCard
            quote='Finally got my finances under control thanks to CashClever!'
            author='Emily T.'
            role='Teacher'
            image='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150'
          />
        </div>
      </div>
    </section>
  );
}
