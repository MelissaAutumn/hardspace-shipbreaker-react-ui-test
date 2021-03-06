import React from 'react';

import { Bar } from './Bar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Common/Bar',
  component: Bar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Bar {...args} />;

export const LeftHandLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LeftHandLabel.args = {
  currentValue: 50,
  label: 'HLTH',
};

export const RightHandLabel = Template.bind({});
RightHandLabel.args = {
  currentValue: 100,
  label: 'FUEL',
  labelPosition: 'right'
};

export const Pips = Template.bind({});
Pips.args = {
  currentValue: 75,
  label: 'SUIT',
  barType: 'pips',
};
