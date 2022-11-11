// @ts-ignore
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,

  argTypes: {
    children: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "Submit",
      description: "This property sets the display value of the Card",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Submit" },
      },
      control: {
        type: "text",
      },
    },
    style: { control: "object" },
    headerStyle: { control: "object" },
    cardTitle: { control: "text" },
    className: { control: "text" },
    cardIcon: { control: "text" },
    showBorder: {
      control: { type: "boolean" },
      description: "This property sets the border of the Card",
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div className="main-div space-between">
    {" "}
    <Card {...args} />
  </div>
);
export const Card_demo = Template.bind({});

Card_demo.args = {
  cardTitle: "Add Staff",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies",
  showBorder: true,
  cardIcon:
    "data:image/jpeg;base64,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",
};
