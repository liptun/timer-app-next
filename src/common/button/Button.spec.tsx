import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";

describe("Button", () => {
    it("render label", () => {
        render(
            <ThemeProvider>
                <Button>Button</Button>
            </ThemeProvider>
        );
        const button = screen.getByText("Button");
        expect(button).toBeInTheDocument();
    });

    it("onClickHandle call", () => {
        const callbackFn = jest.fn();

        render(
            <ThemeProvider>
                <Button onClickHandle={callbackFn}>Button</Button>
            </ThemeProvider>
        );
        const button = screen.getByText("Button");

        expect(callbackFn).toHaveBeenCalledTimes(0);
        button.click();
        expect(callbackFn).toHaveBeenCalledTimes(1);
    });
});
