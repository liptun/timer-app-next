import React, { ReactElement } from "react";
import { ResetCss } from "./Reset.style";
import {
    ThemeProvider as StyledThemeProvider,
    createGlobalStyle,
} from "styled-components";
import { theme, Theme } from "./theme";
import "@fontsource/baloo-da-2";
import "@fontsource/baloo-da-2/700.css";
import "@fontsource/baloo-da-2/800.css";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
    html {
        font-size: 16px;
    }

    body {
        font-size: 1em;
        background: ${({ theme }): string => theme.background.primary};
        color: white;
    }

    body, button, input {
        font-family: "Baloo Da 2", sans-serif;
    }
`;

type Props = {
    children?: ReactElement | ReactElement[];
};

export const ThemeProvider = ({ children }: Props): JSX.Element => (
    <StyledThemeProvider theme={theme}>
        <ResetCss />
        <GlobalStyles theme={theme} />
        {children}
    </StyledThemeProvider>
);
