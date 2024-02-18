import styled from "styled-components";
import { Theme } from "@/utils/ThemeProvider/theme";

export const Digit = styled("span")<{ theme: Theme; narrow?: boolean }>`
    font-size: 4em;
    font-weight: 800;
    width: ${({ narrow = false }) => (narrow ? ".4em" : ".6em")};
    display: inline-flex;
    color: ${({ theme }) => theme.color.primary};
    justify-content: center;
    align-items: center;
    line-height: 1;
`;
