import React, { useState } from "react";
import { Time } from "../time/Time";
import { CounterState } from "./CounterState";
import { observer } from "mobx-react-lite";

type Props = {
    hideLabels?: boolean;
};

export const Counter = observer(({ hideLabels = false }: Props) => {
    const [{ hours, minutes, seconds, microseconds }] = useState(() => new CounterState());
    return (
        <Time minutes={minutes} hours={hours} seconds={seconds} microseconds={microseconds} hideLabels={hideLabels} />
    );
});
