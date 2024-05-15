"use client";
import React from "react";
import { ThemeProvider } from "src/utils/ThemeProvider/ThemeProvider";
import { Logo } from "./logo";
import { Clock } from "./clock";

const x = false;
if (x === false) {
    console.log("x");
}

export const App = (): JSX.Element => {
    return (
        <ThemeProvider>
            <Logo />
            <Clock />
        </ThemeProvider>
    );
};
