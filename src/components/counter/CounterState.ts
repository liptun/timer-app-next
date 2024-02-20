import { action, computed, makeObservable, observable } from "mobx";
import dayjs from "dayjs";

export class CounterState {
    private interval: null | NodeJS.Timeout = null;
    @observable private clock: null | dayjs.Dayjs = null;

    public constructor() {
        makeObservable(this);
        this.start();
    }

    @action public start = () => {
        this.interval = setInterval(() => {
            this.clock = dayjs();
        }, 10);
    };

    @action public stop = () => {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    };

    @computed get hours(): number {
        return this.clock?.hour() ?? 0;
    }

    @computed get minutes(): number {
        return this.clock?.minute() ?? 0;
    }

    @computed get seconds(): number {
        return this.clock?.second() ?? 0;
    }

    @computed get microseconds(): number {
        return this.clock?.millisecond() ?? 0;
    }
}
