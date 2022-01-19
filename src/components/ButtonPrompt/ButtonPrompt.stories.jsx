import React from 'react';
import {ButtonPrompt} from "./ButtonPrompt";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Common/Button Prompt',
  component: ButtonPrompt,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonPrompt {...args} />;

export const LeftLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LeftLabel.args = {
  label: 'PAY RESPECT',
  prompt: 'F'
};

export const RightLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RightLabel.args = {
  label: 'MODE SWAP',
  prompt: 'V',
  labelPosition: 'right',
};


export const NoLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoLabel.args = {
  prompt: '?',
  hasLabel: false,
};

export const NoBorder = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoBorder.args = {
  label: 'GET EXCITED',
  prompt: '!',
  hasBorder: false,
  hasLabel: true,
};