import { ReactElement } from "react";
import { ResetCss } from "./Reset.style";
import {
    ThemeProvider as StyledTyemeProvider,
    createGlobalStyle,
} from "styled-components";
import { theme } from "./theme";
import type { Theme } from "./theme";
import "@fontsource/baloo-da-2";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
    html {
        font-size: 16px;
    }

    body {
        font-size: 1em;
        background: ${({ theme }) => theme.bodyBackground};
        color: white;
    }

    body, button, input {
        font-family: "Baloo Da 2", sans-serif;
    }
`;

type Props = {
    children?: ReactElement | ReactElement[];
};
export const ThemeProvider = ({ children }: Props) => (
    <StyledTyemeProvider theme={theme}>
        <ResetCss />
        <GlobalStyles theme={theme} />
        {children}
    </StyledTyemeProvider>
);
