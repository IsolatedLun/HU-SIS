import type { T_Days } from "../../../stores/types";
import type { Some } from "../../types";

export interface T_SectionScheduleQuery {
    courseName: string;
    instructor: string;
    days: T_Days[];
    
    time: [string | undefined, string | undefined]
}

export interface T_SectionCourse {
    course: string;
    title: string;
    language: string;
    instructor: string;
    room: string[];
    days: T_Days[];
    
    capacity: number;
    enrolled: number;
    credits: number;
    section: number;

    time: string[]
}

export interface T_SectionCourseData {
    courses: T_SectionCourse[],
    course_names: string[],
    instructors: string[],
}