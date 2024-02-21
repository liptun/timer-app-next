import styled from "styled-components";
import { TimerSVG } from "@/icons";
import { Theme } from "@/utils/ThemeProvider/theme";

export const LogoWrapper = styled("div")`
    display: flex;
    justify-content: center;
    padding: 1.2em;
`;

export const Container = styled("div")`
    display: flex;
    align-items: center;
    gap: 1em;
`;

export const TimerIcon = styled(TimerSVG)`
    fill: currentColor;
    width: 2.8em;
    font-size: 1.4em;
`;

export const Text = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 0.4em;
`;

export const Header = styled("h1")<{ theme: Theme }>`
    color: ${({ theme }): string => theme.color.primary};
    font-size: 2.4em;
    font-weight: 800;
`;

export const SubTitle = styled("p")`
    font-weight: 700;
    opacity: 0.8;
    letter-spacing: 0.05em;
`;
