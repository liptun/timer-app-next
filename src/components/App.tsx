"use client";
import React from "react";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";
import { Counter } from "./counter/Counter";
import { Logo } from "./logo/Logo";

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
