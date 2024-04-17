import styled from "styled-components";
import { Theme } from "src/utils/ThemeProvider/theme";

export const Wrapper = styled("div")`
    position: relative;
    margin: 1.2em 0;
`;

export const Number = styled("div")``;

export const Label = styled("span")`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 0.8em;
    opacity: 0.5;
    font-weight: 700;
`;

export const Digit = styled("span")<{ theme: Theme; $narrow?: boolean }>`
    font-size: 2.8em;
    font-weight: 800;
    width: ${({ $narrow = false }): string => ($narrow ? ".4em" : ".6em")};
    display: inline-flex;
    color: ${({ theme }): string => theme.color.primary};
    justify-content: center;
    align-items: center;
    line-height: 1;
`;
