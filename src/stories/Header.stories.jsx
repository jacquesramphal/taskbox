import React from 'react';

import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {},
};
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/kKWVlPv6On9ob4h9mjvgFd/Figma-Tokens?node-id=2324%3A18866&t=P5pyfR1rs3VHYCUo-4",
  },
};
