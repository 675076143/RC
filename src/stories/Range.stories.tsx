import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Range from "../components/range";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "RC/Range",
  component: Range,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Range>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Range> = (args) => <Range {...args} />;

export const Default = Template.bind({});
