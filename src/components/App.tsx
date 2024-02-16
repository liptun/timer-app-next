"use client";
import styled, { createGlobalStyle } from "styled-components";
import { TimerSVG } from "@/icons";
import { Timer } from "./Timer";
import { ResetCss } from "./ResetCss";
import "@fontsource/baloo-da-2";
import "@fontsource/baloo-da-2/700.css";

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 16px;
    }

    body {
        font-weight: 700;
        font-size: 2em;
        background: #20232a;
        color: white;
        font-weight: 700;
        font-family: "Baloo Da 2";
    }
`;

const AppWrapper = styled("div")``;

const TimerIcon = styled(TimerSVG)`
    fill: currentColor;
    width: 64px;
`;

export const App = () => {
    return (
        <AppWrapper>
            <ResetCss />
            <GlobalStyles />
            <TimerIcon />
            <h1>Timę app</h1>
            <p>Count time like a pro</p>
            <Timer />
        </AppWrapper>
    );
};
