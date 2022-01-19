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

export const Respect = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Respect.args = {
  prompt: 'F' // To pay respects
};