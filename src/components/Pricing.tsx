import { FC } from 'react';
import { Check } from 'lucide-react';
import type { PricingPlan, PricingFeature } from '../config/siteConfig';
import CalendlyButton from './CalendlyButton';

const PricingCard: FC<PricingPlan> = ({ title, price, period, features }) => (
  <div className="card p-8 text-center hover-lift relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-red-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-3xl font-bold mb-2">{price}</p>
      <p className="mb-8 text-red-400">{period}</p>
      <ul className="text-left mb-8">
        {features.map((feature: PricingFeature, index: number) => (
          <li key={index} className="flex items-center mb-2">
            <Check className="text-red-400 mr-2" size={20} />
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
      <CalendlyButton />
    </div>
  </div>
);

interface PricingSectionProps {
  title: string;
  plans: PricingPlan[];
}

const PricingSection: FC<PricingSectionProps> = ({ title, plans }) => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {title.split(' ').map((word, index) =>
          index % 2 === 0 ? <span key={index} className="gradient-text">{word} </span> : word + ' '
        )}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;