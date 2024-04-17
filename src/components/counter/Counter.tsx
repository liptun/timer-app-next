import React, { useState } from "react";
import { Time } from "src/components/time";
import { CounterState } from "./CounterState";
import { observer } from "mobx-react-lite";

type Props = {
    hideLabels?: boolean;
};

export const Counter = observer(({ hideLabels = false }: Props) => {
    const [{ years, months, days, hours, minutes, seconds, microseconds }] = useState(() => new CounterState());
    return (
        <Time
            years={years}
            months={months}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            microseconds={microseconds}
            hideLabels={hideLabels}
        />
    );
});
