import { action, computed, makeObservable, observable } from "mobx";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export class CounterState {
    private interval: null | NodeJS.Timeout = null;
    private startTime: null | dayjs.Dayjs = null;
    @observable private clock: null | duration.Duration = null;

    public constructor() {
        makeObservable(this);
        this.start();
    }

    @action private tick = (): void => {
        if (this.startTime !== null) {
            this.clock = dayjs.duration(dayjs().diff(this.startTime));
        }
    };

    @action public start = (): void => {
        this.startTime = dayjs();
        this.interval = setInterval(this.tick, 10);
    };

    @action public stop = (): void => {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    };

    @computed public get hours(): number {
        return this.clock?.hours() ?? 0;
    }

    @computed public get minutes(): number {
        return this.clock?.minutes() ?? 0;
    }

    @computed public get seconds(): number {
        return this.clock?.seconds() ?? 0;
    }

    @computed public get microseconds(): number {
        return this.clock?.milliseconds() ?? 0;
    }
}
