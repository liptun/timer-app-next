import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";

describe("Button", () => {
    it("with label", () => {
        render(
            <ThemeProvider>
                <Button>Button</Button>
            </ThemeProvider>
        );
        const button = screen.getByText("Button");
        expect(button).toBeInTheDocument();
    });
});
