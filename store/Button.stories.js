import React from 'react';
// import Button from '../components/atoms/Button';

const Button = ({ children }, props) => {
  console.log(props);

  return <div>{children}</div>;
};

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    isDarkTheme: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args}>Button</Button>;
// Template.parameters = {
//   initialState: {
//     isDarkTheme: true,
//   },
// };

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  isDarkTheme: true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
