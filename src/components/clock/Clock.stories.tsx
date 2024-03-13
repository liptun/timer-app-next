import type { Meta, StoryObj } from "@storybook/react";

import { Clock } from ".";

const meta: Meta<typeof Clock> = {
    title: "Components/Clock",
    component: Clock,
};
export default meta;

type Story = StoryObj<typeof Clock>;

export const Basic: Story = {
    args: {
        hideLabels: false,
    },
};
