import React from 'react';
import { Folder, LineChart, FileBox, Search, Link2, Globe } from 'lucide-react';

function FeatureIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className='w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto'>
      <Icon className='h-8 w-8 text-blue-600' />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className='text-center p-6'>
      <FeatureIcon icon={icon} />
      <h3 className='text-lg font-medium text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-600 leading-relaxed'>{description}</p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: Folder,
      title: 'Single Digital Repository',
      description: 'A single digital repository for myself and my family',
    },
    {
      icon: LineChart,
      title: 'Real-time View',
      description: 'Real-time view of expenditures and revenues at all times',
    },
    {
      icon: FileBox,
      title: 'Organized Documents',
      description:
        'Receipts, guarantee cards and policies logically structured in one location',
    },
    {
      icon: Search,
      title: 'Smart Search',
      description:
        'Never lose another record. No more endless searching without result',
    },
    {
      icon: Link2,
      title: 'Secure Bank Links',
      description: 'Secure link-up with multiple bank account numbers',
    },
    {
      icon: Globe,
      title: 'Global Banking',
      description: 'Including link-ups with foreign banks',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-rose-50'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            The benefits at a glance
          </h2>
        </div>
        <div className='grid md:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
