"use client";
import React from "react";
import styled from "styled-components";
import { TimerSVG } from "@/icons";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";
import { Counter } from "./counter/Counter";

const TimerIcon = styled(TimerSVG)`
    fill: currentColor;
    width: 64px;
`;

export const App = () => {
    return (
        <ThemeProvider>
            <TimerIcon />
            <h1>Timę app</h1>
            <p>Count time like a pro</p>
            <Counter />
        </ThemeProvider>
    );
};
