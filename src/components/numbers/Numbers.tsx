import { Theme } from "@/utils/ThemeProvider/theme";
import React from "react";
import styled from "styled-components";
import { numberToString } from "./Numbers.utils";

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

export const Numbers = ({ hours, minutes, seconds, microseconds }: Props) => {
    return (
        <>
            {[...numberToString(hours, 2)].map((digit, index) => (
                <Digit key={index}>{digit}</Digit>
            ))}
            <Digit narrow>:</Digit>
            {[...numberToString(minutes, 2)].map((digit, index) => (
                <Digit key={index}>{digit}</Digit>
            ))}
            <Digit narrow>:</Digit>
            {[...numberToString(seconds, 2)].map((digit, index) => (
                <Digit key={index}>{digit}</Digit>
            ))}
            <Digit narrow>:</Digit>
            {[...numberToString(microseconds, 3)].map((digit, index) => (
                <Digit key={index}>{digit}</Digit>
            ))}
        </>
    );
};
