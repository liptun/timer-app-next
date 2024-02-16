import React from "react";
import styled from "styled-components";

type Props = {
    className?: string
}

const SvgElement = styled('svg')`
    height: auto;
`;

export const TimerSVG = ({className}: Props) => (
    <SvgElement
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#000"
        className={className}
    >
        <path fill="fill" d="m9 24h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z" />
        <path fill="fill" d="m7 20h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" />
        <path fill="fill" d="m5 16h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z" />
        <path fill="fill" d="m13 23.955a1 1 0 0 1 -.089-2 10 10 0 1 0 -10.87-10.865 1 1 0 0 1 -1.992-.18 12 12 0 0 1 23.951 1.09 11.934 11.934 0 0 1 -10.91 11.951c-.03.003-.061.004-.09.004z" />
        <path fill="fill" d="m12 6a1 1 0 0 0 -1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414l-2.707-2.707v-4.586a1 1 0 0 0 -1-1z" />
    </SvgElement>
);

