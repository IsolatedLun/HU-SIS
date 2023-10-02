import type { T_Days } from "../types";

export interface Schedule {
    location: string;
    
    days: T_Days[];
    time: [Date, Date]
    
    section: number;
    credits: number;
}

export interface Store_User {
    id: number;
    name: string;
    schedule: Record<string, Schedule>;
}