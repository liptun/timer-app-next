import { Theme } from "@/utils/ThemeProvider/theme";
import styled from "styled-components";

export const ButtonElement = styled("button")<{
    theme: Theme;
    size?: "large" | "normal" | "small";
}>`
    cursor: pointer;
    border-radius: 2em;
    padding: 0.3em 0.6em;
    background: ${({theme}) => theme.color.primary};
    color: ${({theme}) => theme.color.textLight};
`;
