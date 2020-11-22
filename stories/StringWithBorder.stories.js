import React from 'react';
import StringWithBorder from '../components/atoms/StringWithBorder';

export default {
  title: 'Design System/Atoms/StringWithBorder',
  component: StringWithBorder,
  argTypes: {
    string: { control: 'text' },
  },
};

const ListStory = (args) => <StringWithBorder string='Next.js' {...args} />;

export const StringBorder = ListStory.bind({});
