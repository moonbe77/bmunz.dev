import React from 'react';
import Header from '../components/molecules/Header';

export default {
  title: 'Design System/Molecules/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {
  isDarkTheme: true,
};
