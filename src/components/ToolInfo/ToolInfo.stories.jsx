import React from 'react';
import {ToolInfo} from "./ToolInfo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Common/Thrust Info',
  component: ToolInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ToolInfo/>;

export const ToolInfoPanel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ToolInfoPanel.args = {
};