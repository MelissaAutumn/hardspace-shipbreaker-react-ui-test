import React from 'react';
import {SalvageInfo} from "./SalvageInfo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Common/Panel',
  component: SalvageInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SalvageInfo/>;

export const SalvageInfoPanel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SalvageInfoPanel.args = {
};