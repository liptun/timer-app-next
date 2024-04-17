import React, { useState } from "react";
import { Time } from "src/components/time";

import { ClockState } from "./ClockState";
import { observer } from "mobx-react-lite";

type Props = {
    hideLabels?: boolean;
};

export const Clock = observer(({ hideLabels = false }: Props) => {
    const [{ hours, minutes, seconds, microseconds }] = useState(() => new ClockState());
    return (
        <Time minutes={minutes} hours={hours} seconds={seconds} microseconds={microseconds} hideLabels={hideLabels} />
    );
});
