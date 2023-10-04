import type { Schedule } from "./types";

export function calculateTotalHours(schedule: Schedule[]) {
    return schedule.reduce((sum: number, { time }) => {
        return sum += 
        (time[1].getHours() - time[0].getHours()) +
        (time[1].getMinutes() / 60 - time[0].getMinutes() / 60)
        ;
    }, 0).toPrecision(2);
} 

export function calculateTotalCredits(schedule: Schedule[]) {
    return schedule.reduce((sum: number, { credits }) => sum += credits, 0);
}