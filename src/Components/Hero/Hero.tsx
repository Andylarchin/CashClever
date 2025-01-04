import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className='container mx-auto px-6 py-16 md:py-24'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-5xl md:text-7xl font-bold text-gray-900 mb-4'>
          Administer your finances without fuss
        </h1>
        <p className='text-xl text-gray-600 mb-12'>
          In charge of your own administration.
        </p>
        <div className='flex justify-center gap-4'>
          <button className='px-8 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition-colors'>
            Download CashClever
          </button>
          <Link
            to='/dashboard'
            className='px-8 py-3 bg-white text-black border-2 border-black rounded-lg text-lg hover:bg-gray-50 transition-colors'
          >
            Try WEB Version
          </Link>
        </div>
      </div>
      <div className='mt-16 relative'>
        <div className='bg-gradient-to-r from-rose-200 to-rose-300 rounded-3xl p-8 md:p-12'>
          <img
            src='https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=2000&q=80'
            alt='CashClever Dashboard'
            className='rounded-2xl shadow-2xl w-full'
          />
        </div>
      </div>
    </section>
  );
}
