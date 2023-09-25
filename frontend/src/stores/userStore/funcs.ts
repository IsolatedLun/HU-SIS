import type { Schedule } from "./types";

export function calculateTotalHours(schedule: Schedule[]) {
    return schedule.reduce((sum: number, { time }) => {
        return sum += time[1].getHours() - time[0].getHours();
    }, 0);
} 

export function calculateTotalCredits(schedule: Schedule[]) {
    return schedule.reduce((sum: number, { credits }) => sum += credits, 0);
}