export interface Schedule {
    location: string;
    
    days: ("M" | "T" | "W" | "TH" | "F")[];
    time: [Date, Date]
    
    section: number;
    credits: number;
}

export interface User {
    id: number;
    name: string;
    schedule: Record<string, Schedule>;
}