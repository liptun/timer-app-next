"use client";
import React from "react";
import styled from "styled-components";
import { TimerSVG } from "@/icons";
import { Timer } from "./Timer";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";
import { Button } from "@/common/button";
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
            <Timer />
            <Button>Button</Button>
            <Time hours={0} minutes={0} seconds={0} />
        </ThemeProvider>
    );
};
