import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
    title: "Common/Button",
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Primary",
    },
};

export const Disabled: Story = {
    args: {
        children: "Disabled",
        disabled: true,
    },
};
