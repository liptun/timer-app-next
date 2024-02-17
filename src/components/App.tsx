"use client";
import styled from "styled-components";
import { TimerSVG } from "@/icons";
import { Timer } from "./Timer";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";
import { Button } from "@/common/button";

const AppWrapper = styled("div")`
    font-family: "Baloo Da 2", sans-serif;
`;

const TimerIcon = styled(TimerSVG)`
    fill: currentColor;
    width: 64px;
`;

export const App = () => {
    return (
        <ThemeProvider>
            <AppWrapper>
                <TimerIcon />
                <h1>Timę app</h1>
                <p>Count time like a pro</p>
                <Timer />
                <Button>Button</Button>
            </AppWrapper>
        </ThemeProvider>
    );
};
