import React from 'react';
import {LevelInfo} from "./LevelInfo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI Common/LevelInfo',
  component: LevelInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {default: 'dark'}
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LevelInfo/>;

export const LevelInfoPanel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LevelInfoPanel.args = {
};