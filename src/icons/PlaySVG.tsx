import React from "react";
import styled from "styled-components";

type Props = {
    className?: string;
};

const SvgElement = styled("svg")`
    height: auto;
`;

export const PlaySVG = ({ className }: Props): JSX.Element => (
    <SvgElement
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#000"
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
    >
        <path
            fill="fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9272 10.8641L4.64401 1.2501C3.67801 0.773442 2.57144 0.822921 2.57144 2.53402V21.4652C2.57144 23.0295 3.75858 23.2761 4.64401 22.7492L20.9272 13.1351C21.5974 12.5077 21.5974 11.4916 20.9272 10.8641Z"
        />
    </SvgElement>
);
