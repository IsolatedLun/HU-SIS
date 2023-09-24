export interface Schedule {
    section: string;
    location: string;

    days: string[];
    time: [Date, Date]
    
    credits: number;
}

export interface User {
    id: number;
    name: string;
    schedule: Record<string, Schedule>;
}