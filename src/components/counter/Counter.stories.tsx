import type { Meta, StoryObj } from "@storybook/react";

import { Counter } from ".";

const meta: Meta<typeof Counter> = {
    title: "Components/Counter",
    component: Counter,
};
export default meta;

type Story = StoryObj<typeof Counter>;

export const Basic: Story = {
    args: {
        hideLabels: false,
    },
};
