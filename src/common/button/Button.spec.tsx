import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { ThemeProvider } from "@/utils/ThemeProvider/ThemeProvider";

describe("Page", () => {
    it("Renders a <Button>", () => {
        render(
            <ThemeProvider>
                <Button>Button</Button>
            </ThemeProvider>
        );

        const button = screen.getByText("Button");

        expect(button).toBeInTheDocument();
    });
});
