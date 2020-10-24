import React from 'react';
import BoxShadowed from '../components/atoms/BoxShadowed';
import GifLogo from '../components/atoms/GifLogo';

export default {
  title: 'Design System/Atoms/BoxShadowed',
  component: BoxShadowed,
};

const Template = (args) => (
  <BoxShadowed {...args}>
    {args.children}
  </BoxShadowed>
);

export const Small = Template.bind({});
Small.args = {
  padSize: 'small',
  children: <GifLogo />,
};

export const Medium = Template.bind({});
Medium.args = {
  padSize: 'medium',
  children: <GifLogo />,
};

export const Large = Template.bind({});
Large.args = {
  padSize: 'larges',
  children: <GifLogo />,
};
