import type { T_Days } from "../types";

export interface T_Schedule {
    location: string;
    
    days: T_Days[];
    time: [Date, Date]
    
    section: number;
    credits: number;
}

export interface T_PaymentSlip {
    id: number;
    fullNetToPay: number;
    paidAmount: number;
    
    due_date: Date;

    type: 'usd' | 'lbp';
}

export interface Store_User {
    id: number;
    name: string;
    schedule: Record<string, T_Schedule>;
    payments: T_PaymentSlip[];

    isLogged: boolean;
}