import React from 'react';
import Title from '../components/atoms/Title';

export default {
  title: 'Design System/Atoms/Title',
  component: Title,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Title {...args}>{args.text}</Title>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'I am a primary Title',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  text: 'I am a secondary title',
};

export const Large = Template.bind({});
Large.args = {
  primary: false,
  text: 'I am a large size title',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  primary: false,
  text: 'I am a medium size title',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  primary: false,
  text: 'I am a small size title',
  size: 'small',
};
