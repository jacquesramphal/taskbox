import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/kKWVlPv6On9ob4h9mjvgFd/Figma-Tokens?node-id=7187%3A109796&t=zLv9r7fT3Vym5ZiZ-4",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/kKWVlPv6On9ob4h9mjvgFd/Figma-Tokens?node-id=7187%3A110294&t=zLv9r7fT3Vym5ZiZ-4",
  },
};


export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
