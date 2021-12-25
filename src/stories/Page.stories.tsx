import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page } from "./Page";

export default {
  title: "Example/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;
