import React from "react";
import { numberToString } from "./Numbers.utils";
import { Digit } from "./Numbers.style";

type Props = {
    number: number;
    digits: number;
};

export const Numbers = ({ number, digits = 2 }: Props) => (
    <>
        {[...numberToString(number, digits)].map((digit, index) => (
            <Digit key={index}>{digit}</Digit>
        ))}
    </>
);
