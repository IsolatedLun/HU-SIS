import { convertTimeFormatToDate } from "../../../utils/general";
import type { T_SectionCourse, T_SectionScheduleQuery } from "./types";

export function filterSchedule(courses: T_SectionCourse[], query: T_SectionScheduleQuery) {
    courses = courses
    .filter(x => x.course.toLowerCase().indexOf(query.courseName.toLowerCase()) > -1)
    .filter(x => x.instructor.toLowerCase().indexOf(query.instructor.toLowerCase()) > -1)
    .filter(x => {
        const from1 = query.time[0] ? convertTimeFormatToDate(query.time[0]) : null;
        const till1 = query.time[1] ? convertTimeFormatToDate(query.time[1]) : null;

        for(let i = 0; i < x.time.length; i++) {
            if(x.time[i] === 'TBA')
                return false;
            
            const [start, end] = x.time[i].split(' - ')
            const from2 = convertTimeFormatToDate(start);
            const till2 = convertTimeFormatToDate(end);

            if (from1 && till1) {
                return from1 > from2 && till1 > till2;
            }

            else if(from1) {
                return from1 > from2;
            }

            else if(till1) {
                return till1 > till2;
            }

            return true;
        }
    });

    return courses;
}