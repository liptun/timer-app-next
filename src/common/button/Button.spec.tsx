import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { ThemeProvider } from "src/utils/ThemeProvider";
import { describe, it, expect, vi } from "vitest";

describe("Button", () => {
    it("render label", () => {
        render(
            <ThemeProvider>
                <Button>Button</Button>
            </ThemeProvider>
        );
        const button = screen.getByText("Button");
        expect(button.tagName).toBe("BUTTON");
    });

    it("onClickHandle call", () => {
        const callbackFn = vi.fn();
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
        const callbackFn = vi.fn();

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
