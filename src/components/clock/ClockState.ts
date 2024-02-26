import { action, computed, makeObservable, observable } from "mobx";
import dayjs from "dayjs";

export class ClockState {
    private interval: null | NodeJS.Timeout = null;
    @observable private clock: null | dayjs.Dayjs = null;

    public constructor() {
        makeObservable(this);
        this.start();
    }

    @action private tick = (): void => {
        this.clock = dayjs();
    };

    @action public start = (): void => {
        this.interval = setInterval(this.tick, 10);
    };

    @action public stop = (): void => {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    };

    @computed public get hours(): number {
        return this.clock?.hour() ?? 0;
    }

    @computed public get minutes(): number {
        return this.clock?.minute() ?? 0;
    }

    @computed public get seconds(): number {
        return this.clock?.second() ?? 0;
    }

    @computed public get microseconds(): number {
        return this.clock?.millisecond() ?? 0;
    }
}
