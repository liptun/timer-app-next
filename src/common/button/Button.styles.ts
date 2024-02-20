import { Theme } from "@/utils/ThemeProvider/theme";
import styled, { RuleSet, css } from "styled-components";

const disabledButtonCss = css`
    pointer-events: none;
    cursor: not-allowed;
    filter: grayscale(1);
`;

export const ButtonElement = styled("button")<{
    theme: Theme;
    size?: "large" | "normal" | "small";
    disabled?: boolean;
}>`
    cursor: pointer;
    border-radius: 2em;
    padding: 0.3em 0.6em;
    background: ${({ theme }): string => theme.color.primary};
    color: ${({ theme }): string => theme.color.textLight};
    ${({ disabled }): RuleSet | null => (disabled === true ? disabledButtonCss : null)}
`;
