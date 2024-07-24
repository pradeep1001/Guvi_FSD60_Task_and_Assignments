import React from 'react';
import './PriceCard.css'; // You'll need to create this CSS file for styling

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2 className="card-title">{title}</h2>
      <h1 className="price">${price}/month</h1>
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index} className={feature.included ? 'included' : 'excluded'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button className="action-button">BUTTON</button>
    </div>
  );
};

const PriceComparison = () => {
  const plans = [
    {
      title: 'FREE',
      price: 0,
      features: [
        { name: 'Single User', included: true },
        { name: '50GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: false },
        { name: 'Dedicated Phone Support', included: false },
        { name: 'Free Subdomain', included: false },
        { name: 'Monthly Status Reports', included: false },
      ],
    },
    {
      title: 'PLUS',
      price: 9,
      features: [
        { name: '5 Users', included: true },
        { name: '50GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: true },
        { name: 'Dedicated Phone Support', included: true },
        { name: 'Free Subdomain', included: true },
        { name: 'Monthly Status Reports', included: false },
      ],
    },
    {
      title: 'PRO',
      price: 49,
      features: [
        { name: 'Unlimited Users', included: true },
        { name: '50GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: true },
        { name: 'Dedicated Phone Support', included: true },
        { name: 'Free Subdomain', included: true },
        { name: 'Monthly Status Reports', included: true },
      ],
    },
  ];

  return (
    <div className="price-comparison">
      {plans.map((plan, index) => (
        <PriceCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default PriceComparison;