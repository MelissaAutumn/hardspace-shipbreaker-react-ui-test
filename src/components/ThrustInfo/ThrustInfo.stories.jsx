import React from 'react';
import {ThrustInfo} from "./ThrustInfo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Common/Thrust Info',
  component: ThrustInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ThrustInfo/>;

export const ThrustInfoPanel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThrustInfoPanel.args = {
};