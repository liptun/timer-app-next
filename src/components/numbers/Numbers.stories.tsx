import type { Meta, StoryObj } from "@storybook/react";

import { Numbers } from "./Numbers";

const meta: Meta<typeof Numbers> = {
    title: "Components/Numbers",
    component: Numbers,
};
export default meta;

type Story = StoryObj<typeof Numbers>;

export const Basic: Story = {
    args: {
        number: 12,
        digits: 2,
    },
};
