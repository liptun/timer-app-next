"use client";
import React from "react";
import { ThemeProvider } from "src/utils/ThemeProvider/ThemeProvider";
import { Logo } from "./logo";
import { Clock } from "./clock";

export const App = (): JSX.Element => {
    return (
        <ThemeProvider>
            <Logo />
            <Clock />
        </ThemeProvider>
    );
};
