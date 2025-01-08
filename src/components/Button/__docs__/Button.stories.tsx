import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
    title: "Button",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Active: Story = {
    args: {
        text: "Button",
        disabled: false,
        color: "#FFF",
        backgroundColor: "#FF5655",
        size: "small",
        onClick: () => console.log("Button"),
        fontSize: "15px",
        borderRadius: "10px",
        fontWeight: 700,
    },
};
export const Disabled: Story = {
    args: {
        text: "Button",
        disabled: true,
        color: "#FFF",
        backgroundColor: "#ecafaf",
        size: "small",
        onClick: () => console.log("Button"),
        fontSize: "15px",
        borderRadius: "10px",
        fontWeight: 700,
    },
};
