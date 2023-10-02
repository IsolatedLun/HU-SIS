import type { T_Days } from "../../../stores/types";
import type { Some } from "../../types";

export interface T_SectionScheduleQuery {
    courseName: string;
    instructor: string;
    faculty: string;
    department: string;
    days: T_Days[];
    
    time: [Some<Date>, Some<Date>]
}

export interface T_SectionCourse {
    courseName: string;
    title: string;
    language: string;
    instructor: string;
    room: string;
    days: T_Days[];
    
    capacity: number;
    enrolled: number;
    credits: number;
    section: number;

    time: [Date, Date]
}