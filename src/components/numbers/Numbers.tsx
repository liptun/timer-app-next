import { Theme } from "@/utils/ThemeProvider/theme";
import React from "react";
import styled from "styled-components";

const Digit = styled("span")<{ theme: Theme; narrow?: boolean }>`
    font-size: 4em;
    font-weight: 800;
    width: ${({ narrow = false }) => (narrow ? ".4em" : ".6em")};
    display: inline-flex;
    color: ${({ theme }) => theme.color.primary};
    justify-content: center;
    align-items: center;
    line-height: 1;
`;

type Props = {
    hours: number;
    minutes: number;
    seconds: number;
    microseconds: number;
};

export const Numbers = () => {
    return (
        <>
            <Digit>2</Digit>
            <Digit>1</Digit>
            <Digit narrow>:</Digit>
            <Digit>3</Digit>
            <Digit>7</Digit>
            <Digit narrow>:</Digit>
            <Digit>6</Digit>
            <Digit>9</Digit>
            <Digit narrow>:</Digit>
            <Digit>7</Digit>
            <Digit>7</Digit>
            <Digit>7</Digit>
        </>
    );
};
