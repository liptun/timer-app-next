import React from "react";
import styled from "styled-components";

type Props = {
    className?: string;
};

const SvgElement = styled("svg")`
    height: auto;
`;

export const EditSVG = ({ className }: Props): JSX.Element => (
    <SvgElement
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#000"
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
    >
        <path fill="fill" d="M5 21h-5v-2h5v2zm3.424-5.718l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534z" />
    </SvgElement>
);
