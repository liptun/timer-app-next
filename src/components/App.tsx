"use client";
import React from "react";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";
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
