import styled from "styled-components";
import { LogoSVG } from "src/icons";
import { Theme } from "src/utils/ThemeProvider/theme";

export const LogoWrapper = styled("div")`
    display: flex;
    justify-content: center;
    padding: 1.2em;
`;

export const LogoIcon = styled(LogoSVG)<{ theme: Theme }>`
    fill: ${({ theme }): string => theme.color.textLight};
    width: 200px;
`;
