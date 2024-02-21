import React from "react";
import { Numbers } from "../numbers/Numbers";
import { Digit } from "../numbers/Numbers.style";
import { TimeWrapper } from "./Time.style";

type Props = {
    hours: number;
    minutes: number;
    seconds: number;
    microseconds?: number;
};

export const Time = ({ hours, minutes, seconds, microseconds }: Props): JSX.Element => (
    <TimeWrapper>
        <Numbers number={hours} digits={2} label="hours" />
        <Digit $narrow>:</Digit>
        <Numbers number={minutes} digits={2} label="minutes" />
        <Digit $narrow>:</Digit>
        <Numbers number={seconds} digits={2} label="seconds" />
        {microseconds !== undefined && (
            <>
                <Digit $narrow>:</Digit>
                <Numbers number={microseconds} digits={3} label="micro" />
            </>
        )}
    </TimeWrapper>
);
