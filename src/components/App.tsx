"use client";
import React from "react";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";
import { Logo } from "./logo";
import { Clock } from "./clock";
import { Numbers } from "./numbers";

export const App = (): JSX.Element => {
    return (
        <ThemeProvider>
            <Logo />
            <Clock />
            <Numbers number={"12"} digits={1} />
        </ThemeProvider>
    );
};
