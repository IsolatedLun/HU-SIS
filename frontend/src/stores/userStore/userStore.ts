import { get, writable } from "svelte/store"
import type { T_Schedule, Store_User, T_PaymentSlip } from "./types"
import { calculateTotalCredits, calculateTotalHours } from "./funcs";
import { convertTimeFormatToDate } from "../../utils/general";

function createUserStore() {
    const store = writable<Store_User>({
        id: -1,
        name: "",
        schedule: {},
        payments: [],

        isLogged: false,
    })

    return {
        subscribe: store.subscribe,
        update: store.update,
        set: store.set,

        // Setters
        setUser: (id: number | string, name: string) => store.update((_this) => {
            _this.id = id;
            _this.name = name;
            _this.isLogged = true;

            return _this;
        }),

        setSchedule: (schedule: Record<string, T_Schedule>) => store.update((_this) => {
            _this.schedule = schedule;

            return _this;
        }),

        // Getters
        getSchedule: () => get(store).schedule,
        getTotalCredits: () => calculateTotalCredits(Object.values(get(store).schedule)),
        getTotalHours: () => calculateTotalHours(Object.values(get(store).schedule)),

        // Adders
        addPaymentSlip: (payment: T_PaymentSlip) => store.update(_this => {
            _this.payments.push(payment);
            return _this;
        })
    }
}

export const userStore = createUserStore();

userStore.setUser(2410040, "Joe Mozian");
userStore.setSchedule({
    "English 201": {
        section: 2,
        credits: 3,
        days: ["T", "TH"],
        location: "MEH 502",
        time: [convertTimeFormatToDate("13:00"), convertTimeFormatToDate("14:15")]
    },
    "Physics 102": {
        section: 8,
        credits: 4,
        days: ["W", "F"],
        location: "MEH 702",
        time: [convertTimeFormatToDate("11:00"), convertTimeFormatToDate("12:00")]
    },
    "Physics 102L": {
        section: 8,
        credits: 4,
        days: ["W", "F"],
        location: "MEH 702",
        time: [convertTimeFormatToDate("10:00"), convertTimeFormatToDate("11:00")]
    },
    "Biology 101": {
        section: 4,
        credits: 3,
        days: ["M", "W", "F"],
        location: "MEH 203",
        time: [convertTimeFormatToDate("8:00"), convertTimeFormatToDate("8:50")]
    },
    "Math 101": {
        section: 6,
        credits: 3,
        days: ["T", "TH"],
        location: "COL 502",
        time: [convertTimeFormatToDate("16:00"), convertTimeFormatToDate("17:15")]
    }
});

userStore.addPaymentSlip({
    id: 1,
    type: 'usd',
    fullNetToPay: 9000,
    paidAmount: 200,
    due_date: new Date(),
});
userStore.addPaymentSlip({
    id: 2,
    type: 'lbp',
    fullNetToPay: 9000,
    paidAmount: 0,
    due_date: new Date(),
});