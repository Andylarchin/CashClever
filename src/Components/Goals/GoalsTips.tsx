import { BarChart2, Clock, Shield } from 'lucide-react';

export function GoalTips() {
  const tips = [
    {
      icon: BarChart2,
      title: 'Track Progress Weekly',
      description:
        'Regular monitoring helps you stay motivated and make adjustments as needed.',
    },
    {
      icon: Clock,
      title: 'Set Realistic Deadlines',
      description:
        'Break down long-term goals into smaller, achievable milestones.',
    },
    {
      icon: Shield,
      title: 'Build Emergency Buffer',
      description:
        'Always maintain an emergency fund while working towards your goals.',
    },
  ];

  return (
    <div className='bg-white rounded-lg p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-lg font-semibold'>Goal Achievement Tips</h2>
        <button className='text-indigo-600 hover:text-indigo-700'>
          View All Tips
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {tips.map((tip, index) => (
          <div key={index} className='p-4 bg-gray-50 rounded-lg'>
            <tip.icon className='h-6 w-6 text-indigo-600 mb-3' />
            <h3 className='font-medium mb-2'>{tip.title}</h3>
            <p className='text-sm text-gray-600'>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
