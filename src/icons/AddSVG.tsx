import React from "react";
import styled from "styled-components";

type Props = {
    className?: string;
};

const SvgElement = styled("svg")`
    height: auto;
`;

export const AddSVG = ({ className }: Props): JSX.Element => (
    <SvgElement
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#000"
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
    >
        <path fill="fill" d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z" />
    </SvgElement>
);
