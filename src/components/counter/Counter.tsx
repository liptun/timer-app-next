import React, { useState } from "react";
import { Time } from "../time/Time";
import { CounterState } from "./CounterState";
import { observer } from "mobx-react-lite";

export const Counter = observer(() => {
    const [state] = useState(() => new CounterState());
    return (
        <Time
            hours={state.hours}
            minutes={state.minutes}
            seconds={state.seconds}
            microseconds={state.microseconds}
        />
    );
});
