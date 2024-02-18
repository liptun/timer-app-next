"use client";
import React from "react";
import styled from "styled-components";
import { TimerSVG } from "@/icons";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";
import { Time } from "./time/Time";

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
            <Time hours={12} minutes={37} seconds={4} />
        </ThemeProvider>
    );
};
