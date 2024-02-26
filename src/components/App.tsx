"use client";
import React from "react";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { Counter } from "./counter";
import { Logo } from "./logo";

export const App = (): JSX.Element => {
    return (
        <ThemeProvider>
            <Logo />
            <Counter />
            <Counter />
            <Counter />
        </ThemeProvider>
    );
};
