import React from "react";
import styled from "styled-components";

type Props = {
    className?: string;
};

const SvgElement = styled("svg")`
    height: auto;
`;

export const RemoveSVG = ({ className }: Props) => (
    <SvgElement
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#000"
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
    >
        <path
            fill="fill"
            d="m22 6.002c0-.552-.448-1-1-1h-12.628c-.437 0-.853.191-1.138.523-1.078 1.256-3.811 4.439-4.993 5.816-.16.187-.241.418-.241.65s.08.464.24.651c1.181 1.38 3.915 4.575 4.994 5.836.285.333.701.524 1.14.524h12.626c.552 0 1-.447 1-1 0-2.577 0-9.423 0-12zm-7.991 4.928 1.71-1.711c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .194-.073.385-.219.532l-1.711 1.71 1.728 1.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.531-.219l-1.728-1.728-1.728 1.728c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l1.728-1.728-1.788-1.787c-.146-.147-.219-.338-.219-.531 0-.426.346-.75.751-.75.192 0 .384.073.53.219z"
            fillRule="nonzero"
        />
    </SvgElement>
);
