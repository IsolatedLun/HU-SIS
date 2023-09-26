import { get, writable } from "svelte/store"
import type { Schedule, Store_User } from "./types"
import { calculateTotalCredits, calculateTotalHours } from "./funcs";

function createUserStore() {
    const store = writable<Store_User>({
        id: -1,
        name: "",
        schedule: {}
    })

    return {
        subscribe: store.subscribe,
        update: store.update,
        set: store.set,

        // Setters
        setUser: (id: number, name: string) => store.update((_this) => {
            _this.id = id;
            _this.name = name;

            return _this;
        }),

        setSchedule: (schedule: Record<string, Schedule>) => store.update((_this) => {
            _this.schedule = schedule;

            return _this;
        }),

        // Getters
        getSchedule: () => get(store).schedule,
        getTotalCredits: () => calculateTotalCredits(Object.values(get(store).schedule)),
        getTotalHours: () => calculateTotalHours(Object.values(get(store).schedule))
    }
}

export const userStore = createUserStore();

userStore.setUser(2410040, "Joe Mozian")
userStore.setSchedule({
    "English 201": {
        section: 2,
        credits: 3,
        days: ["T", "TH"],
        location: "MEH 502",
        time: [new Date(), new Date()]
    },
    "Physics 102": {
        section: 8,
        credits: 4,
        days: ["W", "F"],
        location: "MEH 702",
        time: [new Date(), new Date()]
    },
    "Biology 101": {
        section: 4,
        credits: 3,
        days: ["M", "W", "F"],
        location: "MEH 203",
        time: [new Date(), new Date()]
    },
    "Math 101": {
        section: 6,
        credits: 3,
        days: ["T", "TH"],
        location: "COL 502",
        time: [new Date(), new Date()]
    }
})