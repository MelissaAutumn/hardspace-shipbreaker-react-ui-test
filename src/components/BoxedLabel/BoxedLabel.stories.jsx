import React from 'react';
import {BoxedLabel} from "./BoxedLabel";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Common/Boxed Label',
  component: BoxedLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BoxedLabel {...args} />;

export const DisposalMessage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DisposalMessage.args = {
  label: 'PROCESSOR',
  specialType: 'processor'
};

export const PressurizationMessage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PressurizationMessage.args = {
  label: 'UNPRESSURIZED',
};
