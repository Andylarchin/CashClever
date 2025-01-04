import React from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='border-b border-gray-200 py-4'>
      <button
        className='flex justify-between items-center w-full text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-lg font-medium text-gray-900'>{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className='mt-2 text-gray-600 leading-relaxed'>{answer}</div>
      )}
    </div>
  );
}

export function FAQ() {
  const faqs = [
    {
      question: 'How do I connect my bank account?',
      answer:
        "Go to Settings > Bank Connections and click 'Add New Bank'. Select your bank from the list and follow the secure authentication process. Your transactions will start syncing automatically.",
    },
    {
      question: 'Is my financial data secure?',
      answer:
        'Yes! We use bank-level encryption to protect your data. We never store your bank credentials, and all connections are made through secure, encrypted channels.',
    },
    {
      question: 'Can I share access with my family?',
      answer:
        "Yes! You can invite family members through Settings > Family Sharing. They'll create their own accounts and get access to shared financial information while maintaining privacy for personal transactions.",
    },
    {
      question: 'How do I export my financial reports?',
      answer:
        'Navigate to Reports, select your desired date range and report type, then click the Export button. You can download reports in PDF, CSV, or Excel formats.',
    },
    {
      question: 'What if I need to cancel my subscription?',
      answer:
        'You can cancel anytime through Settings > Subscription. Your data will remain accessible until the end of your billing period.',
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            How can we help?
          </h2>
          <p className='text-xl text-gray-600'>
            Find answers to common questions about using CashClever
          </p>
        </div>
        <div className='max-w-3xl mx-auto'>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
