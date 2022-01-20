import React from 'react';

import { Title } from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export const Services = () => {
  const [serviceBlock] = React.useState([
    {
      icon: <FaCocktail />,
      title: 'Free cocktails',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, culpa.',
    },
    {
      icon: <FaHiking />,
      title: 'Endless Hiking',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, culpa.',
    },
    {
      icon: <FaShuttleVan />,
      title: 'Free Shuttle',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, culpa.',
    },
    {
      icon: <FaBeer />,
      title: 'Strongest Beer',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, culpa.',
    },
  ]);
  return (
    <section className="services">
      <div className="container">
        <Title title="services" />
        <div className="services-center">
          {serviceBlock.map((item) => {
            return (
              <div key={item.title} className="services-block">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
