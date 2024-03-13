import type { Meta, StoryObj } from "@storybook/react";

import { Time } from "./Time";

const meta: Meta<typeof Time> = {
    title: "Components/Time",
    component: Time,
};
export default meta;

type Story = StoryObj<typeof Time>;

export const Basic: Story = {
    args: {
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
};

export const WithMicroseconds: Story = {
    args: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        microseconds: 0,
    },
};
