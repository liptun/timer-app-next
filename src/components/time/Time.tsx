import React from "react";
import { Numbers } from "src/components/numbers";
import { Digit } from "src/components/numbers/Numbers.style";
import { TimeWrapper } from "./Time.style";

type Props = {
    years?: number;
    months?: number;
    days?: number;
    hours: number;
    minutes: number;
    seconds: number;
    microseconds?: number;
    hideLabels?: boolean;
};

export const Time = ({
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    microseconds,
    hideLabels = false,
}: Props): JSX.Element => (
    <TimeWrapper>
        {years !== undefined && (
            <>
                <Numbers number={years} digits={2} label={hideLabels ? undefined : "years"} />
                <Digit $narrow>:</Digit>
            </>
        )}
        {months !== undefined && (
            <>
                <Numbers number={months} digits={2} label={hideLabels ? undefined : "months"} />
                <Digit $narrow>:</Digit>
            </>
        )}
        {days !== undefined && (
            <>
                <Numbers number={days} digits={2} label={hideLabels ? undefined : "days"} />
                <Digit $narrow>:</Digit>
            </>
        )}
        <Numbers number={hours} digits={2} label={hideLabels ? undefined : "hours"} />
        <Digit $narrow>:</Digit>
        <Numbers number={minutes} digits={2} label={hideLabels ? undefined : "minutes"} />
        <Digit $narrow>:</Digit>
        <Numbers number={seconds} digits={2} label={hideLabels ? undefined : "seconds"} />
        {microseconds !== undefined && (
            <>
                <Digit $narrow>:</Digit>
                <Numbers number={microseconds} digits={3} label={hideLabels ? undefined : "micro"} />
            </>
        )}
    </TimeWrapper>
);
