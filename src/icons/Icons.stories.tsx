import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from ".";

const meta: Meta = {
    title: "Iconography",
};
export default meta;

export const Primary: StoryObj = {
    render: () => (
        <>
            {Object.entries(Icons).map(([title, Icon]) => (
                <>
                    <Icon />
                    {title}
                </>
            ))}
        </>
    ),
};
