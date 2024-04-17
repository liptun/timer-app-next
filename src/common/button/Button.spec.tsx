import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { ThemeProvider } from "src/utils/ThemeProvider";

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

    it("should not click", () => {
        const callbackFn = jest.fn();

        render(
            <ThemeProvider>
                <Button onClickHandle={callbackFn} disabled>
                    Button
                </Button>
            </ThemeProvider>
        );
        const button = screen.getByText("Button");

        expect(callbackFn).toHaveBeenCalledTimes(0);
        button.click();
        expect(callbackFn).toHaveBeenCalledTimes(0);
    });
});
