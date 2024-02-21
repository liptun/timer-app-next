import React from "react";
import { numberToString } from "./Numbers.utils";
import { Wrapper, Digit, Number, Label } from "./Numbers.style";

type Props = {
    number: number;
    digits: number;
    label?: string;
};

export const Numbers = ({ number, digits = 2, label }: Props): JSX.Element => (
    <Wrapper>
        <Number>
            {[...numberToString(number, digits)].map((digit, index) => (
                <Digit key={index}>{digit}</Digit>
            ))}
        </Number>
        {label !== undefined && <Label>{label}</Label>}
    </Wrapper>
);
