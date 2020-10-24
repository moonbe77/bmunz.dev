import React from 'react';
import PortfolioCard from '../components/molecules/PortfolioCard';

export default {
  title: 'Design System/Molecules/Project',
  component: PortfolioCard,
};

const Template = (args) => <PortfolioCard {...args.project} />;

export const Card = Template.bind({});
Card.args = {
  project: {
    id: 1,
    title: 'Latitud Náutica',
    liveUrl: 'https://www.latitudnautica.com.ar/',
    imgName: 'mockup_ln.png',
    description: 'e-commerce',
    technologies: [
      'React',
      'Next.js',
      'Server Side Rendering',
      'Styled-Components',
      'Express.js',
      'MySQL',
    ],
  },
};
