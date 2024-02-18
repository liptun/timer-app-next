import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from ".";
import styled from "styled-components";

const meta: Meta = {
    title: "Iconography",
};
export default meta;

const IconGrid = styled("div")`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 16px;
    grid-template-columns: repeat(8, 1fr);
`;

const IconWrapper = styled("div")`
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    padding: 8px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    svg {
        width: 32px;
        @media (min-width: 800px) {
            width: 72px;
        }
    }
    p {
        margin: 0;
        font-size: 12px;
    }
`;

export const Iconography: StoryObj = {
    render: () => (
        <IconGrid>
            {Object.entries(Icons).map(([title, Icon], index) => (
                <IconWrapper key={index}>
                    <Icon />
                    <p>{title}</p>
                </IconWrapper>
            ))}
        </IconGrid>
    ),
};
