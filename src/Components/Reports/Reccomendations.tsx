import { Lightbulb, PiggyBank, TrendingUp } from 'lucide-react';

export function Recommendations() {
  return (
    <div className='mt-8'>
      <h2 className='text-lg font-semibold mb-6'>Recommendations</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <RecommendationCard
          icon={Lightbulb}
          title='Reduce Food Costs'
          description='Consider meal planning and cooking at home more often to reduce dining out expenses.'
        />
        <RecommendationCard
          icon={PiggyBank}
          title='Savings Opportunity'
          description='You could save $200 more by optimizing your subscription services.'
        />
        <RecommendationCard
          icon={TrendingUp}
          title='Investment Tip'
          description='Consider investing your increased savings in low-risk investment options.'
        />
      </div>
    </div>
  );
}

function RecommendationCard({ icon: Icon, title, description }: any) {
  return (
    <div className='bg-white rounded-lg p-6'>
      <Icon className='h-6 w-6 text-indigo-600 mb-4' />
      <h3 className='font-medium mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
}
